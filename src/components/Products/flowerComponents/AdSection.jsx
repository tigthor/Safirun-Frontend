import React from 'react';
import MainPic from '../../../assets/FlowerMainHeadPic.png';
import { Button, Space } from 'antd';

const AdSection = () => {
  return (
    <div className="Products_AdSection">
      <img src={MainPic} className="Products_AdSection_MainPic" />
      <div className="Products_AdSection_MainText">
        <Space size="large" direction="vertical">
          <h3 className="Products_AdSection_MainText_Title">
            Flowers at your doorstep
          </h3>
          <p className="Products_AdSection_MainText_Description">
            Order flowers to your loved one for special occasions
          </p>
          <button className="Products_AdSection_MainText_Button">
            ORDER NOW
          </button>
        </Space>
      </div>
    </div>
  );
};

export default AdSection;
