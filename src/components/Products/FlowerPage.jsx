import React, { Component, useState } from 'react';
// import { MenuOutlined } from '@ant-design/icons'
import { Space, Card, Row, Col, Radio } from 'antd';
import { MdArrowForward } from 'react-icons/md';
import Layout from 'antd/lib/layout/layout';
import BestSelling from './flowerComponents/BestSelling';
import MostPopular from './flowerComponents/Mostpopular';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import '../../App.css';
import AdSection from './flowerComponents/AdSection';
import FloraMidSection from './flowerComponents/FloraMidSection';
import ChooseFlorist from './flowerComponents/ChooseFlorist';
import Footer from '../landing-page/reusable/footer'

const Page = () => {
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
    }
  ])

  const [floristLoc, setFloristLoc] = useState([
    {
      id: 1,
      floristImage: '../../assets/Florist1',
      floristName: 'Aroma FLorists',
      floristLocation: '(Kigali, Kigali, Rwanda)',
    },
    {
      id: 2,
      floristImage: '../../assets/Florist2',
      floristName: 'JM Flowers',
      floristLocation: '(Kigali, Kigali, Rwanda)',
    },
    {
      id: 3,
      floristImage: 'assets/Florist3',
      floristName: 'Ifeza Florist',
      floristLocation: '(Kigali, Kigali, Rwanda)',
    },
  ]);

  return (
    <div className="FlowerPage">
      <Space size="large" direction="vertical">
        <AdSection />
        <BestSelling />
        <MostPopular />
        <FloraMidSection details={pageDetails[0]}/>
        <ChooseFlorist locations={floristLoc}/>
        <FloraMidSection details={pageDetails[1]} />
        <Footer />
      </Space>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Page />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('florist'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
