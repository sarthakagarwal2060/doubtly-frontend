import React from 'react';
import { Heading, Text, Card, Flex, Box, Button } from '@radix-ui/themes';

const RecentActivity = () => {
  return (
    <Card size="2">
      <Flex justify="between" align="center" mb="2">
        <Heading size="4">Recent Activity</Heading>
        <Button variant="soft" size="1">View All</Button>
      </Flex>
      <Box>
        <Text size="2" color="gray">Your recent doubts and solutions will appear here.</Text>
      </Box>
    </Card>
  );
};

export default RecentActivity; 