import React, { useState, useRef, useEffect } from 'react';
import { Card, Text, Button, Box, Flex, Avatar, Separator, TextArea } from '@radix-ui/themes';
import { ThumbsUp, MessageCircle, Clock, X } from 'lucide-react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

function SolutionPage() {
  const { doubtId } = useParams();
  console.log("Current doubtId from params:", doubtId);
  
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const solutionRef = useRef(null);
  
  const [doubt, setDoubt] = useState(null);
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // console.log("useEffect triggered with doubtId:", doubtId);
    fetchDoubtDetails();
    fetchSolutions();
    if (!doubtId) {
      // console.log("No doubtId found");
      setError("Invalid doubt ID");
      return;
    }
  }, [doubtId]);

  const fetchDoubtDetails = async () => {
    try {
      console.log("Fetching doubt details for ID:", doubtId);
      const token = localStorage.getItem("token");
      if (!token) {
        // console.log("No token found in localStorage");
        setError("Authentication token missing");
        return;
      }
      
      const response = await axios.get(
        `https://doubtly-backend.onrender.com/api/doubt/show/id/${doubtId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      // console.log("Doubt API Response:", response.data);
      if (!response.data.result) {
        // console.log("No result in response data");
        setError("No doubt data received");
        return;
      }
      setDoubt(response.data.result);
      // console.log("Doubt state set to:", response.data.result);
      setError(null);
    } catch (error) {
      // console.error("Error fetching doubt details:", error.response || error);
      setError("Failed to load doubt details. Please try refreshing the page.");
      toast.error("Failed to load doubt details");
    }
  };

  const fetchSolutions = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://doubtly-backend.onrender.com/api/solution/show/${doubtId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      // console.log("Solutions data:", response.data);
      setSolutions(response.data.result || []);
      setError(null);
    } catch (error) {
      // console.error("Error fetching solutions:", error);
      setError("Failed to load solutions. Please try refreshing the page.");
      toast.error("Failed to load solutions");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitSolution = async () => {
    if (!solutionRef.current?.value?.trim()) {
      toast.error("Please enter a solution");
      return;
    }

    setSubmitting(true);
    
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://doubtly-backend.onrender.com/api/solution/add/${doubtId}`,
        {
          solution: solutionRef.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        toast.success("Solution posted successfully!");
        solutionRef.current.value = "";
        fetchSolutions();
      }
    } catch (error) {
      // console.error("Error posting solution:", error);
      toast.error("Failed to post solution");
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };

  // Simple fallback for API failures
  const currentDoubt = doubt || {
    _id: doubtId,
    title: "Error loading doubt",
    heading: "Error loading doubt",
    username: "Unknown",
    description: "Could not load doubt details. Please try again later.",
    answerCount: 0,
    upvotes: 0,
    timeAgo: "Unknown",
    tags: [],
    user: {
      name: "Unknown",
      avatar: null
    }
  };

  // console.log("Current doubt state before render:", doubt);
  // console.log("Using doubt data:", currentDoubt);

  // If we have no doubt data but we're not loading, something went wrong
  if (!loading && !doubt && !error) {
    return (
      <>
        <NavBar doubtly={false} searchBar={false} notification={true} profile={true}/>
        <SideBar />
        <main className="pt-16 pl-72 pr-8 min-h-screen bg-primary">
          <div className="container py-6">
            <Card className="w-full bg-white p-6 rounded-lg shadow-xl">
              <Flex justify="between" align="center" mb="4">
                <Text size="6" weight="bold">Error</Text>
                <Button 
                  variant="ghost" 
                  onClick={() => navigate(-1)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={18} />
                </Button>
              </Flex>
              <Text size="3" color="red" mb="4">Failed to load doubt data. Please try again.</Text>
              <Flex gap="3" justify="end">
                <Button variant="soft" onClick={() => navigate(-1)}>Go Back</Button>
                <Button color="blue" onClick={() => {
                  setLoading(true);
                  fetchDoubtDetails();
                }}>Retry</Button>
              </Flex>
            </Card>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <NavBar doubtly={false} searchBar={false} notification={true} profile={true}/>
      <SideBar />
      <main className="pt-16 pl-72 pr-8 bg-primary">
        <div className="container py-6 space-y-8">
          {/* <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold tracking-tight">Solutions</h1>
              <p className="text-gray-500">View and contribute solutions</p>
            </div>
          </div> */}

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-8 space-y-6">
              <div className="space-y-3">
                <div>
                  <Text size="6" weight="bold" className="text-gray-900">
                    {currentDoubt.title || 'Untitled Doubt'}
                  </Text>
                  <br/>
                  <Text className="mt-2 text-gray-700 leading-relaxed">
                    {currentDoubt.description || 'No description available'}
                  </Text>
                </div>
                <div className="flex items-center justify-end gap-1">
                    <Text size="3">Posted by </Text>
                    <Text size="3" weight="bold">{currentDoubt.username+" " || 'Unknown' }</Text>
                </div>

                <Flex gap="6" className="pt-4 border-t border-gray-200">
                  <Flex align="center" gap="2" className="text-gray-500">
                    <MessageCircle size={16} />
                    <Text size="2">{currentDoubt.answerCount ?? 0} Solutions</Text>
                  </Flex>
                  <Flex align="center" gap="2" className="text-gray-500">
                    <ThumbsUp size={16} />
                    <Text size="2">{currentDoubt.upvotes ?? 0} Upvotes</Text>
                  </Flex>
                  <Flex align="center" gap="2" className="text-gray-500">
                    <Clock size={16} />
                    <Text size="2">{currentDoubt.timeAgo || 'Recently'}</Text>
                  </Flex>
                </Flex>
                </div>


              <div className="space-y-4">
                <Text size="5" weight="bold">Solutions ({solutions.length})</Text>
                {solutions.length === 0 ? (
                  <Card className="bg-white/50 p-8 text-center">
                    <Text size="2" color="gray" className="mb-2">No solutions yet.</Text>
                    <br />
                    <Text size="2" color="gray">Be the first one to help solve this doubt!</Text>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    {solutions.map((solution, index) => (
                      <Card key={index} className="bg-white/50 hover:bg-white/80 transition-colors p-6">
                        <Flex direction="column" gap="4">
                          <Text className="text-gray-700">{solution.solution} </Text>
                          <Flex align="center" justify="between">
                            <Flex align="center" gap="1">
                              <Avatar 
                                size="2"
                                src={solution.user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(solution.username || 'User')}`}
                                fallback={solution.user?.name?.[0] || 'U'}
                                className="border-2 border-white"
                              />
                              <div>
                                <Text weight="bold" size="2">{solution.username+" " || 'Anonymous'}</Text>                                
                                <Text size="1" color="gray">{solution.timeAgo}</Text>
                              </div>
                            </Flex>
                            <Button variant="soft" size="1">
                              <ThumbsUp size={14} />
                              <Text size="1" className="ml-2">{solution.upvotes || 0}</Text>
                            </Button>
                          </Flex>
                        </Flex>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="col-span-4">
              <Card className="bg-white/50 hover:bg-white/80 sticky top-24">
                <div className="p-6">
                  <h3 className="mb-4 font-bold text-xl">Post Your Solution</h3>
                  <input placeholder="Share your solution or approach..." ref={solutionRef} 
                    className="min-h-[400px] min-w-full mb-4 resize-none p-2 bg-white/50 border-[1px] border-gray-300"/>
                  <Flex gap="3" justify="end">
                    <Button 
                      variant="soft" 
                      onClick={handleClose}
                      disabled={submitting}
                    >
                      Cancel
                    </Button>
                    <Button 
                      color="blue"
                      onClick={handleSubmitSolution}
                      disabled={submitting}
                    >
                      {submitting ? (
                        <Flex align="center" gap="2">
                          <span className="animate-spin">⏳</span> 
                          <span>Posting...</span>
                        </Flex>
                      ) : (
                        'Post Solution'
                      )}
                    </Button>
                  </Flex>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SolutionPage; 