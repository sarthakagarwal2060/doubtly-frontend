import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


function fetchUserDetails() {
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

  return userDetails;
}

export default fetchUserDetails;
