import "./App.css";
import "@radix-ui/themes/styles.css";
import Landing from "./components/Landing/Landing";
import PostDoubt from "./components/postdoubt/PostDoubt";
import Dashboard from "./components/dashboard/Dashboard";
import Signup from "./components/LogIn-SignUp/Signup";
import Login from "./components/LogIn-SignUp/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Landing /> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Dashboard /> */}
      {/* <PostDoubt /> */}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/postdoubt" element={<PostDoubt />} />
      </Routes>
    </>
  );
}

export default App;
