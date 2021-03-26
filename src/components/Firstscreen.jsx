import React from "react";
import HomePage2 from "./landing-page/HomeP1";
import Navbar from "./landing-page/Navbar";
import Logo from "./landing-page/reusable/logo";
import NewNavbar from "./landing-page/NewNavbar";

const Firstscreen = () => {
  return (
    <div className="Homepart">
      <NewNavbar />
      <div className="SiteSearchPanel">
        <HomePage2 />
      </div>
    </div>
  );
};

export default Firstscreen;
