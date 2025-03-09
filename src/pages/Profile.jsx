import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import { Container, Flex, Box } from '@radix-ui/themes'
import ProfileHeader from '../components/profile/ProfileHeader'
import InformationCard from '../components/profile/InformationCard'
import RecentActivity from '../components/profile/RecentActivity'

const Profile = () => {
  const userInfo = {
    name: "John Doe",
    username: "johndoe123",
    userId: "UID: 12345",
    email: "john.doe@example.com",
    location: "New York, USA",
    joinedDate: "Joined March 2024",
    website: "github.com/johndoe",
    bio: "Full-stack developer passionate about solving problems and helping others learn.",
    stats: {
      doubts: 42,
      solutions: 156,
      reputation: 1250
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <NavBar searchBar={false} />
      <div className="flex flex-row flex-grow">
        <SideBar className="w-1/4" />
        <div className="container mx-auto pt-24 pb-10 px-4 flex-grow pl-[12rem]">
          <ProfileHeader userInfo={userInfo} />
          <InformationCard userInfo={userInfo} />
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}

export default Profile;
