import React from "react";
import { MdCalendarMonth } from "react-icons/md";

const Section = () => {
  return (
    <div className="flex flex-col lg:items-start items-center justify-between ">
      <div className="px-[2rem] py-[1rem]">
        <h2 className="text-1xl font-bold font-serif text-black">Extra Info About Property</h2>
      </div>

      <div className="px-[2rem] py-[1rem]">
        <p className="text-gray-500 font-serif">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> do eiusmod tempor pack incididunt ut labore{" "}
          <br />
          et dolore magna aliqua quised ipsum suspendisse.
        </p>
      </div>

      <div className="px-[2rem] py-[1rem]">
        <p className="text-gray-500 font-serif">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />, do eiusmod tempor pack incididunt ut labore{" "}
          <br /> et dolore magna aliqua quised ipsum suspendisse.
        </p>
      </div>

      <div className="px-[2rem] py-[2rem] relative">
        <div className="absolute h-[4rem] flex justify-center items-center  w-[4rem] bg-red-500 rounded-full bottom-7 text-center ">
          <MdCalendarMonth className="text-white h-[2rem] w-[2rem]" />
        </div>
        <div className="px-[1rem]">
          <button className="bg-gray-800 rounded-full text-white px-[4rem] py-[1rem]">Schedule a visit</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
