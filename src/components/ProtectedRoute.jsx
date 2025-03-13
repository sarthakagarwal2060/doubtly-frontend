import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const validateToken = async () => {
      try {
        console.log("Validating token:", token);
        const response = await fetch("https://doubtly-backend.onrender.com/api/auth/check", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        });
        
        console.log("Response status:", response.status);
        console.log("Response ok:", response.ok);
        setIsValid(response.ok);
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