import React, { useState } from "react";
import { Avatar, Badge, Input, Space } from "antd";

const ProductsNavbar = () => {
  const [UserSection, setUserSection] = useState({
    accountInfo: [],
    cartInfo: [],
    searchInfo: [],
  });
  return (
    <div className="ProductsNavbar">
      <div className="ProductsNavbar__Categories_logo">
          <img
            src="assets/categoriesMain.png"
            className="ProductsNavbar__Categories_Icon"
          />
          <img
            src="assets/SafiOfficialLogo.png"
            className="ProductsNavbar__Logo"
          />
      </div>
      <p className="ProductsNavbar_Deliver">Delivery</p>
      <Input className="ProductsNavbar_Input" />
      <div className="ProductsNavbar__ForUser">
        <img
          src="assets/SearchIcon.png"
          className="ProductsNavbar_UserSection"
        />
        <img
          src="assets/cartIcon.png"
          className="ProductsNavbar_UserSection"
          bordered="false"
        />
        <img
          src="assets/AccountIcon.png"
          className="ProductsNavbar_UserSection"
        />
      </div>
    </div>
  );
};

export default ProductsNavbar;
