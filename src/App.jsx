import "./styles/App.css";
import "@radix-ui/themes/styles.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostDoubt from "./pages/PostDoubt";
import Dashboard from "./pages/Dashboard";
import MyDoubts from "./pages/MyDoubts";
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Landing /> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Dashboard /> */}
      {/* <PostDoubt /> */}
      {/* <MyDoubts /> */}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/postdoubt" element={<PostDoubt />} />
        <Route path="/dashboard/mydoubts" element={<MyDoubts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
