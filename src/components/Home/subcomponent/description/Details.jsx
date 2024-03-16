import React from "react";
import { FaSquareFull } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";

const content = [
  {
    title1: "250 m2",
    title2: "Total Flat Space",
    image: FaSquareFull,
  },
  {
    title1: "Contract",
    title2: "Contract Ready",
    image: FaFileContract,
  },
  {
    title1: "Payment",
    title2: "Payment",
    image: MdPayments,
  },
  {
    title1: "Safety",
    title2: "24/7 Under Control",
    image: AiFillSafetyCertificate,
  },
];

const Details = () => {
  return (
    <div className="h-auto w-auto  border-2  bg-gray-100">
      <div className="flex flex-col items-start justify-start gap-5 py-[1rem] h-auto mr-[5rem] ">
        {content.map((e) => (
          <div className="flex flex-row justify-start items-start  ">
            <div className="text-red-500 p-[1rem] ">{<e.image className="h-[4rem] w-[10rem]" />}</div>
            <div className="p-[0.3rem]">
              <h1 className="font-bold font-serif text-2xl text-black">
                {e.title1} <br />
                <span className="text-gray-500 text-[0.9rem] font-serif font-semibold  ">{e.title2}</span>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
