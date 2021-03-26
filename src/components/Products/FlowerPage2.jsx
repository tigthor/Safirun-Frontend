import React, { useState } from "react";
import FloraCategories from "./reusable/FloraCategories";
import { Space } from "antd";
import Footer from "../landing-page/reusable/Footer";

const FlowerPage2 = () => {
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
    {
      key: 5,
      mainPic: "../assets/Flower4.png",
      mainTitle: "Kimironko Market",
      mainDesc: "$$-Flowers-Delivery",
      infoTime: "20-30 min",
      infoRatingsText: "4.2",
      infoRatingsText2: "(200+)",
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
  const [pageDivider, setPageDivider] = useState(43);

  return (
    <div className="FlowerPage2">
      <Space size={pageDivider} direction="vertical">
        <ProductsNavbar />
        <DiscountPass />
        <DefaultCatIcons />
        <FloraCategories
          floraStyles={floraCatStyle}
          title="Top Picks For you"
          FloristData={itemsData}
        />
        <FloraCategories
          floraStyles={floraCatStyle}
          title="Most Popular"
          FloristData={itemsData}
        />
        <FloraCategories
          floraStyles={floraCatStyle}
          title="Birthday"
          FloristData={itemsData}
        />
        <FloraCategories
          floraStyles={floraCatStyle}
          title="Get Well"
          FloristData={itemsData}
        />
        <FloraCategories
          floraStyles={floraCatStyle}
          title="Plant"
          FloristData={itemsData}
        />
        <FloraCategories
          floraStyles={floraCatStyle}
          title="Just Because"
          FloristData={itemsData}
        />
        <FloraCategories
          floraStyles={floraCatStyle}
          title="Gifts"
          FloristData={itemsData}
        />
        <Footer />
      </Space>
    </div>
  );
};

export default FlowerPage2;
