import React, { useState } from "react";
import FloraCategories from "./reusable/FloraCategories";
import ProductsAdSection from "./reusable/ProductsAdSection";
import { Space, Row, Col } from "antd";
import ChooseStore from "./reusable/ChooseStore";
import Footer from "../landing-page/reusable/Footer";
import DefaultCatIcons from "./reusable/DefaultCatIcons";
import DiscountPass from "./reusable/DiscountPass";
import ProductsNavbar from './reusable/ProductsNavbar';

const UtilitiesPage = () => {
  const [itemsData, setItemsData] = useState([
    {
      key: 1,
      mainPic: "../assets/utilitiesItem1.png",
      mainTitle: "3.9 KG Cylinder",
      mainDesc: "$$-Gas-Delivery",
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
    {
      key: 2,
      mainPic: "../assets/utilitiesItem2.png",
      mainTitle: "6 KG Cylinder",
      mainDesc: "$$-Gas-Delivery",
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
    {
      key: 3,
      mainPic: "../assets/utilitiesItem3.png",
      mainTitle: "12 KG Cylinder",
      mainDesc: "$$-Gas-Delivery",
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
    {
      key: 4,
      mainPic: "../assets/utilitiesItem4.png",
      mainTitle: "20 KG Cylinder",
      mainDesc: "$$-Gas-Delivery",
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
    ,
    {
      key: 5,
      mainPic: "../assets/utilitiesItem4.png",
      mainTitle: "40 KG Cylinder",
      mainDesc: "$$-Gas-Delivery",
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
  ]);
  const [pageDetails, setPageDetails] = useState([
    {
      MainPic: "assets/utilitiesMainPic.png",
      MainTitle: "Cook with Gas",
      MainDescription:
        "Need Gaz? Order and your cylinder will reach you in minutes",
    },
  ]);

  const [adStyles, setAdStyles] = useState([
    {
      backgroundColor: "#092878",
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

  const [floraCatStyle, setFloraCatStyle] = useState([
    {
      maxWidth: "100%",
      alignItems: "center",
      justifyItems: "center",
      marginRight: "auto",
      marginLeft: "auto",
      paddingLeft: "auto",
    },
    {
      marginRight: "auto",
      marginLeft: "auto",
    },
    {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyItems: "center",
      alignContent: "center",
      alignItems: "center"
    },
  ]);

  const [buttonClassName, setButtonClassName] = useState("UtilitiesOrderButton");

  return (
    <div className="PharmacyPage">
      <Space size="large" direction="vertical">
      <ProductsNavbar />
        <DiscountPass />
        {/* <DefaultCatIcons /> */}
        <ProductsAdSection
          details={pageDetails[0]}
          Styles={adStyles}
          buttonClass={buttonClassName}
        />
        <FloraCategories
          floraStyles={floraCatStyle}
          title="Need a Refill?"
          FloristData={itemsData}
        />
        <FloraCategories
          floraStyles={floraCatStyle}
          title="New"
          FloristData={itemsData}
        />
        <Footer />
      </Space>
    </div>
  );
};

export default UtilitiesPage;
