import React from "react";
import Photo from "./description/Photo";
import Describe from "./description/Describe";
import Details from "./description/Details";

const Features = () => {
  return (
    <div className=" bg-white h-auto flex flex-col lg:flex-row justify-between items-center lg:p-[5rem] p-[3rem] gap-10 ">
      <Photo />
      <Describe />
      <Details />
    </div>
  );
};

export default Features;
