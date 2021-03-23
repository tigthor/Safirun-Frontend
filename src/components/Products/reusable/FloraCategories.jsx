import React from "react";
import { Card, Row, Col, Image, Layout, Space } from "antd";

const FloraCategories = ({ title, FloristData, floraStyles }) => {
  return (
    <div style={floraStyles[0]}>
      <Row align="middle">
        <Space size="small" direction="vertical">
          <h1 style={floraStyles[1]}>{title}</h1>
          <Space size="middle" direction="horizontal" style={floraStyles[2]} wrap='true'>
            {FloristData.map((data) => (
              <Card className="oneProductCard" key={data.key}>
                <img src={data.mainPic} className="oneProductCard_MainPic" />
                <h3 className="ProductCard_MainTitle">{data.mainTitle}</h3>
                <p className="ProductCard_Description">{data.mainDesc}</p>
                <div className="ProductCard_Additional_Info">
                  <p className="ProductCard_Additional_Info_time">
                    {data.infoTime}
                  </p>
                  <div className="ProductCard_Additional_Info_ratings">
                    <img
                      className="ProductCard_Additional_Info_ratings_star"
                      src="Star.png"
                    />
                    <p className="ProductCard_Additional_Info_ratings_txt">
                      {data.infoRatingsText}
                    </p>
                    <p className="ProductCard_Additional_Info_ratings_text2">
                      {data.infoRatingsText2}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </Space>
        </Space>
      </Row>
    </div>
  );
};

export default FloraCategories;
