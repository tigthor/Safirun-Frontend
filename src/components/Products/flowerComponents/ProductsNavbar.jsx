import React from 'react';
import MainPic from '../../../assets/FlowerMainHeadPic.png';
import { Button } from 'antd';

const AdSection = () => {
  return (
    <div className='Products_AdSection'>
      <img src={MainPic}className='Products_AdSection_MainPic'/>
      <div className='Products_AdSection_MainText'>
        <h3>Flowers at your doorstep</h3>
        <p>Order flowers to your loved one for special occasions</p>
        <Button>ORDER NOW</Button>
      </div>
    </div>
  );
};

export default AdSection;
