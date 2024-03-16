import React from "react";

const Head = () => {
  return (
    <div>
      <div className="bg-white flex flex-col lg:flex-row justify-between items-center py-[3rem] gap-6">
        <div className="flex flex-col items-start justify-between gap-2 px-[4rem] ">
          <div className="flex flex-row items-center justify-start  ">
            <div className="h-[1rem] w-[0.5rem] bg-orange-700 "></div>
            <div className="text-red-500 font-serif text-[1rem] font-bold p-[1rem]">
              <h2>FEATURED</h2>
            </div>
          </div>

          <div className="  text-start ">
            <h1 className="text-4xl font-serif font-bold text-black">
              {" "}
              Find Your Beast <br /> Best Deal Right Now!
            </h1>
          </div>
        </div>

        <div className="flex flex-row items-center justify-end px-[4rem] gap-3">
          <div className="bg-red-600 py-[1rem] px-[2rem] rounded-full">
            <button className="font-semibold font-serif text-white md:text-1xl text-[0.8rem]">Apartment</button>
          </div>
          <div className="bg-black py-[1rem] px-[2rem] rounded-full">
            <button className="font-semibold font-serif text-white md:text-1xl text-[0.8rem]">Villa House</button>
          </div>
          <div className="bg-black py-[1rem] px-[2rem] rounded-full">
            <button className="font-semibold font-serif text-white md:text-1xl text-[0.8rem]">Pent House</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
