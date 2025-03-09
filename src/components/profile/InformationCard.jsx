import React from 'react'
import { Container, Flex, Box, Avatar, Heading, Text, Card, Grid, Badge, IconButton, Button } from '@radix-ui/themes'
import { Mail, MapPin, Calendar, Link as LinkIcon, Edit, Github } from 'lucide-react'

const InformationCard = ({ userInfo }) => {
  return (
    <Card className="mb-6">
      <Heading size="4" mb="4">Contact Information</Heading>
      <Flex direction="column" gap="3">
        <Flex align="center" gap="3">
          <Mail size={16} className="text-gray-400" />
          <Text size="2">{userInfo.email}</Text>
        </Flex>
        <Flex align="center" gap="3">
          <MapPin size={16} className="text-gray-400" />
          <Text size="2">{userInfo.location}</Text>
        </Flex>
        <Flex align="center" gap="3">
          <Calendar size={16} className="text-gray-400" />
          <Text size="2">{userInfo.joinedDate}</Text>
        </Flex>
        <Flex align="center" gap="3">
          <Github size={16} className="text-gray-400" />
          <Text size="2" className="cursor-pointer hover:text-blue-500 transition-colors">
            {userInfo.website}
          </Text>
        </Flex>
      </Flex>
    </Card>
  )
}

export default InformationCard
