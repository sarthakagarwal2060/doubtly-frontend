import { Card, Badge } from "@radix-ui/themes";
import { MessageCircle, ThumbsUp, Clock } from "lucide-react";

function DoubtCard({ title, tags, username, answerCount, upvotes, timeAgo, className, onClick }) {

  return (
    <>
      <Card 
        className={`backdrop-blur-sm bg-white/30 border-borderColor shadow-sm hover:shadow-md transition-shadow cursor-pointer ${className || ''}`}
        onClick={onClick}
      >
        
        <div className="space-y-2 p-3 pb-6">
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Badge key={tag} radius="full" className={`text-xs p-24 ${tag==="ai/ml"? "uppercase" : "capitalize"}`}>
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="font-semibold leading-none pt-2">
            {title}
          </h3>
        </div>
        
        <div className="p-3 pt-0">
          <div className="pb-6 pt-0">
            <p className="text-sm">Posted by {username}</p>
          </div>

          <div className="text-sm">
            <div className="flex items-center gap-4 text-textSecondary">
              <span className="flex items-center gap-1 ">
                <MessageCircle className="h-4 w-4" /> {answerCount}
              </span>
              <span className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" /> {upvotes}
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
