import React from 'react';
import { Card, Space, Button } from 'antd';
import { Logo } from '../AllStyledComponents';
import RegisterDrawer from './reusable/SignUp';
import Login from './reusable/Login';

const NewNavbar = () => {
  return (
    <div className="NewNavbar">
      <img src="assets/pictures/Safi-Run-Logo.png" className="NewNavbarLogo" />
      <div className="NewNavbar___Buttons">
        <button className="HowItWorksButton">How it works</button>
        <Login />
        {/* <button className="text-orange-500 text-base bg-black border-transparent w-auto mx-2 w-28 sm:text-sm rounded-md shadow-md">
          Register
        </button> */}
        <RegisterDrawer />
      </div>
    </div>
  );
};

export default NewNavbar;
