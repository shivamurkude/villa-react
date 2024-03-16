import React from "react";

const con = {
  title: "hjghjgh"
}

const content = [
  {
    title: "Total Flat Space",
    des: "185 m2",
  },
  {
    title: "Floor Number",
    des: "26th",
  },
  {
    title: "Numbers of Rooms",
    des: "4",
  },
  {
    title: "Parking Avilable",
    des: "Yes",
  },
  {
    title: "Payment Process",
    des: "Bank",
  },
];

const SecDes = () => {
  return (
    <>
      <div className="h-auto px-[2rem]">
        <div className="flex flex-col justify-between items-center h-auto w-auto px-[1rem] bg-white drop-shadow-2xl ">
          {content.map((e) => (
            <div className="flex flex-row  items-start justify-between lg:gap-4 gap-10 sm:gap-[14rem]  px-[1rem] py-[1.3rem] border-b-2 border-gray-200">
              <div>
                <h2 className="text-1xl font-thin font-serif text-gray-500">{e.title}</h2>
              </div>
              <div>
                <h1 className="text-1xl font-bold text-center text-black">{e.des}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </>
  );
};

export default SecDes;
