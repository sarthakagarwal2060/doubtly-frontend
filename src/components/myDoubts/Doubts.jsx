import React from "react";
import DoubtCard from "../dashboard/DoubtCard";
import { Select } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

function Doubts({myDoubts}) {
  const navigate = useNavigate();

  function handleDoubtClick(doubt) {
    navigate(`/dashboard/doubt/${doubt._id}`);
  }

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

export default Doubts;
