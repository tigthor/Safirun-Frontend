import React from "react";
import HomePage2 from "./landing-page/HomeP1";
import Navbar from "./landing-page/Navbar";
import Logo from "./landing-page/reusable/logo";
import NewNavbar from "./landing-page/NewNavbar";

const Firstscreen = () => {
  return (
    <div
      style={{
        backgroundColor: "#eaa24d",
        maxWidth: "calc(100%)",
        maxHeight: "100%",
        borderRadius: "60px",
      }}
    >
      <NewNavbar />
      <div
        style={{
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          position: "relative",
        }}

      >
        <HomePage2 />
      </div>
    </div>
  );
};

export default Firstscreen;
