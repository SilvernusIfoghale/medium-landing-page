import React from "react";

export default function NavBar() {
  return (
    <div className="flex justify-between px-6 py-[18px] items-center ">
      <p className="text-3xl font-bold tracking-tighter ">Medium</p>
      <nav className="text-[13px] font-bold ">
        <div className="flex justify-center items-center gap-6">
          <p className="hidden md:block text-[0.9rem] font-light hover:cursor-pointer">
            <a href="#">Our story</a>
          </p>
          <p className="hidden md:block text-[0.9rem] font-light hover:cursor-pointer">
            <a href="#">Membership</a>{" "}
          </p>
          <p className="hidden md:block text-[0.9rem] font-light hover:cursor-pointer">
            <a href="">Write</a>{" "}
          </p>
          <p className="hidden sm:block text-[0.9rem] font-light hover:cursor-pointer">
            <a href="#">Sign in</a>{" "}
          </p>
          <div className="bg-black w-[105px] hover:cursor-pointer text-white text-center py-[9px] rounded-full tracking-tighter ">
            <p>Get started</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
