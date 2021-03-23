import React, { useState } from "react";
import FloraCategories from "./reusable/FloraCategories";
import ProductsAdSection from "./reusable/ProductsAdSection";
import { Space, Row, Col } from "antd";
import ChooseStore from "./reusable/ChooseStore";
import Footer from "../landing-page/reusable/Footer";
import DefaultCatIcons from "./reusable/DefaultCatIcons";
import DiscountPass from "./reusable/DiscountPass";
import ProductsNavbar from './reusable/ProductsNavbar';

const PharmacyPage = () => {
  const [itemsData, setItemsData] = useState([
    {
      key: 1,
      mainPic: "../assets/pharmacyProd1.png",
      mainTitle: "Pampers",
      mainDesc: "$$-Pharmacy-Delivery",
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
    {
      key: 2,
      mainPic: "../assets/pharmacyProd2.png",
      mainTitle: "Always",
      mainDesc: "$$-Pharmacy-Delivery",
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
    {
      key: 3,
      mainPic: "../assets/pharmacyProd3.png",
      mainTitle: "Celeac for babies",
      mainDesc: "$$-Pharmacy-Delivery",
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
    {
      key: 4,
      mainPic: "../assets/pharmacyProd4.png",
      mainTitle: "Johnston",
      mainDesc: "$$-Pharmacy-Delivery",
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
    ,
    {
      key: 5,
      mainPic: "../assets/pharmacyProd4.png",
      mainTitle: "Coldcap",
      mainDesc: "$$-Pharmacy-Delivery",
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
    },
  ]);
  const [pageDetails, setPageDetails] = useState([
    {
      MainPic: "assets/pharmacyMainPic.png",
      MainTitle: "Need your house cleaned",
      MainDescription:
        "Get your favorite cleaning products delivered to your doorstep",
    },
  ]);

  const [adStyles, setAdStyles] = useState([
    {
      backgroundColor: "#237DCF",
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
      maxWidth: "1200px",
      alignItems: "center",
      justifyItems: "center",
    },
    {
      paddingLeft: "calc((100% - 92.5%))",
    },
    {
      width: "100%",
      paddingLeft: "calc((100% - 92.5%))",
      paddingRight: "calc((100% - 98%))",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginRight: "auto",
      marginLeft: "auto",
    },
  ]);

  const [storeLocStyles, setStoreLocStyles] = useState([
    {
      paddingLeft: "calc((100% - 92.5%))",
      paddingRight: "calc((100% - 98%))",
    },
  ]);

  const [storeLoc, setStoreLoc] = useState([
    {
      id: 1,
      storeImage: "assets/pharmacyStore1.png",
      storeName: "Kasha",
      storeLocation: "(Kigali, Kigali, Rwanda)",
    },
    {
      id: 2,
      storeImage: "assets/pharmacyStore2.png",
      storeName: "Vine Pharmacy",
      storeLocation: "(Kigali, Kigali, Rwanda)",
    },
    {
      id: 3,
      storeImage: "assets/pharmacyStore3.png",
      storeName: "Kipharma",
      storeLocation: "(Kigali, Kigali, Rwanda)",
    },
    {
      id: 4,
      storeImage: "assets/pharmacyStore4.png",
      storeName: "Pharmacy Conseil",
      storeLocation: "(Kigali, Kigali, Rwanda)",
    },
    {
      id: 5,
      storeImage: "assets/pharmacyStore5.png",
      storeName: "Teta Pharmacy",
      storeLocation: "(Kigali, Kigali, Rwanda)",
    },
  ]);

  const [buttonClassName, setButtonClassName] = useState("PharmacyOrderButton");

  return (
    <div className="PharmacyPage">
      <Space size="large" direction="vertical">
      <ProductsNavbar />
        <DiscountPass />
        <DefaultCatIcons />
        <ProductsAdSection
          details={pageDetails[0]}
          Styles={adStyles}
          buttonClass={buttonClassName}
        />
        <FloraCategories
          floraStyles={floraCatStyle}
          title="Top Picks For You"
          FloristData={itemsData}
        />
        <FloraCategories
          floraStyles={floraCatStyle}
          title="Featured Products"
          FloristData={itemsData}
        />
        <FloraCategories
          floraStyles={floraCatStyle}
          title="Most Popular"
          FloristData={itemsData}
        />
        <ChooseStore Locations={storeLoc} Styles={storeLocStyles[0]} title='Choose A Store'/>
        <Footer />
      </Space>
    </div>
  );
};

export default PharmacyPage;
