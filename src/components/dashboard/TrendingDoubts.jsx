import { Button } from "@radix-ui/themes";
import { PlusCircle } from "lucide-react";
import DoubtCard from "./DoubtCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function TrendingDoubts() {
  const navigate = useNavigate();
  function postdoubt() {
    navigate("/dashboard/postdoubt");
  }
  const [trendingDoubts, setTrendingDoubts] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchTrendingDoubts = async () => {
      const response = await axios.get(
        "https://doubtly-backend.onrender.com/api/doubt/showAll",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTrendingDoubts(response.data.result);
    };
    fetchTrendingDoubts();
  }, []);
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

export default TrendingDoubts;
