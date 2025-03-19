import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);
  const [key, setKey] = useState(0);
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
        if (error.response && error.response.status === 401) {
          console.log("Token expired. Attempting to refresh...");
          await refreshToken();
        } else {
          console.log("Invalid token. Logging out...");
          handleLogout();
        }
      }
    };

    const refreshToken = async (retryCount = 0) => {
      if (!navigator.onLine) {
        console.warn("No internet connection. Waiting to retry...");
        return setTimeout(() => refreshToken(retryCount), 5000);
      }

      try {
        const response = await axios.post(
          "https://doubtly-backend.onrender.com/api/auth/refreshToken",
          {},
          { withCredentials: true }
        );

        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          setIsValid(true);
          setKey((prevKey) => prevKey + 1);
        } else {
          console.error("Token refresh failed. Logging out...");
          handleLogout();
        }
      } catch (error) {
        if (!navigator.onLine) {
          console.warn("Still no internet. Retrying...");
          return setTimeout(() => refreshToken(retryCount), 5000);
        }

        if (retryCount < 3) {
          console.warn(`Retrying token refresh... Attempt ${retryCount + 1}`);
          return setTimeout(
            () => refreshToken(retryCount + 1),
            2000 * (retryCount + 1)
          );
        }

        console.error(
          "Failed to refresh token after multiple attempts. Logging out..."
        );
        handleLogout();
      }
    };

    const handleLogout = () => {
      localStorage.removeItem("token");
      setIsValid(false);
      navigate("/login");
    };

    if (token) {
      validateToken();

      const refreshInterval = setInterval(() => refreshToken(), 58 * 60 * 1000);
      return () => clearInterval(refreshInterval);
    } else {
      handleLogout();
    }

    const handleOnline = () => {
      console.log("Internet restored. Checking token...");
      validateToken();
    };

    window.addEventListener("online", handleOnline);
    return () => window.removeEventListener("online", handleOnline);
  }, [token, navigate]);

  if (isValid === null) {
    return <div>Loading...</div>;
  }

  return isValid ? <div key={key}>{children}</div> : <Navigate to="/login" />;
};

export default ProtectedRoute;
