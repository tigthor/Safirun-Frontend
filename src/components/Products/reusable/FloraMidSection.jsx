import React from 'react';
import { Button, Space } from 'antd';

const FloraMidSection = ({ details }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${details.background})`,
        height: '477px',
        maxWidth: '1440px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Space size="large" direction="vertical">
        <h3 className="FloraMidSection_MainText_Title">{details.title}</h3>
        <p className="FloraMidSection_MainText_Description">
          {details.description}
        </p>
        <button className="FloraMidSection_MainText_Button">ORDER NOW</button>
      </Space>
    </div>
  );
};

export default FloraMidSection;
