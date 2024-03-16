import React from "react";
import SecDes from "./SecDes";
import SecPhoto from "./SecPhoto";
import Section from "./Section";

const Subsection = () => {
  return (
    <div className="bg-white flex flex-col h-auto lg:flex-row justify-center items-center gap-[2rem]">
      <SecDes />
      <SecPhoto />
      <Section />
    </div>
  );
};

export default Subsection;
