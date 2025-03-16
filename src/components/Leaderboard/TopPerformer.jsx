import React from 'react';
import { Card, Box, Text, Flex } from "@radix-ui/themes";

export default function TopPerformer() {
    // Mock data - replace with actual data from your API
    const topUsers = [
        { id: 1, name: "Sarthak Agarwal", points: 1250, solutions: 78, doubts: 42, rank: 1, avatar: "" },
        { id: 2, name: "Apporva Dugar", points: 980, solutions: 54, doubts: 31, rank: 2, avatar: "" },
        { id: 3, name: "Narendra Sirvi", points: 875, solutions: 49, doubts: 25, rank: 3, avatar: "" },
    ];

    // Function to render rank icon
    const getRankIcon = (rank) => {
        if (rank === 1) return <span className="text-yellow-400">🏆</span>;
        if (rank === 2) return <span className="text-gray-400">🥈</span>;
        if (rank === 3) return <span className="text-amber-600">🥉</span>;
        return rank;
    };

    return (
        <div className="max-w-[1200px] mx-auto p-5 ">
            <div className="text-center mb-10">
                <Text size="8" weight="bold" className="text-gray-800 dark:text-white">Leaderboard</Text>
            </div>
            <Flex gap="4" wrap="wrap" justify="center" className="mb-10">
                {topUsers.map((user) => (
                    <div key={user.id} className="w-[300px] p-5 rounded-xl border border-indigo-100 flex flex-col items-center ">
                        <div className="relative mb-2.5">
                            <img 
                                src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random&size=100`}
                                alt={`${user.name}'s avatar`}
                                className="w-[100px] h-[100px] rounded-full object-cover border-3 border-purple-100"
                            />
                            
                            <div className="absolute top-0 right-0 bg-white rounded-full p-1.5 shadow-sm">
                                {getRankIcon(user.rank)}
                            </div>
                        </div>

                        <Text size="5" weight="bold" className="mb-1.5">{user.name}</Text>
                        <Flex align="center" className="text-purple-600 mb-4">
                            <Text size="3" className="mr-1.5">★</Text>
                            <Text size="3">{user.points} points</Text>
                        </Flex>

                        <Flex gap="4">
                            <div className="text-center">
                                <Text size="5" weight="bold">{user.solutions}</Text>
                                <Text size="2" className="text-gray-600 dark:text-white">Solutions</Text>
                            </div>
                            <div className="text-center">
                                <Text size="5" weight="bold">{user.doubts}</Text>
                                <Text size="2" className="text-gray-600 dark:text-white">Doubts</Text>
                            </div>
                        </Flex>
                    </div>
                ))}
            </Flex>
        </div>
    );
}