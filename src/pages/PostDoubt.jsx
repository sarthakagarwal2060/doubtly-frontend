import NavBar from "../components/NavBar";
import MainComponent from "../components/postdoubt/maincomponent";
import axios from "axios";
import { useRef } from "react";
import SideBar from "../components/SideBar";
// Separate the handleSubmit function from the component
export const handleSubmit = async (titleRef, descriptionRef, categoryRef) => {
  try {
    // console.log("clicked");
    // console.log(titleRef.current.value);
    // console.log(titleRef.current.value, descriptionRef.current.value, categoryRef.current.value);
    const token = localStorage.getItem('token')
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
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    console.log(res);
    return res;
  } catch (e) {}
};

export default function PostDoubt() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);

  const onSubmit = () => handleSubmit(titleRef, descriptionRef, categoryRef);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-primary">
        <NavBar searchBar={false} />
        <div className="flex flex-row flex-grow  ">
          <SideBar className="w-1/4" />
          <div className="container mx-auto pt-24 pb-10 px-4 flex-grow">
            <MainComponent
              titleRef={titleRef}
              descriptionRef={descriptionRef}
              categoryRef={categoryRef}
            />
          </div>
        </div>
      </div>
    </>
  );
}