import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DoubtCard from "../dashboard/DoubtCard";
import { Flex, Select } from "@radix-ui/themes";
import Loader from "../Loader";

function Doubts() {
  const navigate = useNavigate();
  const [allDoubts, setAllDoubts] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleDoubtClick(doubt) {
    navigate(`/dashboard/doubt/${doubt.id}`);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchAllDoubts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://doubtly-backend.onrender.com/api/doubt/showAll",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setAllDoubts(response.data.result);
      setLoading(false);
    };
    fetchAllDoubts();
  }, []);

  if (loading) {
    return <div><Loader /></div>;
  }

  return (
    <>
      <main className="pt-16 pl-72 pr-8 bg-primary">
        <div className="container py-6 space-y-8">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">All Doubts</h1>
            </div>
            <Flex gap="4"> 
              <div>
                <Select.Root defaultValue="" size="3" radius="large">
                  <Select.Trigger className="w-[160px]" placeholder="Filter by Subject"></Select.Trigger>
                  <Select.Content color="blue">
                    <Select.Item value="all">Maths</Select.Item>
                    <Select.Item value="dsa">DSA</Select.Item>
                    <Select.Item value="frontend">Frontend</Select.Item>
                    <Select.Item value="backend">Backend</Select.Item>
                    <Select.Item value="ai/ml">AI/ML</Select.Item>
                  </Select.Content>
                </Select.Root>
              </div>
              <div>
                <Select.Root defaultValue="" size="3" radius="large">
                  <Select.Trigger className="w-[160px]" placeholder="Filter doubts"></Select.Trigger>
                  <Select.Content color="blue">
                    <Select.Item value="all">All Doubts</Select.Item>
                    <Select.Item value="unanswered">Trending</Select.Item>
                    <Select.Item value="resolved">Unanswered</Select.Item>
                  </Select.Content>
                </Select.Root>`
              </div>
            </Flex>
          </div>
          <div className="grid gap-4">
            {allDoubts.map((doubt) => (
              <DoubtCard
                key={doubt._id || doubt.title}
                {...doubt}
                onClick={() => handleDoubtClick(doubt)}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Doubts;
