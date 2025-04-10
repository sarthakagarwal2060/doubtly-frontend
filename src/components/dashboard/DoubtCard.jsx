import { Card, Badge } from "@radix-ui/themes";
import { MessageCircle, ThumbsUp, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function DoubtCard({ title, tags, username, answerCount, upvotes: initialUpvotes, timeAgo, className, onClick, id, isUpvoted = false, status}) {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [isUpvoting, setIsUpvoting] = useState(false);
  const [hasUpvoted, setHasUpvoted] = useState(isUpvoted);


  useEffect(() => {
    setUpvotes(initialUpvotes);
    setHasUpvoted(isUpvoted);
  }, [initialUpvotes, isUpvoted]);
  
  async function handleUpvoteInBackend(doubtId) {
    const token = localStorage.getItem("token");
    
    if (!token) {
      throw new Error("Authentication required");
    }
    
    return axios.put(
      `https://doubtly-backend.onrender.com/api/doubt/updateUpvotes/${doubtId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );
  }

  const handleUpvoteClick = async (e) => {
    e.stopPropagation();
    
    if (isUpvoting) return;
    
    setIsUpvoting(true);
    

    const newUpvoteState = !hasUpvoted;
    setHasUpvoted(newUpvoteState);
    setUpvotes(prev => newUpvoteState ? prev + 1 : prev - 1);
    
    try {
      await handleUpvoteInBackend(id);
  
      if (newUpvoteState) {
        toast.success("Upvoted successfully!");
      } else {
        toast.success("Upvote removed successfully");
      }
    } catch (error) {
      setHasUpvoted(!newUpvoteState);
      setUpvotes(prev => !newUpvoteState ? prev + 1 : prev - 1);
      
      if (error.message === "Authentication required") {
        toast.error("Please log in to upvote");
      } else {
        toast.error("Failed to update upvote. Please try again.");
      }
      console.error("Upvote error:", error);
    } finally {
      setIsUpvoting(false);
    }
  };

  const getStatusColor = () => {
    if (status === "verified solution available") {
      return "bg-green-700";
    } else if (status === "unverified solution available") {
      return "bg-yellow-600";
    } else {
      return "bg-red-800";
    }
  };

  const getStatusLabel = () => {
    if (status === "verified solution available") {
      return "Solved";
    } else if (status === "unverified solution available") {
      return "Partially Solved";
    } else {
      return "Unsolved";
    }
  };

  return (
    <>
      <Card
        className={`backdrop-blur-sm bg-white/30 border-borderColor shadow-sm hover:shadow-md transition-shadow cursor-pointer dark:bg-[#1C1C1E] relative ${
          className || ""
        }`}
        onClick={onClick}
      >
        

        <div className="space-y-2 p-3 pb-6">
          <div className="flex gap-2 justify-between">
            {tags.map((tag) => (
              <Badge
                size={"1"}
                color={tag === "frontend" ? "crimson" : tag === "backend" ? "yellow" : tag === "ai/ml" ? "green" : tag === "maths" ? "bronze" : tag === "dsa" ? "purple" : ""}
                key={tag}
                radius="full"
                className={`text-xs p-24 ${
                  tag === "ai/ml" ? "uppercase" : "capitalize"
                }`}
                style={{ fontSize: "0.75rem", lineHeight: "1rem" }}
              >
                {tag}
              </Badge>
            ))}
            <div className={`rounded-full px-2 py-1 text-xs text-white font-medium ${getStatusColor()}`}>
              {getStatusLabel()}
            </div>
          </div>
          <h3 className="font-semibold leading-none pt-2">{title}</h3>
        </div>

        <div className="p-3 pt-0">
          <div className="pb-6 pt-0">
            <p className="text-sm">Posted by {username}</p>
          </div>

          <div className="text-sm">
            <div className="flex items-center gap-4 text-textSecondary">
              <span className="flex items-center gap-1 ">
                <MessageCircle className="h-4 w-4 " /> {answerCount}
              </span>
              <span
                className={`flex items-center gap-1 hover:text-blue-500 transition-colors ${
                  isUpvoting ? "opacity-50" : ""
                } ${hasUpvoted ? "text-blue-500" : ""}`}
                onClick={handleUpvoteClick}
                title={hasUpvoted ? "Remove upvote" : "Upvote this doubt"}
              >
                <ThumbsUp
                  className={`h-4 w-4 cursor-pointer ${
                    isUpvoting ? "animate-pulse" : ""
                  }`}
                  fill={hasUpvoted ? "currentColor" : "none"}
                />
                {upvotes}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> {timeAgo}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default DoubtCard;





