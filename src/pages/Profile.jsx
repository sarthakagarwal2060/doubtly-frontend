import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ProfileHeader from "../components/profile/ProfileHeader";
import UserInfo from "../components/profile/UserInfo";
import Stats from "../components/profile/Stats";
import Tab from "../components/profile/Tab";
import fetchUserDetails from "../hooks/fetchUserDetails";

function Profile() {

  const userDetails = fetchUserDetails();
  
  console.log(userDetails);

  // const userDetails = {};
  return (
    <>
      <NavBar doubtly={false} searchBar={true} notification={true} profile={true} />
      <SideBar />
      <main className="pt-16 pl-72 pr-8 bg-primary">
        <div className="container py-6 space-y-8 ">
          <div>
            <ProfileHeader />
          </div>
          <div className="flex gap-8">
            <UserInfo userDetails={userDetails}/>
            <div className="flex flex-col gap-2">
              <Tab />
              <Stats userDetails={userDetails} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
