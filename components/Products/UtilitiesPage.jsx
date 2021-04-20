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
      mainDesc: 1800,
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
    {
      key: 2,
      mainPic: "../assets/utilitiesItem2.png",
      mainTitle: "6 KG Cylinder",
      mainDesc: 3800,
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
    {
      key: 3,
      mainPic: "../assets/utilitiesItem3.png",
      mainTitle: "12 KG Cylinder",
      mainDesc: 6800,
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
    {
      key: 4,
      mainPic: "../assets/utilitiesItem4.png",
      mainTitle: "20 KG Cylinder",
      mainDesc: 12000,
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
    ,
    {
      key: 5,
      mainPic: "../assets/utilitiesItem4.png",
      mainTitle: "40 KG Cylinder",
      mainDesc: 24000,
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
    {
      MainPic: "assets/utilitiesMainPic.png",
      MainTitle: "For cheaper price why bother going there by yourself",
      MainDescription:
        "Need Gaz? Order and your cylinder will reach you in minutes",
    },
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


  const [buttonClassName, setButtonClassName] = useState("UtilitiesOrderButton");

  return (
    <div className='CategoryPage'>
      <Space size="large" direction="vertical">
      <ProductsNavbar />
        <DiscountPass />
        {/* <DefaultCatIcons /> */}
        <ProductsAdSection
          details={pageDetails}
          Styles={adStyles}
          buttonClass={buttonClassName}
        />
        <FloraCategories
          title="NEED A REFILL?"
          FloristData={itemsData}
        />
        <FloraCategories
          title="NEW"
          FloristData={itemsData}
        />
        <Footer />
      </Space>
    </div>
  );
};
export default UtilitiesPage;
