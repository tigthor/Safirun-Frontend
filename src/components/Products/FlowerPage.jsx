import React, { Component, useState } from 'react';
// import { MenuOutlined } from '@ant-design/icons'
import { Space, Card, Row, Col, Radio } from 'antd';
import BestSelling from './flowerComponents/BestSelling';
import MostPopular from './flowerComponents/MostPopular';
import AdSection from './flowerComponents/AdSection';
import FloraMidSection from './flowerComponents/FloraMidSection';
import ChooseFlorist from './flowerComponents/ChooseFlorist';
import Footer from '../landing-page/reusable/Footer'

const FlowerPage = () => {
  const [pageDetails, setPageDetails] = useState([
    {
      title: 'Get Well',
      description: 'Send flowers to your loved ones for special occassions',
      background: 'GetWell.png'
    },
    {
      title: 'Happy Birthday',
      description: 'Send flowers for your loved ones for special occassions',
      background: 'HappyBirthday.png',
    },
    {
      MainPic: 'assets/FlowerMainHeadPic.png',
      MainTitle: 'Flowers at your doorstep',
      MainDescription: 'Order flowers to your loved one for special occasions'
    }
  ])

  const [floristLoc, setFloristLoc] = useState([
    {
      id: 1,
      floristImage: 'assets/Florist1.png',
      floristName: 'Aroma FLorists',
      floristLocation: '(Kigali, Kigali, Rwanda)',
    },
    {
      id: 2,
      floristImage: 'assets/Florist2.png',
      floristName: 'JM Flowers',
      floristLocation: '(Kigali, Kigali, Rwanda)',
    },
    {
      id: 3,
      floristImage: 'assets/Florist3.png',
      floristName: 'Ifeza Florist',
      floristLocation: '(Kigali, Kigali, Rwanda)',
    },
  ]);

  return (
    <div className="FlowerPage">
      <Space size="large" direction="vertical">
        <AdSection details={pageDetails[2]}/>
        <BestSelling />
        <MostPopular />
        <FloraMidSection details={pageDetails[0]} />
        <ChooseFlorist Locations={floristLoc} />
        <FloraMidSection details={pageDetails[1]} />
        <Footer />
      </Space>
    </div>
  );
};

export default FlowerPage;