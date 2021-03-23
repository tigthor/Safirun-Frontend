import React, { Component } from 'react';
// import { MenuOutlined } from '@ant-design/icons'
import { Space, Card, Row, Col, Radio } from 'antd'
import { MdArrowForward } from 'react-icons/md';
import Layout from 'antd/lib/layout/layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Footer from '../../landing-page/reusable/Footer';
import ProductsNavbar from '../reusable/ProductsNavbar';
import DiscountPass from '../reusable/DiscountPass';


const ShopingViewAll = () => {
  const Data = [
    {
      url: '../assets/Food-1.png',
      text: 'FOOD',
    },
    {
      url: '../assets/Food-2.png',
      text: 'DRINKS',
    },
    {
      url: '../assets/Food-3.png',
      text: 'GROCERIES',
    },
    {
      url: '../assets/Food-4.png',
      text: 'PHARMACY & ESSENTIALS',
    },
    {
      url: '../assets/Food-5.png',
      text: 'FLORIST',
    },
    {
      url: '../assets/Food-6.png',
      text: 'UTILITIES',
    },
  ]

  const Beauty = [
    {
      url: '../beauty.png',
      text: 'Beauty Products',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../beauty.png',
      text: 'Beauty Products',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../beauty.png',
      text: 'Beauty Products',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../beauty.png',
      text: 'Beauty Products',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../beauty.png',
      text: 'Beauty Products',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../beauty.png',
      text: 'Beauty Products',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../beauty.png',
      text: 'Beauty Products',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
  ]

  const Electronics = [
    {
      url: '../shop1-2.png',
      text: 'Flash Drive',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop1-2.png',
      text: 'Flash Drive',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop1-2.png',
      text: 'Flash Drive',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop1-2.png',
      text: 'Flash Drive',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop1-2.png',
      text: 'Flash Drive',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop1-2.png',
      text: 'Flash Drive',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop1-2.png',
      text: 'Flash Drive',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
  ]

  const Shoes = [
    {
      url: '../shop2-2.png',
      text: 'Shoes',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop2-2.png',
      text: 'Shoes',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop2-2.png',
      text: 'Shoes',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop2-2.png',
      text: 'Shoes',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop2-2.png',
      text: 'Shoes',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop2-2.png',
      text: 'Shoes',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop2-2.png',
      text: 'Shoes',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
  ]

  const TV = [
    {
      url: '../shop3-2.png',
      text: 'TV',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop3-2.png',
      text: 'TV',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop3-2.png',
      text: 'TV',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop3-2.png',
      text: 'TV',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop3-2.png',
      text: 'TV',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop3-2.png',
      text: 'TV',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop3-2.png',
      text: 'TV',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
  ]

  const HomeAppliance = [
    {
      url: '../shop4-2.png',
      text: 'HomeAppliance',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop4-2.png',
      text: 'HomeAppliance',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop4-2.png',
      text: 'HomeAppliance',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop4-2.png',
      text: 'HomeAppliance',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop4-2.png',
      text: 'HomeAppliance',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop4-2.png',
      text: 'HomeAppliance',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../shop4-2.png',
      text: 'HomeAppliance',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
  ]

  return (
    <div>
      <div>

        <Space size="large" direction="vertical">
          <ProductsNavbar />
          <DiscountPass />
        </Space>


        <div style={{ display: 'flex', position: 'relative' }}>
          <div className='shop3chil3'>
            <img src='../shop3-1.png' className='shop3chil3' />
            <h1 className='shop3chil1'>Shop With Us</h1>

          </div>

        </div>


        <div style={{ marginLeft: '30px', marginRight: '60px', backgroundColor: '#E5E5E5' }}>
          <div style={{ backgroundColor: 'white' }}>
            <div className='shop3chil4'>
              <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Beauty</h1>
              <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
            </div>
            <div className='shop3chil5'>
              {
                Beauty.map(beauty => (
                  <div className='shop3chil6'>
                    <div style={{ position: 'relative' }}>
                      <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                      <img src={beauty.url}></img>
                    </div>

                    <p>{beauty.text}</p>
                    <p>{beauty.sub1}</p>
                    <p>{beauty.sub2}</p>
                  </div>
                ))
              }
            </div></div>

          <div style={{ backgroundColor: 'white' }}>
            <div className='shop3chil4'>
              <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Electronics</h1>
              <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
            </div>
            <div className='shop3chil5'>
              {
                Electronics.map(electronics => (
                  <div className='shop3chil6'>
                    <div style={{ position: 'relative' }}>
                      <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                      <img src={electronics.url}></img>
                    </div>

                    <p>{electronics.text}</p>
                    <p>{electronics.sub1}</p>
                    <p>{electronics.sub2}</p>
                  </div>
                ))
              }
            </div></div>

          <div style={{ backgroundColor: 'white' }}>
            <div className='shop3chil4'>
              <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Shoes</h1>
              <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
            </div>
            <div className='shop3chil5'>
              {
                Shoes.map(shoes => (
                  <div className='shop3chil6'>
                    <div style={{ position: 'relative' }}>
                      <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                      <img src={shoes.url}></img>
                    </div>

                    <p>{shoes.text}</p>
                    <p>{shoes.sub1}</p>
                    <p>{shoes.sub2}</p>
                  </div>
                ))
              }
            </div></div>

          <div style={{ backgroundColor: 'white' }}>
            <div className='shop3chil4'>
              <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>TV</h1>
              <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
            </div>
            <div className='shop3chil5'>
              {
                TV.map(tv => (
                  <div className='shop3chil6'>
                    <div style={{ position: 'relative' }}>
                      <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                      <img src={tv.url}></img>
                    </div>

                    <p>{tv.text}</p>
                    <p>{tv.sub1}</p>
                    <p>{tv.sub2}</p>
                  </div>
                ))
              }
            </div></div>

          <div style={{ backgroundColor: 'white' }}>
            <div className='shop3chil4'>
              <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Home Appliance</h1>
              <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
            </div>
            <div className='shop3chil5'>
              {
                HomeAppliance.map(homeAppliance => (
                  <div className='shop3chil6'>
                    <div style={{ position: 'relative' }}>
                      <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                      <img src={homeAppliance.url}></img>
                    </div>

                    <p>{homeAppliance.text}</p>
                    <p>{homeAppliance.sub1}</p>
                    <p>{homeAppliance.sub2}</p>
                  </div>
                ))
              }
            </div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShopingViewAll;