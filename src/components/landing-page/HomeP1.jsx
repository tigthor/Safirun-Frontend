import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Divider, Card, Input, Space, Row } from "antd";
import { RightSquareFilled } from "@ant-design/icons";

const HomePage2 = () => {
  const [hover, setHover] = useState(false);
  const [description, setDescription] = useState(
    "We deliver anything at your doorstep"
  );

  const First_Screen_Icons = [
    {
      imgSrc: "assets/pictures/Beer.png",
      description: "We deliver Wines & Spirits",
    },
    {
      imgSrc: "assets/pictures/Food.png",
      description: "We have best food around",
    },
    {
      imgSrc: "assets/pictures/Bags.png",
    },
    {
      imgSrc: "assets/pictures/Florist4.png",
    },
    {
      imgSrc: "assets/pictures/Florist5.png",
    },
    {
      imgSrc: "assets/pictures/Florist6.png",
    },
    {
      imgSrc: "assets/pictures/Florist7.png",
    },
  ];

  return (
    <div className="Homepage2">
      <div className="SiteSearchPanel__SearchBlock__Inner">
        <div className="SiteSearchPanel__SearchBlock__OpacityContainer">
          <Space
            size="middle"
            direction="vertical"
            style={{
              paddingBottom: "200px",
            }}
            wrap="true"
          >
            <Row>
              <div className="SiteSearchPanel__SearchBlock__Inner__Logo icon-delivery-logo">
                {description}
              </div>
            </Row>
            <Row>
              <div className="SiteSearchPanel__Icons">
                <motion.div
                  animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                ></motion.div>
                {First_Screen_Icons.map((icon) => (
                  <img
                    src={icon.imgSrc}
                    className="SiteSearchPanel__Icons__Icon icon-food "
                    role="button"
                    onMouseEnter={() => {
                      setDescription(`${icon.description}`);
                    }}
                    onMouseLeave={() => {
                      setDescription("We deliver anything at your doorstep");
                    }}
                  />
                ))}
              </div>
            </Row>
            <Row>
              <div>
                <h3
                  style={{
                    margin: "center",
                    textAlign: "center",
                    fontSize: "18",
                  }}
                >
                  Your eco-friendly delivery to your doorstep.
                </h3>
              </div>
            </Row>
            <Row>
              <div className="SearchBox">
                <Input
                  className="SearchInput"
                  placeholder="Enter Delivery Address to See The Menu"
                ></Input>
                <Button
                  type="primary"
                  className="SearchArrow"
                  icon={
                    <img
                      style={{
                        height: "50px",
                        position: "absolute",
                        width: "58.42px",
                        left: "-2.5px",
                        bottom: "-3.5px",
                      }}
                      src="assets/pictures/right-arrow-solid-square-button.png"
                    />
                  }
                ></Button>
                <img
                  src="assets/pictures/location.png"
                  style={{
                    position: "absolute",
                    left: "6px",
                    top: "9.5px",
                    height: "30px",
                    width: "38.42px",
                  }}
                />
              </div>
            </Row>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default HomePage2;
