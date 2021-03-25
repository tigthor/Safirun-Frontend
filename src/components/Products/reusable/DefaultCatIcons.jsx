import React from "react";
import { Row, Col, Space } from "antd";
import { motion } from "framer-motion";
import Link from "next/link";

const DefaultCatIcons = () => {
  const First_Screen_Icons = [
    {
      imgSrc: "assets/pictures/Food.png",
      description: "FOOD",
      href: "brabh",
    },
    {
      imgSrc: "assets/pictures/Beer.png",
      description: "DRINKS",
      href: "brabh",
    },

    {
      imgSrc: "assets/pictures/Bags.png",
      description: "GROCERIES",
      href: "brabh",
    },
    {
      imgSrc: "../../../../assets/pictures/Florist6.png",
      description: "FLORIST",
      href: "brabh",
    },
    {
      imgSrc: "../../../../assets/pictures/Florist7.png",
      description: "UTILITIES",
      href: "brabh",
    },
    {
      imgSrc: "../../../../assets/pictures/Florist4.png",
      description: "PHARMACY & ESSENTIALS",
      href: "brabh",
    },
    {
      imgSrc: "../../../../assets/pictures/Florist5.png",
      description: "SHOPPING",
      href: "brabh",
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
          <Space
            className="DefaultIcon_withText"
            size="small"
            direction="horizontal"
          >
            <Link href={icon.href}>
              <img
                src={icon.imgSrc}
                className="DefaultIcons__Icon"
                role="button"
              />
            </Link>
            <p className="DefaultIcons__Text">{icon.description}</p>
          </Space>
        ))}
      </div>
    </Row>
  );
};

export default DefaultCatIcons;
