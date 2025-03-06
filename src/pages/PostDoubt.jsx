import NavBar from "../components/NavBar";
import MainComponent from "../components/postdoubt/maincomponent";
import axios from "axios";
import { useRef } from "react";
export default function PostDoubt() {
  const handleSubmit = async () => {
  try {
    console.log("clicked");
    console.log(titleRef.current.value);
      console.log(titleRef.current.value, descriptionRef.current.value, categoryRef.current.value);
      const res = await axios.post(
        "https://doubtly-backend.onrender.com/api/doubt/add",
        {
          heading: titleRef.current.value,
          description: descriptionRef.current.value,
          type: categoryRef.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res);
      return res;
  } catch (e) {}
};
 const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-400 relative">
        <NavBar searchBar={false} />
        <div className="container mt-20">
          <MainComponent titleRef={titleRef} descriptionRef={descriptionRef} categoryRef={categoryRef} />
        </div>
        <button
          className="absolute bottom-8 right-8 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 border-2 border-purple-700 transition duration-200 ease-in-out shadow-md hover:shadow-lg"
          onClick={handleSubmit}
        >
          Post Doubt
        </button>
      </div>
    </>
  );
}