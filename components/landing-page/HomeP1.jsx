import React, { useState } from "react";
import { motion } from "framer-motion";
import { Space, Row } from "antd";
import SearchBar from './reusable/SearchBar'

const HomePage2 = () => {
  const [hover, setHover] = useState(false);
  const [description, setDescription] = useState(
    "We deliver anything at your doorstep"
  );

  const First_Screen_Icons = [
    {
      imgSrc: "assets/Beer.png",
      description: "We deliver Wines & Spirits",
    },
    {
      imgSrc: "assets/Food.png",
      description: "We have best food around",
    },
    {
      imgSrc: "assets/Bags.png",
    },
    {
      imgSrc: "assets/Florist4.png",
      description: "Get your favorite flowers delivering at your door"
    },
    {
      imgSrc: "assets/Florist5.png",
    },
    {
      imgSrc: "assets/Florist6.png",
    },
    {
      imgSrc: "assets/Florist7.png",
    },
  ];

  return (
    <div className="Homepage2">
          <Space
            size="middle"
            direction="vertical"
            // style={{
            //   paddingBottom: "200px",
            // }}
            wrap="true"
          >
            <Row>
              <div className="italic text-center transition-opacity lg:text-4xl">
                {description}
              </div>
            </Row>
            <Row>
              <div className="flex items-center content-center">
                {First_Screen_Icons.map((icon) => (
                  <img
                    src={icon.imgSrc}
                    className="container flex items-center content-center w-4 mx-3 text-sm bg-green-500 rounded-full h:4 sm:w-8 sm:h:8 lg:w-16 lg:h-16"
                    role="button"
                    // onMouseEnter={() => {
                    //   setDescription(`${icon.description}`);
                    // }}
                    // onMouseLeave={() => {
                    //   setDescription("We deliver anything at your doorstep");
                    // }}
                  />
                ))}
              </div>
            </Row>
            <Row>
              <div>
                <h3
                  className='text-sm text-center'
                >
                  Your eco-friendly delivery to your doorstep.
                </h3>
              </div>
            </Row>
            <Row>
              <SearchBar />
            </Row>
          </Space>
        </div>
  );
};

export default HomePage2;
