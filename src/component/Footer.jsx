import React from "react";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full">
      <footer
        className="flex gap-5 text-[0.8rem] bg-black md:bg-[#F7F4ED]
      
      md:border-t-gray-600 border-t-[1px] md:justify-center text-white md:text-gray-800 h-[4.5rem] items-center p-6 sm:pl-10"
      >
        <p className="md:hidden">
          <a href="#">About</a>
        </p>
        <p className="md:hidden">
          <a href="#">Help</a>
        </p>
        <p className="md:hidden">
          <a href="#">Terms</a>
        </p>
        <p className="md:hidden">
          <a href="#">Privacy</a>
        </p>
        {/* sm and up */}
        <p className="hidden md:block">
          <a href="#">Help</a>
        </p>
        <p className="hidden md:block">
          <a href="#">Status</a>
        </p>
        <p className="hidden md:block">
          <a href="#">About</a>
        </p>
        <p className="hidden md:block">
          <a href="#">Careers</a>
        </p>
        <p className="hidden md:block">
          <a href="#">Press</a>
        </p>
        <p className="hidden md:block">
          <a href="#">Blog</a>
        </p>
        <p className="hidden md:block">
          <a href="#">Privacy</a>
        </p>
        <p className="hidden md:block">
          <a href="#">Terms</a>
        </p>
        <p className="hidden md:block">
          <a href="#">Text to speech</a>
        </p>
        <p className="hidden md:block">
          <a href="#">Teams</a>
        </p>
      </footer>
    </div>
  );
}
