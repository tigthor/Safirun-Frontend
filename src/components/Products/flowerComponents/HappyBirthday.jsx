import React from 'react';
import { Button, Space } from 'antd';

const HappyBirthday = ({ backgroundImage, mainTitle, MainDescription}) => {
  return (
    <div className="GetWell_AdSection_MainText">
      <Space size="large" direction="vertical">
        <h3 className="GetWell_AdSection_MainText_Title">
          Flowers at your doorstep
        </h3>
        <p className="GetWell_AdSection_MainText_Description">
          Order flowers to your loved one for special occasions
        </p>
        <button className="GetWell_AdSection_MainText_Button">ORDER NOW</button>
      </Space>
    </div>
  );
};

export default GetWell;
