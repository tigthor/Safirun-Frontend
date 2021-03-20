import React from "react";

const DefaultCategoriesIcons = () => {
  const First_Screen_Icons = [
    {
      imgSrc: "assets/pictures/Beer.png",
    },
    {
      imgSrc: "assets/pictures/Food.png",
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
      imgSrc: "assets/pictures/Florist6.png",
    },
  ];
  return (
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
          />
        ))}
      </div>
    </Row>
  );
};

export default DefaultCategoriesIcons;
