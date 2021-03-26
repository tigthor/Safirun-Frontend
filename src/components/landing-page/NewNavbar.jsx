import React from "react";
import { Card, Space, Button } from "antd";

const NewNavbar = () => {
  return (
    <div className="NewNavbar">
      <img src="assets/pictures/Safi-Run-Logo.png" className="NewNavbarLogo" />
      <div className="NewNavbar___Buttons">
        <button className='HowItWorksButton'>How it works</button>
        <button className='SigninButton'>
            Sign in
          </button>
        <button className='RegisterButton'>Register</button>

      </div>
    </div>
  );
};

export default NewNavbar;
