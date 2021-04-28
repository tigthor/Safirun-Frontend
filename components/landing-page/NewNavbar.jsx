import React from 'react';
import RegisterDrawer from './reusable/SignUp'
import Login from '../landing-page/reusable/Login'

const NewNavbar = () => {
  return (
    <div className="NewNavbar">
      <img src="assets/Safi-Run-Logo.png" className="NewNavbarLogo" />
      <div className="NewNavbar___Buttons">
        <button className="HowItWorksButton">How it works</button>
        <Login />
        <RegisterDrawer />
      </div>
    </div>
  );
};

export default NewNavbar;
