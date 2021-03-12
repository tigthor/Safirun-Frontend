import React from 'react';
import logo from '../../../assets/pictures/Safi-Run-Logo.png';

const Logo = () => {
    return (
      <img
        src={logo}
        style={{
          width: '174px',
          height: '69px',
          paddingTop: '10px',
          paddingLeft: '50px'
        }}
      />
    );
}
 
export default Logo;