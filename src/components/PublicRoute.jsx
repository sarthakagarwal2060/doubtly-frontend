import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function PublicRoute({children}) {
  const [isValid, setIsValid] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await axios.post(
          "https://doubtly-backend.onrender.com/api/auth/check",
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          setIsValid(true);
          
        }
      } catch (error) {
        console.log("Token invalid or expired:", error);
        setIsValid(false);
        localStorage.removeItem("token");
        navigate("/login");
      }
    };
    validateToken()
  }, [token, navigate]);

  return isValid ? <Navigate to={"/dashboard"}/> : children;
}

export default PublicRoute;
