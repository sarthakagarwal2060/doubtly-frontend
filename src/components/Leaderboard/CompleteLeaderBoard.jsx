import "@radix-ui/themes/styles.css";
import { Card, Box, Text, Flex, Table, Badge } from "@radix-ui/themes";

export default function CompleteLeaderBoard() {
    // Mock data - replace with actual data from your API
    const allUsers = [
        { id: 1, name: "Sarthak Agarwal", points: 1250, solutions: 78, doubts: 42, rank: 1, avatar: "" },
        { id: 2, name: "Apporva Dugar", points: 980, solutions: 54, doubts: 31, rank: 2, avatar: "" },
        { id: 3, name: "Narendra Sirvi", points: 875, solutions: 49, doubts: 25, rank: 3, avatar: "" },
        { id: 4, name: "Mehul Agarwal", points: 720, solutions: 38, doubts: 19, rank: 4, avatar: "" },
        { id: 5, name: "Ojas Maheswari", points: 650, solutions: 32, doubts: 15, rank: 5, avatar: "" },
    ];

    // Function to render rank icon
    const getRankIcon = (rank) => {
        if (rank === 1) return <span className="text-yellow-400">🏆</span>;
        if (rank === 2) return <span className="text-gray-400">🥈</span>;
        if (rank === 3) return <span className="text-amber-600">🥉</span>;
        return rank;
    };

    return (
        <div className="max-w-[1200px] mx-auto p-5">
            <div className="p-5 rounded-xl border border-indigo-100 ">
                <div className="mb-5">
                    <Text size="6" weight="bold">Complete Leaderboard</Text>
                    <Text size="3" className="text-gray-600 dark:text-white">All users ranked by contribution points</Text>
                </div>

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
                        {allUsers.map((user) => (
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
                                            className="w-[30px] h-[30px] rounded-full object-cover border border-gray-200"
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