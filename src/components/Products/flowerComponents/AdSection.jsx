import React from 'react';
import { Button, Space } from 'antd';

const AdSection = ({details}) => {
  return (
    <div className="Products_AdSection">
      <img src={details.MainPic} className="Products_AdSection_MainPic" />
      <div className="Products_AdSection_MainText">
        <Space size="large" direction="vertical">
          <h3 className="Products_AdSection_MainText_Title">
            {details.MainTitle}
          </h3>
          <p className="Products_AdSection_MainText_Description">
            {details.MainDescription}
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
