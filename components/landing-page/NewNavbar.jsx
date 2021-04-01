import React from "react";
import { Card, Space, Button } from "antd";
import { Logo } from "../AllStyledComponents";
import RegisterDrawer from "./reusable/SignUp";

const NewNavbar = () => {
  return (
    <div className="NewNavbar">
      <Logo src="assets/pictures/Safi-Run-Logo.png" />
      <div className="NewNavbar___Buttons">
        <button className="HowItWorksButton">How it works</button>
        <button className="SigninButton">Sign in</button>
        {/* <button className="text-orange-500 text-base bg-black border-transparent w-auto mx-2 w-28 sm:text-sm rounded-md shadow-md">
          Register
        </button> */}
        <button
          className="RegisterButton"
          onClick={() => {
            return <RegisterDrawer />;
          }}
        >
          Register
          <RegisterDrawer />
        </button>
      </div>
    </div>
  );
};

export default NewNavbar;
