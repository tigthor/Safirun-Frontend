import React, { useState } from "react";
import FloraCategories from "./reusable/FloraCategories";
import ProductsAdSection from "./reusable/ProductsAdSection";
import { Space, Row, Col } from "antd";
import ChooseStore from "./reusable/ChooseStore";
import Footer from "../landing-page/reusable/Footer";
import DefaultCatIcons from "./reusable/DefaultCatIcons";
import DiscountPass from "./reusable/DiscountPass";
import ProductsNavbar from "./reusable/ProductsNavbar";

const GroceriesPage = () => {
  const [itemsData, setItemsData] = useState([
    [
      {
        key: 1,
        mainPic: "../assets/grocTop1.png",
        mainTitle: "Mixed",
        mainDesc: "2500 RWF/Pc",
        infoTime: "20-30 min",
        infoRatingsText: "4.2",
        infoRatingsText2: "(200+)",
      },
      {
        key: 2,
        mainPic: "../assets/grocTop2.png",
        mainTitle: "Chicken legs",
        mainDesc: "6000 RWF",
        infoTime: "20-30 min",
        infoRatingsText: "4.2",
        infoRatingsText2: "(200+)",
      },
      {
        key: 3,
        mainPic: "../assets/grocTop3.png",
        mainTitle: "Banana",
        mainDesc: "5000 RWF/KG",
        infoTime: "20-30 min",
        infoRatingsText: "4.2",
        infoRatingsText2: "(200+)",
      },
      {
        key: 4,
        mainPic: "../assets/grocTop4.png",
        mainTitle: "Spice",
        mainDesc: "5000 RWF/KG",
        infoTime: "20-30 min",
        infoRatingsText: "4.2",
        infoRatingsText2: "(200+)",
      },
      ,
      {
        key: 5,
        mainPic: "../assets/grocTop5.png",
        mainTitle: "Tomato",
        mainDesc: "5000 RWF/KG",
        infoTime: "20-30 min",
        infoRatingsText: "4.2",
        infoRatingsText2: "(200+)",
      },
    ],
    [
      {
        key: 1,
        mainPic: "../assets/grocFeat1.png",
        mainTitle: "Chips",
        mainDesc: "5000 RWF",
        infoTime: "20-30 min",
        infoRatingsText: "4.2",
        infoRatingsText2: "(200+)",
      },
      {
        key: 2,
        mainPic: "../assets/grocFeat2.png",
        mainTitle: "Yoghurt",
        mainDesc: "1000 RWF",
        infoTime: "20-30 min",
        infoRatingsText: "4.2",
        infoRatingsText2: "(200+)",
      },
      {
        key: 3,
        mainPic: "../assets/grocFeat3.png",
        mainTitle: "Ketchup",
        mainDesc: "3000 RWF",
        infoTime: "20-30 min",
        infoRatingsText: "4.2",
        infoRatingsText2: "(200+)",
      },
      {
        key: 4,
        mainPic: "../assets/grocFeat4.png",
        mainTitle: "Hellmanns mayo",
        mainDesc: "5000 RWF/KG",
        infoTime: "20-30 min",
        infoRatingsText: "4.2",
        infoRatingsText2: "(200+)",
      },
      ,
      {
        key: 5,
        mainPic: "../assets/grocFeat5.png",
        mainTitle: "Eggs",
        mainDesc: "3000 RWF/packs",
        infoTime: "20-30 min",
        infoRatingsText: "4.2",
        infoRatingsText2: "(200+)",
      },
    ],
    [
      {
        key: 1,
        mainPic: "../assets/grocPop1.png",
        mainTitle: "Rice Bags",
        mainDesc: "10000 RWF/bag",
        infoTime: "20-30 min",
        infoRatingsText: "4.2",
        infoRatingsText2: "(200+)",
      },
      {
        key: 2,
        mainPic: "../assets/grocPop2.png",
        mainTitle: "Cane Sugar",
        mainDesc: "20000 RWF/bag",
        infoTime: "20-30 min",
        infoRatingsText: "4.2",
        infoRatingsText2: "(200+)",
      },
      {
        key: 3,
        mainPic: "../assets/grocPop3.png",
        mainTitle: "Sunflower oil",
        mainDesc: "3000 RWF/5l",
        infoTime: "20-30 min",
        infoRatingsText: "4.2",
        infoRatingsText2: "(200+)",
      },
      {
        key: 4,
        mainPic: "../assets/grocPop4.png",
        mainTitle: "Ceres Juice",
        mainDesc: "5000 RWF",
        infoTime: "20-30 min",
        infoRatingsText: "4.2",
        infoRatingsText2: "(200+)",
      },
      ,
      {
        key: 5,
        mainPic: "../assets/grocPop5.png",
        mainTitle: "Inyange milk",
        mainDesc: "5000 RWF",
        infoTime: "20-30 min",
        infoRatingsText: "4.2",
        infoRatingsText2: "(200+)",
      },
    ],
  ]);
  const [pageDetails, setPageDetails] = useState([
    {
      MainPic: "assets/groceriesMainPic.png",
      MainTitle: "Need Groceries",
      MainDescription: "Get your favorite groceries delivered to your doorstep",
    },
  ]);

  const [adStyles, setAdStyles] = useState([
    {
      backgroundColor: "#72A758",
      maxHeight: "400px",
      width: "calc(50%)",
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
      maxWidth: "calc(80%)",
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
      // flexWrap: "wrap",
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
    [
      {
        id: 1,
        storeImage: "assets/grocMark1.png",
        storeName: "Ndoli Super Market",
        storeLocation: "(Kigali, Kigali, Rwanda)",
      },
      {
        id: 2,
        storeImage: "assets/grocMark2.png",
        storeName: "Simba Super Market",
        storeLocation: "(Kigali, Kigali, Rwanda)",
      },
      {
        id: 3,
        storeImage: "assets/grocMark3.png",
        storeName: "Sawa City",
        storeLocation: "(Kigali, Kigali, Rwanda)",
      },
      {
        id: 4,
        storeImage: "assets/grocMark4.png",
        storeName: "Woodland Super Market",
        storeLocation: "(Kigali, Kigali, Rwanda)",
      },
    ],
    [
      {
        id: 1,
        storeImage: "assets/grocMark5.png",
        storeName: "Eat Green",
        storeLocation: "(Kigali, Kigali, Rwanda)",
      },
      {
        id: 2,
        storeImage: "assets/grocMark6.png",
        storeName: "Go Green",
        storeLocation: "(Kigali, Kigali, Rwanda)",
      },
      {
        id: 3,
        storeImage: "assets/grocMark7.png",
        storeName: "Butchery oil",
        storeLocation: "(Kigali, Kigali, Rwanda)",
      },
      {
        id: 4,
        storeImage: "assets/grocMark8.png",
        storeName: "Kigali Farms",
        storeLocation: "(Kigali, Kigali, Rwanda)",
      },
    ],
  ]);

  const [buttonClassName, setButtonClassName] = useState(
    "GroceriesOrderButton"
  );

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
          FloristData={itemsData[0]}
        />
        <FloraCategories
          floraStyles={floraCatStyle}
          title="Featured Products"
          FloristData={itemsData[1]}
        />
        <FloraCategories
          floraStyles={floraCatStyle}
          title="Most Popular"
          FloristData={itemsData[2]}
        />
        <ChooseStore
          Locations={storeLoc[0]}
          Styles={storeLocStyles[0]}
          title="Choose A Store"
        />
        <h1
          style={{
            paddingLeft: "calc((100% - 97.0%))",
            paddingRight: "calc((100% - 98%))",
            color: "#ffff",
            fontSize: "26.9px",
            lineHeight: "40px",
            color: "white",
            fontWeight: "bold",
            backgroundColor: "#E36363",
            marginLeft: "calc((100% - 92.5%))",
            marginRight: "calc((100% - 92.5%))",
          }}
        >
          FLESH PRODUCE & MEAT
        </h1>
        <ChooseStore
          Locations={storeLoc[1]}
          Styles={storeLocStyles[0]}
          title=""
        />
        <Footer />
      </Space>
    </div>
  );
};

export default GroceriesPage;
