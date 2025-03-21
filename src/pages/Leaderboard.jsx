import React from 'react'
import CompleteLeaderBoard from '../components/Leaderboard/CompleteLeaderBoard'
import TopPerformer from '../components/Leaderboard/TopPerformer'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'

export default function Leaderboard() {
  return (
    <div className="flex flex-col min-h-screen bg-primary ">
      <NavBar doubtly={false} searchBar={false} notification={true} profile={true}/>
      <div className="flex flex-row flex-grow">
        <SideBar className="w-1/4" />
        <div className="container mx-auto pt-24 pb-10 px-4 flex-grow pl-[12rem] ">
          <TopPerformer />
          <CompleteLeaderBoard />
        </div>
      </div>
    </div>
  )
}
