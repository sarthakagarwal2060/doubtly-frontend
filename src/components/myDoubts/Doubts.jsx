import React from "react";
import DoubtCard from "../dashboard/DoubtCard";
import { Select } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import  { useState, useEffect } from "react";
import axios from "axios";

function Doubts() {
  const navigate = useNavigate();

  function handleDoubtClick(doubt) {
    navigate(`/dashboard/doubt/${doubt.id}`);
  }

  const [myDoubts, setMyDoubts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoading(true);
    const fetchMyDoubts = async () => {
      const response = await axios.get(
        "https://doubtly-backend.onrender.com/api/doubt/mydoubt",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setMyDoubts(response.data.result);
      setLoading(false);
    };
    fetchMyDoubts();
  }, []);

  if (loading) {
    return (<div><Loader /></div>);
  }

  if(myDoubts){
    return (
      <>
        <main className="pt-16 pl-72 pr-8 bg-primary">
          <div className="container py-6 space-y-8 ">
            <div className="flex items-center justify-between gap-4 ">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">My Doubts</h1>
              </div>

              <Select.Root defaultValue="all" size="3" radius="large">
                <Select.Trigger
                  className="w-[160px]"
                  placeholder="Filter doubts"
                ></Select.Trigger>
                <Select.Content color="blue">
                  <Select.Item value="all">All Doubts</Select.Item>
                  <Select.Item value="unanswered">Unanswered</Select.Item>
                  <Select.Item value="resolved">Resolved</Select.Item>
                </Select.Content>
              </Select.Root>
            </div>
            <div className="grid gap-4">
              {myDoubts.map((doubt, id) => (
                <DoubtCard
                  key={doubt.title}
                  {...doubt}
                  className="bg-white/50 hover:bg-white/80 transition-colors"
                  onClick={() => handleDoubtClick(doubt)}
                />
              ))}
            </div>
          </div>
        </main>
      </>
    );
  }
  else {
    return (
      <>
        <main className="pt-16 pl-72 pr-8 h-screen bg-primary ">
          <div className="container py-6 space-y-8 ">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">My Doubts</h1>
              </div>
            </div>
            <h4 className="text-md font-semibold text-textSecondary">
              No doubts posted yet...
            </h4>
          </div>
        </main>
      </>
    )
  }
}

export default Doubts;
