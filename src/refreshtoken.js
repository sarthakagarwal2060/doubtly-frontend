import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const validateToken = async () => {
      try {
        console.log("Validating token:", token);
        const response = await axios.post(
          "https://doubtly-backend.onrender.com/api/auth/check",
          null,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Response status:", response.status);
        setIsValid(response.status === 200);
      } catch (error) {
        console.error("Error validating token:", error);
        setIsValid(false);
      }
    };

    if (token) validateToken();
    else setIsValid(false);
  }, [token]);

  if (isValid === null) return <p>Loading...</p>; // Show loading while validating
  return isValid ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
