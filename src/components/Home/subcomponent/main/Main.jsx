import React from "react";
import Product from "../../../GlobalSubComponent/Product/Product";

const Main = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center p-[3rem] h-auto bg-white">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center justify-start py-[2rem] ">
            <div className="h-[1rem] w-[0.5rem] bg-orange-700 "></div>
            <div className="text-red-500 font-serif text-[1rem] font-bold p-[1rem]">
              <h2>FEATURED</h2>
            </div>
          </div>
          <div>
            <h1 className="font-serif md:text-5xl text-5xl text-center font-bold text-black">
              We provide the  Best Property You Like
            </h1>
          </div>
          <Product />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Main;
