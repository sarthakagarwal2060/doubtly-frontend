import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Loader from '../components/Loader';
import DoubtCard from '../components/dashboard/DoubtCard';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const initialQuery = searchParams.get('q') || '';
    setQuery(initialQuery);
    if (initialQuery) {
      fetchSearchResults(initialQuery);
    }
  }, [searchParams]);

  const fetchSearchResults = async (searchQuery) => {
    setLoading(true);
    setError(''); // Reset error before making a new request
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        `https://doubtly-backend.onrender.com/api/doubt/search?q=${searchQuery}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setResults(response.data.result || []);
      console.log(results) // Ensure results is always an array
    } catch (err) {
      setError('Failed to fetch search results. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDoubtClick = (doubt) => {
    navigate(`/dashboard/doubt/${doubt.id}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <NavBar doubtly={true} searchBar={true} notification={true} profile={true} />
      <SideBar />
      <main className="pt-16 pl-72 pr-8 bg-primary">
        <div className="container py-6 space-y-8">
          <h1 className="text-3xl font-bold tracking-tight">Search Results</h1>
          {error && <p className="text-red-500">{error}</p>}
          <div className="grid gap-4">
          {results.length > 0 ? (
    results.map((doubt) => (
      <DoubtCard
         {...doubt}
        onClick={() => handleDoubtClick(doubt)} // Handle click event
      />
    ))
            ) : (
              <p className="text-gray-500">
                {query
                  ? `No results found for "${query}".`
                  : 'Start searching for doubts using the search bar above.'}
              </p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default SearchPage;