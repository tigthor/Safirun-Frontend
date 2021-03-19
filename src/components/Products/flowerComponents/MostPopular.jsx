import React from 'react';
import { Card, Row, Col, Image, Layout, Space } from 'antd';


const MostPopular = ({ title,FloristData }) => {
  return (
     <div className="BestSelling">
        <Row align="middle">
          <h1>{title}</h1>
            <Space size="middle" direction="horizontal" className="BestSelling_Items">
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
                        src='Star.png'
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
        </Row>
      </div>
  );
};

export default MostPopular;
