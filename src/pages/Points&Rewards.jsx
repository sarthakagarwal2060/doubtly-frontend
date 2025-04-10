import React from 'react';

import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import UserContribution from '../components/Points&Rewards/UserContribution';
import StatsOveriew from '../components/Points&Rewards/StatsOveriew';
import PointsInfo from '../components/Points&Rewards/PointsInfo';
import fetchUserDetails from '../hooks/fetchUserDetails';
const PointsAndRewards = () => {

  return (
    <div>

      <NavBar doubtly={true} searchBar={true} notification={true} profile={true} />
      <SideBar/>


      <main className="pt-16 pl-72 pr-8">
        <div className="container py-6 space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-black  dark:text-white">
              Points & Rewards 
            </h1>
          </div>

       
          <StatsOveriew  />

         
          <div className="flex justify-between">
            <div className="w-[70%]">
              <UserContribution />
            </div>

            <div className="w-[27.5%]">
            <PointsInfo />
            </div>


          </div>
        </div>
      </main>
    </div>
  );
};

export default PointsAndRewards;
