import React from "react";

const Describe = () => {
  return (
    <div className="flex flex-col justify-center items-start   ">
      {/* feature tag */}
      <div className="flex flex-row items-center justify-start  ">
        <div className="h-[1rem] w-[0.5rem] bg-orange-700 "></div>
        <div className="text-red-500 font-serif text-[1rem] font-bold p-[1rem]">
          <h2>FEATURED</h2>
        </div>
      </div>

      <div className="  text-start ">
        <h1 className="lg:text-5xl text-3xl font-serif font-bold text-black">
          {" "}
          Best <br /> Apartment & <br />
          Sea View
        </h1>
      </div>

      {/* description */}
      <div className="h-auto  flex flex-col justify-center items-start py-[2rem] ">
        <div className="border-b-2 py-[0.5rem]  ">
          <h2 className="text-1xl text-start font-serif font-bold text-gray-500">Best Useful links ?</h2>
        </div>

        <div className=" py-[0.5rem] ">
          <h2 className="text-1xl text-start font-serif font-bold text-gray-500">
            Get the best villa website template in HTML CSS <br />
            and Bootstrap for your business. TemplateMo <br /> provides you the best free CSS templates <br />
            in the world. Please tell your friends about it.
          </h2>
        </div>

        <div className="border-b-2 py-[0.5rem]  ">
          <h2 className="text-1xl  text-start font-serif font-bold text-gray-500">How does this work?</h2>
        </div>

        <div className="border-b-2 py-[0.5rem]  ">
          <h2 className="text-1xl text-start font-serif font-bold text-gray-500">Why is villa Agency is best?</h2>
        </div>
      </div>
    </div>
  );
};

export default Describe;
