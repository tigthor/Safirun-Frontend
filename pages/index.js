import Head from "next/head";
import React from 'react';
import Firstscreen from '../components/Firstscreen';
import Footer from '../components/landing-page/reusable/Footer';
import Locserved from '../components/landing-page/locationWeServe';
import Marketplace from '../components/landing-page/Marketplace';
import Readyorder from '../components/landing-page/Readyorder';
import Peoplesay from '../components/landing-page/Peoplepanel';
import Onmenu from '../components/landing-page/Whatsonmenu';
import Favresto from '../components/landing-page/FavResto';
import Whysafi from '../components/landing-page/Whysafirun';
import { Space } from 'antd';

export default function Home() {
  return (
      <div className="page">
      <Space direction="vertical" size="large" wrap="true">
        <Firstscreen />
        <Marketplace className="marketplace" />
        <Favresto />
        <Onmenu />
        <Whysafi />
        <Peoplesay />
        <Locserved />
        <Readyorder />
        <Footer />
      </Space>
    </div>
  );
}

