import React from 'react';
import { Flex, Box, Avatar, Heading, Text, Card, Badge, IconButton, Grid } from '@radix-ui/themes';
import { Edit } from 'lucide-react';

const ProfileHeader = ({ userInfo }) => {
  return (
    <Card size="3" className="mb-4 mt-10" >
      <Flex gap="4" justify="between">
        <Flex gap="4" align="center">
          <Avatar
            size="7"
            src="https://via.placeholder.com/150"
            fallback={userInfo.name.charAt(0)}
            radius="full"
          />
          <Box>
            <Flex gap="2" align="center">
              <Heading size="6">{userInfo.name}</Heading>
              <Badge color="blue" size="1">{userInfo.userId}</Badge>
            </Flex>
            <Text size="2" color="gray">@{userInfo.username}</Text>
          </Box>
        </Flex>
        <IconButton size="2" variant="soft">
          <Edit size={16} />
        </IconButton>
      </Flex>
      
      <Box mt="4">
        <Text as="p" size="2" color="gray">
          {userInfo.bio}
        </Text>
      </Box>

      <Grid columns="3" gap="3" mt="4">
        <Card>
          <Text size="2" weight="bold">Doubts Posted</Text>
          <Text size="6" weight="bold">{userInfo.stats.doubts}</Text>
        </Card>
        <Card>
          <Text size="2" weight="bold">Solutions Given</Text>
          <Text size="6" weight="bold">{userInfo.stats.solutions}</Text>
        </Card>
        <Card>
          <Text size="2" weight="bold">Reputation</Text>
          <Text size="6" weight="bold">{userInfo.stats.reputation}</Text>
        </Card>
      </Grid>
    </Card>
  );
};

export default ProfileHeader; 