import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function fetchUserDetails() {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchDetails = async () => {
      setLoading(true);
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
      setLoading(false);
    };
    fetchDetails();
  }, []);

  return {userDetails, loading};
}
export default fetchUserDetails;
