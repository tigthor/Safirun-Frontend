import React from "react";
import { Row, Col, Space } from "antd";
import { motion } from "framer-motion";

const DefaultCatIcons = () => {
  const First_Screen_Icons = [
    {
      imgSrc: "assets/pictures/Beer.png",
      description: "DRINKS",
    },
    {
      imgSrc: "assets/pictures/Food.png",
      description: "FOOD",
    },
    {
      imgSrc: "assets/pictures/Bags.png",
      description: "GROCERIES",
    },
    {
      imgSrc: "assets/pictures/Florist6.png",
      description: "FLORIST",
    },
    {
      imgSrc: "assets/pictures/Florist7.png",
      description: "UTILITIES",
    },
    {
      imgSrc: "assets/pictures/Florist4.png",
      description: "PHARMACY & ESSENTIALS",
    },
    {
      imgSrc: "assets/pictures/Florist5.png",
      description: "SHOPPING",
    },
  ];
  return (
    <Row>
      <div className="DefaultIcons">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        ></motion.div>
        {First_Screen_Icons.map((icon) => (
          <Space className='DefaultIcon_withText' size='small' direction='horizontal'>
            <img
              src={icon.imgSrc}
              className="DefaultIcons__Icon"
              role="button"
            />
            <p className='DefaultIcons__Text'>{icon.description}</p>
          </Space>
        ))}
      </div>
    </Row>
  );
};

export default DefaultCatIcons;
