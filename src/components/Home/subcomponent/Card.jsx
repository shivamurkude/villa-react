import React from "react";

//local files
import "./Card.css";

const Card = () => {
  let width = 560;
  let height = 315;

  if (window.innerWidth <= 620) {
    width = 350;
    height = 197;
  }

  return (
    <>
      <div>
        <div className=" bg h-[30rem] flex flex-col justify-center items-center w-full relative p-[2rem] bg-black/100 ">
          <div className="text-white flex flex-row justify-evenly items-center absolute top-[5rem] w-[10rem] h-auto ">
            <div className="h-[1.5rem] w-[0.3rem] bg-orange-600 "></div>
            <div className="font-serif font-bold text-1xl  ">
              <h3> VIDEO VIEW</h3>
            </div>
          </div>
          <div className="text-white font-serif text-3xl md:text-4xl px-[5rem] font-bold absolute top-[7rem] md:top-[8rem] h-auto">
            <h1>
              Get Closer View <span className="text-orange-600 text-5xl"> &</span> Different Feeling
            </h1>
          </div>
          <div className="h-[20rem] md:h-[27rem] w-[20rem] sm:w-[35rem] md:w-[45rem] xl:w-[60rem] absolute top-[18rem] md:top-[16rem] xl:top-[15rem] rounded-lg z-50 border-2">
            
          
  <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/2xa5SR_B65M?si=-oTMtHR27alGUNL1&amp;start=39&amp;autoplay=1&amp;mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
