import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ProfileHeader from "../components/profile/ProfileHeader";
import UserInfo from "../components/profile/UserInfo";
import UserBio from "../components/profile/UserBio";
import Stats from "../components/profile/Stats";
import Tab from "../components/profile/Tab";

function Profile() {
  const user = [
    { name: "Apurv Dugar", 
      image: "/placeholder.svg", 
      email: "apurv@gmail.com", 
      joinedDate: "Jan, 2025", 
      doubts: "10", 
      answers: "20", 
      points: "1200", 
      bio: "Frontend developer passionate about React, and building great user experiences.", 
      acceptance: "90",
    },
  ];
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
            <UserInfo userDetails={user[0]}/>
            <div className="flex flex-col gap-2">
              <UserBio userDetails={user[0]}/>
              <Tab />
              <Stats userDetails={user[0]} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
