import { Award, MessageCircle, ThumbsUp } from "lucide-react"
import { Card} from "@radix-ui/themes";

function Stats() {
  return (
    <>
      <div className="grid gap-4 grid-cols-3">
        <Card className="backdrop-blur-sm bg-white/30 border-borderColor shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 p-3 pb-2 ">
            <span className="text-sm font-medium">Doubts Solved</span>
            <MessageCircle className="h-4 w-4 " />
          </div>
          <div className="p-3 pt-0">
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-textSecondary">+4 from last week</p>
          </div>
        </Card>
        <Card className="backdrop-blur-sm bg-white/30 border-borderColor shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 p-3 pb-2">
            <span className="text-sm font-medium">Points Earned</span>
            <Award className="h-4 w-4 " />
          </div>
          <div className="p-3 pt-0">
            <div className="text-2xl font-bold">1,456</div>
            <p className="text-xs text-textSecondary">+180 from last week</p>
          </div>
        </Card>
        <Card className="backdrop-blur-sm bg-white/30 border-borderColor shadow-sm">
          <div className="flex flex-row items-center justify-between space-y-0 p-3 pb-2">
            <span className="text-sm font-medium">Upvotes</span>
            <ThumbsUp className="h-4 w-4 " />
          </div>
          <div className="p-3 pt-0">
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-textSecondary">+8 from last week</p>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Stats;
