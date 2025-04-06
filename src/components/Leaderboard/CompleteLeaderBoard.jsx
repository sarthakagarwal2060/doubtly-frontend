import "@radix-ui/themes/styles.css";
import { Card, Box, Text, Flex, Table, Badge } from "@radix-ui/themes";
import useLeaderboard from '../../hooks/useLeaderboard';

export default function CompleteLeaderBoard() {
    const { leaderboardData, loading, error } = useLeaderboard();

    const getRankIcon = (rank) => {
        if (rank === 1) return <span className="text-yellow-400">🏆</span>;
        if (rank === 2) return <span className="text-gray-400">🥈</span>;
        if (rank === 3) return <span className="text-amber-600">🥉</span>;
        return rank;
    };

    if (loading) {
        return (
            <div className="max-w-[1200px] mx-auto p-5">
                <div className="p-5 rounded-xl border border-indigo-100 bg-gray-100 shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-500 text-center">
                    Loading leaderboard data...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-[1200px] mx-auto p-5">
                <div className="p-5 rounded-xl border border-indigo-100 bg-gray-100 shadow-sm dark:bg-gray-800 dark:text-white dark:border-gray-500 text-center text-red-500">
                    Error loading leaderboard: {error}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-[1200px] mx-auto p-5  ">
            <div className="p-5 rounded-xl border border-indigo-100 bg-gray-100 shadow-sm dark:bg-gray-800 dark:text-black dark:border-gray-500">
                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeaderCell>Rank</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>User</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Doubts</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Solutions</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell>Points</Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {leaderboardData.map((user) => (
                            <Table.Row key={user.id}>
                                <Table.Cell>
                                    <Flex align="center">
                                        {getRankIcon(user.rank)}
                                    </Flex>
                                </Table.Cell>
                                <Table.Cell>
                                    <Flex align="center" gap="2">
                                        <img 
                                            src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`}
                                            alt={`${user.name}'s avatar`}
                                            className="w-[30px] h-[30px] rounded-full object-cover border border-gray-200 "
                                        />
                                        <Text>{user.name}</Text>
                                    </Flex>
                                </Table.Cell>
                                <Table.Cell>{user.doubts}</Table.Cell>
                                <Table.Cell>{user.solutions}</Table.Cell>
                                <Table.Cell>
                                    <Badge size="1" className="bg-purple-100 text-purple-600 rounded-xl px-2.5 py-0.5">
                                        {user.points}
                                    </Badge>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </div>
        </div>
    );
}