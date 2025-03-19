import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = ({ children }) => {
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
        if (error.response && error.response.status === 401) {
          console.log("Token expired. Attempting to refresh...");
          await refreshToken();
        } else {
          console.log("Token invalid or expired:", error);
          setIsValid(false);
          localStorage.removeItem("token");
          navigate("/login");
        }
      }
    };

    const refreshToken = async () => {
      try {
        const response = await axios.post(
          "https://doubtly-backend.onrender.com/api/auth/refreshToken",
          {},
          { withCredentials: true }
        );
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          setIsValid(true);
        } else {
          console.error("Token refresh failed. Logging out...");
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (e) {
        console.error("Failed to refresh token. Logging out...");
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    if (token) {
      validateToken();

      const refreshInterval = setInterval(refreshToken, 10 * 1000);
      return () => clearInterval(refreshInterval);
    } else {
      setIsValid(false);
    }
  }, [token, navigate]);

  if (isValid === null) {
    return <div>Loading...</div>;
  }

  return isValid ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
