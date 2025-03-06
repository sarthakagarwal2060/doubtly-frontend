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
    <div className="flex items-center justify-center bg-gray-100 w-full pl-[5rem]">
      <div className="mx-auto w-full max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[65%] p-4 sm:p-6 md:p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Post a Doubt</h2>
        <span className="block mb-6 text-center text-gray-600 text-sm sm:text-base">
          Share your question with the community.
        </span>
        <HeadingOfSection
          name={"Doubt Title"}
          placeholder={"Summarize your doubt in one line"}
          className={
            "w-full h-[40px] sm:h-[50px] border-2 border-gray-400 rounded-md mb-4 sm:mb-6 p-2 transition duration-200 ease-in-out focus:border-blue-500 text-sm sm:text-base"
          }
          ref={titleRef}
        />
        <HeadingOfSection
          name={"Description"}
          placeholder={
            "Provide detailed context, what you've tried, and where you're stuck"
          }
          className={
            "w-full h-[80px] sm:h-[100px] md:h-[150px] border-2 border-gray-400 rounded-md mb-4 sm:mb-6 p-2 transition duration-200 ease-in-out focus:border-blue-500 text-sm sm:text-base"
          }
          ref={descriptionRef}
        />
        <div className="mb-4 sm:mb-6">
          <Category ref={categoryRef} />
        </div>

        <div className="w-full flex justify-end mt-4 sm:mt-6">
          <button
            className="border-black border-solid border-[2px] rounded-[5px] w-[6rem] sm:w-[7rem] h-9 sm:h-10 bg-cyan-100 hover:bg-cyan-200 text-sm sm:text-base transition-colors duration-200"
            onClick={() => handleSubmit(titleRef, descriptionRef, categoryRef)}
          >
            Post Doubt
          </button>
        </div>
      </div>
    </div>
  );
}
