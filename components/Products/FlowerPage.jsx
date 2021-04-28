import React, { Component, useState } from "react";
import { Space } from "antd";
import ProductsAdSection from "./reusable/ProductsAdSection";
import FloraMidSection from "./reusable/FloraMidSection";
import ChooseFlorist from "./flowerComponents/ChooseFlorist";
import FloraCategories from "./reusable/FloraCategories";
import Footer from "../landing-page/reusable/Footer";
import DefaultCatIcons from "./reusable/DefaultCatIcons";
import DiscountPass from "./reusable/DiscountPass";
import ProductsNavbar from "./reusable/ProductsNavbar";

const FlowerPage = () => {
  const [itemsData, setItemsData] = useState([
    {
      key: 1,
      mainPic: "../assets/Flower1.png",
      mainTitle: "Aroma",
      mainDesc: "$$-Flowers-Delivery",
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
    {
      key: 2,
      mainPic: "../assets/Flower2.png",
      mainTitle: "Ifeza",
      mainDesc: "$$-Flowers-Delivery",
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
    {
      key: 3,
      mainPic: "../assets/Flower3.png",
      mainTitle: "JM Flowers",
      mainDesc: "$$-Flowers-Delivery",
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
    {
      key: 4,
      mainPic: "../assets/Flower4.png",
      mainTitle: "Kimironko Market",
      mainDesc: "$$-Flowers-Delivery",
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
  ]);

  const [pageDetails, setPageDetails] = useState([
    {
      title: "Get Well",
      description: "Send flowers to your loved ones for special occassions",
      background: "GetWell.png",
    },
    {
      title: "Happy Birthday",
      description: "Send flowers for your loved ones for special occassions",
      background: "HappyBirthday.png",
    },
    {
      MainPic: "assets/FlowerMainHeadPic.png",
      MainTitle: "Flowers at your doorstep",
      MainDescription: "Order flowers to your loved one for special occasions",
    },
  ]);

  const [floristLoc, setFloristLoc] = useState([
    {
      id: 1,
      floristImage: "assets/Florist1.png",
      floristName: "Aroma FLorists",
      floristLocation: "(Kigali, Kigali, Rwanda)",
    },
    {
      id: 2,
      floristImage: "assets/Florist2.png",
      floristName: "JM Flowers",
      floristLocation: "(Kigali, Kigali, Rwanda)",
    },
    {
      id: 3,
      floristImage: "assets/Florist3.png",
      floristName: "Ifeza Florist",
      floristLocation: "(Kigali, Kigali, Rwanda)",
    },
  ]);

  const [adStyles, setAdStyles] = useState([
    {
      backgroundColor: "#ff5a9f",
      maxHeight: "400px",
      width: "683px",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    {
      fontWeight: "600",
      fontSize: "30px",
      color: "#ffff",
    },
  ]);

  const [pageDivider, setPageDivider] = useState(43);
  const [buttonClassName, setButtonClassName] = useState(
    "Products_AdSection_MainText_Button"
  );

  return (
    <div className="FlowerPage">
      <Space size={pageDivider} direction="vertical">
        <ProductsNavbar />
        <DiscountPass />
        <DefaultCatIcons />
        <ProductsAdSection
          details={pageDetails}
          Styles={adStyles}
          buttonClass={buttonClassName}
        />
        <FloraCategories
          title="Best Selling Flowers"
          FloristData={itemsData}
        />
        <FloraCategories
          title="Most Popular FLowers"
          FloristData={itemsData}
        />
        <FloraMidSection details={pageDetails[0]} />
        <ChooseFlorist Locations={floristLoc} />
        <FloraMidSection details={pageDetails[1]} />
        <Footer />
      </Space>
    </div>
  );
};

export default FlowerPage;
