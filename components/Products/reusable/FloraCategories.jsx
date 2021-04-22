import React from "react";
import { Card, Row, Col, Image, Layout, Space, Button } from "antd";
import { motion, useCycle } from "framer-motion";
import OneProductCard from './OneProductCard';


const FloraCategories = ({ title, FloristData}) => {
  const [items, setItems] = useCycle(FloristData);
  return (
    <div className='mx-auto'>
      <Row align="middle">
        <Space size="small" direction="vertical">
          <h1 className='Category_Title'>{title}</h1>
          <Space
            size="middle"
            direction="horizontal"
            className='flex flex-row flex-wrap items-center justify-center'
            wrap="true"
          >
            {FloristData.map((data) => (
              <OneProductCard
              itemId={data.key}
              itemName={data.mainTitle}
              itemDescription={data.infoTime}
              itemImage={data.mainPic}
              itemPrice={data.mainDesc}
            />
            ))}
          </Space>
        </Space>
      </Row>
    </div>
  );
};

export default FloraCategories;
