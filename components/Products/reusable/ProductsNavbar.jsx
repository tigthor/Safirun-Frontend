import React, { useState } from "react";
import { Avatar, Badge, Input, Space } from 'antd';
import { ShoppingFilled } from '@ant-design/icons';


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
          src="../../../../assets/categoriesMain.png"
          className="ProductsNavbar__Categories_Icon"
        />
        <img
          src="../../../../assets/SafiOfficialLogo.png"
          className="ProductsNavbar__Logo"
        />
        <p className="ProductsNavbar_Deliver">Delivery</p>
      </div>

      <Input className="ProductsNavbar_Input" />
      <div className="ProductsNavbar__ForUser">
        <img
          src="../../../../assets/SearchIcon.png"
          className="ProductsNavbar_UserSection"
        />
        <Badge count={5}>
          <Avatar shape="square" icon={<ShoppingFilled
            className='text-4xl text-green-500 rounded'

          />} />
        </Badge>
        <img
          src="../../../../assets/AccountIcon.png"
          className="ProductsNavbar_UserSection"
        />
      </div>
    </div>
  );
};

export default ProductsNavbar;
