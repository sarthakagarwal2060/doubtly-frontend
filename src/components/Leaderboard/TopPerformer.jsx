import React from 'react';
import { Card, Box, Text, Flex } from "@radix-ui/themes";
import UserCard from './UserCard';
export default function TopPerformer() {
    const topUsers = [
        { id: 1, name: "Sarthak Agarwal", points: 1250, solutions: 78, doubts: 42, rank: 1, avatar: "" },
        { id: 2, name: "Apurv Dugar", points: 980, solutions: 54, doubts: 31, rank: 2, avatar: "" },
        { id: 3, name: "Narendra Sirvi", points: 875, solutions: 49, doubts: 25, rank: 3, avatar: "" },
    ];

    const getRankIcon = (rank) => {
        if (rank === 1) return <span className="text-yellow-400">🏆</span>;
        if (rank === 2) return <span className="text-gray-400">🥈</span>;
        if (rank === 3) return <span className="text-amber-600">🥉</span>;
        return rank;
    };

    return (
        <div className="max-w-[1200px] mx-auto p-5">
        <div className="text-center mb-10">
            <Text size="8" weight="bold" className="text-gray-800 dark:text-white">Leaderboard</Text>
        </div>

    
        <Flex gap="6" justify="center" align="end" wrap="wrap" className="mb-10">

        
            {topUsers.filter(user => user.rank === 2).map(user => (
                <UserCard key={user.id} user={user} className="w-[250px] md:w-[280px] bg-gray-200 dark:bg-gray-800 shadow-md" />
            ))}

         
            {topUsers.filter(user => user.rank === 1).map(user => (
                <UserCard key={user.id} user={user} className="w-[300px] md:w-[320px]  bg-gray-200 dark:bg-gray-800 shadow-lg scale-110" />
            ))}

         
            {topUsers.filter(user => user.rank === 3).map(user => (
                <UserCard key={user.id} user={user} className="w-[250px] md:w-[280px] bg-gray-200 dark:bg-gray-800 shadow-md" />
            ))}

        </Flex>
        </div>
    );
}