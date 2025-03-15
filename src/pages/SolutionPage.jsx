import React, { useState, useRef, useEffect } from 'react';
import { Card, Text, Button, Box, Flex, Avatar, Separator, TextArea } from '@radix-ui/themes';
import { ThumbsUp, MessageCircle, Clock, X } from 'lucide-react';
import { toast } from 'react-toastify';
import Dashboard from './Dashboard';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

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
    // console.log("No doubt data but not loading or error state");
    return (
      <>
        <div className="fixed inset-0 filter blur-sm">
          <Dashboard />
        </div>
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="w-full max-w-4xl px-4">
            <Card className="w-full bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl">
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
        </div>
      </>
    );
  }

  return (
    <>
      <div className="fixed inset-0 filter blur-sm">
        <Dashboard />
      </div>
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="w-full max-w-4xl px-4">
          <Card className="w-full bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
            <Flex justify="between" align="center" mb="4">
              <Text size="6" weight="bold">Solutions</Text>
              <Button 
                variant="ghost" 
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={18} />
              </Button>
            </Flex>

            {/* Doubt details */}
            <Card className="mb-6 p-4 bg-gray-50">
              <Flex gap="2" direction="column">
                <Text size="5" weight="bold">{currentDoubt.title || 'Untitled Doubt'}</Text>
                <Text size="2" color="gray">Posted by {currentDoubt.username || 'Unknown'}</Text>
                <Text size="3">{currentDoubt.description || 'No description available'}</Text>
                <Flex gap="4" className="text-sm text-gray-500 mt-2">
                  <Flex align="center" gap="1">
                    <MessageCircle size={16} /> {currentDoubt.answerCount ?? 0}
                  </Flex>
                  <Flex align="center" gap="1">
                    <ThumbsUp size={16} /> {currentDoubt.upvotes ?? 0}
                  </Flex>
                  <Flex align="center" gap="1">
                    <Clock size={16} /> {currentDoubt.timeAgo || 'Recently'}
                  </Flex>
                </Flex>
              </Flex>
            </Card>

            <Separator size="4" mb="4" />

            {/* Solutions list */}
            <Box className="mb-6">
              <Text size="4" weight="bold" mb="3">All Solutions</Text>
              
              {solutions.length === 0 ? (
                <Text size="2" color="gray">No solutions yet. Be the first to help!</Text>
              ) : (
                <Flex direction="column" gap="3">
                  {solutions.map((solution, index) => (
                    <Card key={index} className="p-4 bg-gray-50">
                      <Flex gap="3" direction="column">
                        <Flex align="center" gap="2">
                          <Avatar 
                            size="2" 
                            src={solution.user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(solution.username || 'User')}`} 
                            fallback={solution.user?.name?.[0] || 'U'} 
                          />
                          <Text size="2" weight="bold">{solution.username || 'Anonymous'}</Text>
                          <Text size="1" color="gray">{solution.timeAgo}</Text>
                        </Flex>
                        <Text size="2">{solution.solution}</Text>
                        <Flex align="center" gap="2">
                          <Button variant="ghost" size="1">
                            <ThumbsUp size={14} />
                            <Text size="1">{solution.upvotes || 0}</Text>
                          </Button>
                        </Flex>
                      </Flex>
                    </Card>
                  ))}
                </Flex>
              )}
            </Box>

            {/* Post new solution */}
            <Box>
              <Text size="4" weight="bold" mb="3">Post Your Solution</Text>
              <TextArea 
                placeholder="Share your solution or approach..." 
                ref={solutionRef}
                className="mb-3 min-h-[120px]"
              />
              <Flex justify="end" gap="3">
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
                  {submitting ? "Posting..." : "Post Solution"}
                </Button>
              </Flex>
            </Box>
          </Card>
        </div>
      </div>
    </>
  );
}

export default SolutionPage; 