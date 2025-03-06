import "./styles/App.css";
import "@radix-ui/themes/styles.css";
import Landing from "./pages/Landing";
import PostDoubt from "./pages/PostDoubt";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
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
