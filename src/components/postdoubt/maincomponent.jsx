import HeadingOfSection from "./headingofsection";
import Category from "./Category";
import { useRef } from "react";
import axios from "axios";
import { handleSubmit } from "../../pages/PostDoubt";

export default function MainComponent({
  titleRef,
  descriptionRef,
  categoryRef,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="mx-auto w-2/3 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-8 text-center">Post a Doubt</h2>
        <span className="block mb-8 text-center text-gray-600">
          Share your question with the community.
        </span>
        <HeadingOfSection
          name={"Doubt Title"}
          placeholder={"Summarize your doubt in one line"}
          className={
            "w-full h-[50px] border-2 border-gray-400 rounded-md mb-6 p-2 transition duration-200 ease-in-out focus:border-blue-500"
          }
          ref={titleRef}
        />
        <HeadingOfSection
          name={"Description"}
          placeholder={
            "Provide detailed context, what you've tried, and where you're stuck"
          }
          className={
            "w-full h-[100px] border-2 border-gray-400 rounded-md mb-6 p-2 transition duration-200 ease-in-out focus:border-blue-500"
          }
          ref={descriptionRef}
        />
        <div className="mb-6">
          <Category ref={categoryRef} />
        </div>

        <div className="relative h-16">
          <button
            className="absolute right-0 border-black border-solid border-[2px] rounded-[5px] w-[7rem] h-10 bg-cyan-100 hover:bg-cyan-200"
            onClick={() => handleSubmit(titleRef, descriptionRef, categoryRef)}
          >
            Post Doubt
          </button>
        </div>
      </div>
    </div>
  );
}
