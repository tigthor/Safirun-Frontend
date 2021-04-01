import React from "react";
import { Button, Space } from "antd";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ProductsAdSection = ({ details, Styles, buttonClass }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{
        delay: 12500,
        disableOnInteraction: true
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="Products_Ads"
    >
      <SwiperSlide className="Products_AdSection">
        <div className="Products_AdSection">
          <img src={details.MainPic} className="Products_AdSection_MainPic" />
          <div style={Styles[0]}>
            <Space size="large" direction="vertical">
              <h3 style={Styles[1]}>{details.MainTitle}</h3>
              <p className="Products_AdSection_MainText_Description">
                {details.MainDescription}
              </p>
              <button className={buttonClass}>ORDER NOW</button>
            </Space>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default ProductsAdSection;
