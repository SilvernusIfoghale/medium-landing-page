import React from "react";

export default function Promotion() {
  return (
    <div className="font-bold h-20 sm:h-14 bg-gradient-to-r from-yellow-100 to-yellow-500 border-gray-500 border-y-[1.4px] flex items-center sm:justify-center z-[99] fixed w-full text-sm px-5 ">
      <p>
        <span>Be part of a better internet. </span>
        <a href="#" className="underline">
          <span className="block sm:inline-block">
            Get 20% off membership for a limited time
          </span>
        </a>
      </p>
    </div>
  );
}
