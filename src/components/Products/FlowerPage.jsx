import React, { Component, useState } from "react";
// import { MenuOutlined } from '@ant-design/icons'
import { Space, Card, Row, Col, Radio } from "antd";
import BestSelling from "./flowerComponents/BestSelling";
import MostPopular from "./flowerComponents/MostPopular";
import AdSection from "./flowerComponents/AdSection";
import FloraMidSection from "./flowerComponents/FloraMidSection";
import ChooseFlorist from "./flowerComponents/ChooseFlorist";
import Footer from "../landing-page/reusable/Footer";

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

  return (
    <div className="FlowerPage">
      <Space size="large" direction="vertical">
        <AdSection details={pageDetails[2]} />
        <BestSelling title='Best Selling Flowers' FloristData={itemsData}/>
        <MostPopular title='Most Popular FLowers' FloristData={itemsData}/>
        <FloraMidSection details={pageDetails[0]} />
        <ChooseFlorist Locations={floristLoc} />
        <FloraMidSection details={pageDetails[1]} />
        <Footer />
      </Space>
    </div>
  );
};

export default FlowerPage;
