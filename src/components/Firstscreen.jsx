import React from 'react';
import HomePage2 from './landing-page/HomeP1';
import Navbar from './landing-page/Navbar';
import Logo from './landing-page/reusable/logo';

const Firstscreen = () => {
  return (
    <div style={{
      backgroundColor: '#ffff',
      maxWidth: 'calc(100%)',
    }}>
      <div className="Homepart">
        <header>
          <div
            style={{
              display: 'flex',
              position: 'relative',
              justifyContent: 'space-between',
            }}
          >
            <Logo />
            <Navbar />
          </div>
        </header>
        <div className="SiteSearchPanel">
          <HomePage2 />
        </div>
      </div>
    </div>
  );
};

export default Firstscreen;
