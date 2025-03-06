import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

import DoubtCard from "../components/dashboard/DoubtCard";
import { Select } from "@radix-ui/themes";

const myDoubts = [
  {
    title: "How to optimize React performance?",
    tags: ["React", "Performance"],
    username: "john_doe",
    answerCount: 3,
    upvotes: 5,
    timeAgo: "2d ago",
  },
  {
    title: "Understanding TypeScript Generics",
    tags: ["TypeScript", "Programming"],
    username: "john_doe",
    answerCount: 2,
    upvotes: 4,
    timeAgo: "5d ago",
  },
  {
    title: "Best practices for API error handling",
    tags: ["API", "Error Handling"],
    username: "john_doe",
    answerCount: 1,
    upvotes: 2,
    timeAgo: "1w ago",
  },
];

function MyDoubts() {
  return (
    <>
      <NavBar searchBar={true} />
      <SideBar />
      <main className="pt-16 pl-72 pr-8 h-screen bg-primary ">
        <div className="container py-6 space-y-8 ">
          
          <div className="flex items-center justify-between gap-4 ">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">
                My Doubts
              </h1>
            </div>
            <Select.Root defaultValue="all" size="3">
              <Select.Trigger
                className="w-[160px]"
                placeholder="Filter doubts"
              ></Select.Trigger>
              <Select.Content>
                <Select.Item value="all">All Doubts</Select.Item>
                <Select.Item value="unanswered">Unanswered</Select.Item>
                <Select.Item value="resolved">Resolved</Select.Item>
              </Select.Content>
            </Select.Root>
          </div>
          <div className="grid gap-4">
            {myDoubts.map((doubt) => (
              <DoubtCard
                key={doubt.title}
                {...doubt}
                className="bg-white/50 hover:bg-white/80 transition-colors"
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default MyDoubts;
