import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import WelcomeSec from "../components/dashboard/WelcomeSec";
import Stats from "../components/dashboard/Stats";
import TrendingDoubts from "../components/dashboard/TrendingDoubts";
import LatestDoubts from "../components/dashboard/LatestDoubts";
import LeaderBoard from "../components/dashboard/LeaderBoard";

export default function Dashboard() {
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
  return (
    <>
      <NavBar
        doubtly={true}
        searchBar={true}
        notification={true}
        profile={true}
      />
      <SideBar />
      <main className="pt-16 pl-72 pr-8 bg-primary">
        <div className="container py-6 space-y-8 ">
          <WelcomeSec userDetails={userDetails} />

          <Stats userDetails={userDetails} />

          <div className="flex justify-between">
            <div className="w-[70%]">
              <TrendingDoubts />
              <LatestDoubts />
            </div>

            <div className="w-[27.5%]">
              <LeaderBoard />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
