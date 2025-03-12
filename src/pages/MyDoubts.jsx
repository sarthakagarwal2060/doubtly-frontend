import React,{useEffect} from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import axios from "axios"
import Doubts from "../components/myDoubts/Doubts";
import NoDoubts from "../components/myDoubts/NoDoubts";

function MyDoubts() {
  const [myDoubts, setMyDoubts] = React.useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchMyDoubts = async () => {
      const response = await axios.get(
        "https://doubtly-backend.onrender.com/api/doubt/mydoubt",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMyDoubts(response.data.result);
    };
    fetchMyDoubts();
  }, []);
  return (
    <>
      <NavBar
        doubtly={true}
        searchBar={true}
        notification={true}
        profile={true}
      />
      <SideBar />

      {(myDoubts.length==0) ? <NoDoubts /> : <Doubts myDoubts={myDoubts}/>}
    </>
  );
}

export default MyDoubts;
