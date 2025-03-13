import "./styles/App.css";
import "@radix-ui/themes/styles.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostDoubt from "./pages/PostDoubt";
import Dashboard from "./pages/Dashboard";
import MyDoubts from "./pages/MyDoubts";
import NotFound from "./pages/NotFound";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      {/* <Landing /> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Dashboard /> */}
      {/* <PostDoubt /> */}
      {/* <MyDoubts /> */}
      {/* <Leaderboard />*/}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/dashboard/postdoubt" element={<ProtectedRoute><PostDoubt /></ProtectedRoute>}/>
        <Route path="/dashboard/mydoubts" element={<ProtectedRoute><MyDoubts /></ProtectedRoute>} />
        <Route path="/dashboard/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
        <Route path="/dashboard/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </>
  );
}

export default App;