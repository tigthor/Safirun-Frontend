import React from "react";
import HomePage2 from "./landing-page/HomeP1";
import Navbar from "./landing-page/Navbar";
import Logo from "./landing-page/reusable/logo";
import NewNavbar from "./landing-page/NewNavbar";

const Firstscreen = () => {
  return (
    <div className="w-full max-w-full min-h-full bg-orange-500 rounded-3xl">
      <NewNavbar />
      <div className="flex items-center justify-center h-screen">
        <HomePage2 />
      </div>
    </div>
  );
};

export default Firstscreen;
