import React from "react";
import flower from "../../public/flower.webp";

export default function Main() {
  return (
    <div className="flex ">
      <div className="flex flex-col px-6 sm:px-12 justify-center mt-7 sm:mt-5 h-[80vh]  ">
        <div>
          <p className="text-[5rem] my-5 leading-none tracking-tighter ">
            <span className="block sm:text-[6.5rem]">Human</span>{" "}
            <span className="inline sm:text-[6.5rem]">stories </span>
            <span className="block sm:inline sm:text-[6.5rem]">& ideas</span>
          </p>
        </div>
        <p className="my-1  sm:my-2 text-2xl tracking-tight">
          A place to read, write, and deepen your understanding
        </p>
        <div>
          <button className=" bg-[#1A8917] md:bg-[#191919]  text-white text-[1.2rem] rounded-full py-[8px] px-10 my-5 sm:my-10 ">
            Start reading
          </button>
        </div>
      </div>
      {/* bg-[url('/flower.webp')]  */}
      {/* <div className="hidden md:right-[-250px] md:fixed md:block md:w-[455px]  md:bottom-[10px] sm:static"> */}
      <div className="hidden md:right-[-300px] md:block md:absolute md:w-[450px] lg:right-0 lg:right-0">
        <img src={flower} alt="green-flower" className=" w-full " />
      </div>
    </div>
  );
}
