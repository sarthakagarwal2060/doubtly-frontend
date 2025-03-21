import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ProfileHeader from "../components/profile/ProfileHeader";
import UserInfo from "../components/profile/UserInfo";
import UserBio from "../components/profile/UserBio";
import Stats from "../components/profile/Stats";
import Tab from "../components/profile/Tab";
import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {

  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchDetails = async () => {
      const response = await axios.get(
        "https://doubtly-backend.onrender.com/api/userDetails",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setUserDetails(response.data.result);
    };
    fetchDetails();
  }, []);
  
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
              <UserBio userDetails={userDetails}/>
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
