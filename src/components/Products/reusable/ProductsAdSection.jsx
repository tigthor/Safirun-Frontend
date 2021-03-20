import React from "react";
import { Button, Space } from "antd";

const ProductsAdSection = ({ details, Styles }) => {
  return (
    <div className="Products_AdSection">
      <img src={details.MainPic} className="Products_AdSection_MainPic" />
      <div style={Styles[0]}>
        <Space size="large" direction="vertical">
          <h3 style={Styles[1]}>{details.MainTitle}</h3>
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

export default ProductsAdSection;
