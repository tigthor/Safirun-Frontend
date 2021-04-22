import React from "react";
import { MdArrowForward } from "react-icons/md";

const Marketplace = () => {
  const Data = [
    {
      url: '../../assets/food1.png',
      text: 'FOOD',
      backgroudColor: '#C2773C',
      href: 'food/home'
    },
    {
      url: '../../assets/drinks2.png',
      text: 'DRINKS',
      backgroudColor: '#813F5A',
      href: 'drinks/home'
    },
    {
      url: '../../assets/GROCERIES2.png',
      text: 'GROCERIES',
      backgroudColor: '#589D16',
      href: 'groceries/home'
    },
    {
      url: "../../assets/PHARMACY-ESSENTIALS2.png",
      text: "PHARMACY & ESSENTIALS",
      backgroudColor: "#3F85B8",
      href: "pharmacy",
    },
    {
      url: "../../FLORIST2.png",
      text: "FLORIST",
      backgroudColor: "#AB2B1A",
      href: "florist",
    },
    {
      url: "../../assets/UTILITIES2.png",
      text: "UTILITIES",
      backgroudColor: "#004CE7",
      href: "utilities",
    },
  ];
  return (
    <div>
        <h1 className='text-2xl italic text-center transition-opacity lg:text-4xl'>
          SAFIRUN Marketplace
        </h1>
      <div className="marketPlaceChil2">
        {Data.map((data) => (
          <div className="marketPlaceChil3">
            <img
              src={data.url}
              style={{
                width: "342px",
                height: "303px",
                left: "539px",
                borderRadius: "3px",
                top: "1002px",
              }}
            />
            <p
              style={{
                backgroundColor: `${data.backgroudColor}`,
                width: "calc(100%)",
                color: "#FFFFFF",
                position: "absolute",
                justifyContent: "center",
                textAlign: "center",
                verticalAlign: "middle",
                bottom: "-4px",
                borderRadius: "3px",
                left: "-0px",
                height: "57px",
                lineHeight: "57px",
              }}
            >
              <a
                href={data.href}
                style={{
                  textDecoration: "none",
                  color: "#FFFFFF",
                }}
              >
                {data.text}
              </a>
            </p>
          </div>
        ))}
        <div className="marketPlaceChil3">
          <img
            src="../assets/SHOPPIN2.png"
            style={{
              width: "calc(100%)",
              height: "303px",
              borderRadius: "3px",
              left: "539px",
              top: "1002px",
            }}
          />
          <a href='shop/home'
            className='MarketplaceShooping'
          >
            SHOPPING
          </a>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
