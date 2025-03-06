
import { Button } from "@radix-ui/themes";
import { PlusCircle } from "lucide-react";
import DoubtCard from "./DoubtCard";
import { useNavigate } from "react-router-dom";
function TrendingDoubts() {
    const navigate = useNavigate();
    function postdoubt() {
      navigate("/dashboard/postdoubt")
    }
    const trendingDoubts = [
        {
          title: "Understanding React Hooks and Custom Hooks",
          tags: ["React", "JavaScript"],
          username: "tech_enthusiast",
          answerCount: 5,
          upvotes: 12,
          timeAgo: "2h ago",
        },
        {
          title: "Best practices for state management in large applications",
          tags: ["Redux", "State Management"],
          username: "code_master",
          answerCount: 3,
          upvotes: 8,
          timeAgo: "4h ago",
        },
        {
          title: "Implementing authentication with JWT",
          tags: ["Security", "Backend"],
          username: "security_pro",
          answerCount: 7,
          upvotes: 15,
          timeAgo: "6h ago",
        },
      ];

  return (
    <>
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Trending Doubts</h2>
          <Button color="blue" size="3" radius="large" onClick={postdoubt}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Post a Doubt
          </Button>
        </div>
        <div className="grid gap-4">
          {trendingDoubts.map((doubt) => (
            <DoubtCard key={doubt.title} {...doubt} />
          ))}
        </div>
      </section>
    </>
  );
}

export default TrendingDoubts