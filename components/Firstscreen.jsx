import React from "react";
import HomePage2 from "./landing-page/HomeP1";
import NewNavbar from "./landing-page/NewNavbar";

const Firstscreen = () => {
  return (
    <div className="FirstScreen">
      <NewNavbar />
      <div className="flex items-center justify-center h-screen">
        <HomePage2 />
      </div>
    </div>
  );
};

export default Firstscreen;
