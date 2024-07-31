import React from "react";
import NavBar from "./NavBar";
import Promotion from "./Promotion";
import Main from "./Main";
import Footer from "./Footer";

export default function MediumLandingPage() {
  return (
    <div className="bg-[#F7F4ED] h-[100vh] w-full font-serif ">
      <NavBar />
      <Promotion />
      <Main />
      <Footer />
    </div>
  );
}
