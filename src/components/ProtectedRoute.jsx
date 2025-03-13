import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await axios.post(
          "https://doubtly-backend.onrender.com/api/auth/check",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          setIsValid(true);
        }
      } catch (error) {
        try {
          const refreshResponse = await axios.post(
            "https://doubtly-backend.onrender.com/api/auth/refreshToken",
            {},
            {
              withCredentials: true,
            }
          );

          if (refreshResponse.data.token) {
            localStorage.setItem("token", refreshResponse.data.token);
            setIsValid(true);
          } else {
            setIsValid(false);
          }
        } catch (refreshError) {
          console.error("Error refreshing token:", refreshError);
          localStorage.removeItem("token");
          setIsValid(false);
        }
      }
    };

    if (token) {
      validateToken();
    } else {
      setIsValid(false);
    }
  }, [token]);

  if (isValid === null) {
    return <div>Loading...</div>;
  }

  return isValid ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;