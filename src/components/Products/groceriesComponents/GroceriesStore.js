import React, { Component } from 'react';
// import { MenuOutlined } from '@ant-design/icons'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { MdArrowForward } from 'react-icons/md';
import Layout from 'antd/lib/layout/layout';
import { Space, Card, Row, Col, Radio } from 'antd';
import ProductsNavbar from '../reusable/ProductsNavbar';
import DiscountPass from '../reusable/DiscountPass';
import Footer from '../../landing-page/reusable/Footer'



const FoodSelectRestaurant = () => {
  
  const Text = [
    {
      text1: 'Vegetables',
    },
    {
      text1: 'Chips',
    },
    {
      text1: 'Yoguhrt',
    },
    {
      text1: 'Fresh Fruits',
    },
    {
      text1: 'Dry Goods',
    },
    {
      text1: 'Bulk',
    },
    {
      text1: 'Mayonnaise',
    },
    {
        text1:'Breakfast',
    },
  ]

  const Text2 = [
    {
        text1:'See More'  
      }
  ]
  const FeatureProduct = [
    {
      url: '../grocFeat1.png',
      text: 'Chips',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../grocFeat2.png',
      text: 'Yoghurt',
      sub1: 'For Special One',
      sub2: '1000 RWF'
    },
    {
      url: '../grocFeat3.png',
      text: 'Ketchup',
      sub1: 'For Special One',
      sub2: '3000 RWF'
    },
    {
      url: '../grocFeat4.png',
      text: 'Hellmanns mayo',
      sub1: 'For Special One',
      sub2: '5000 RWF/Kg'
    },
    {
      url: '../grocFeat5.png',
      text: 'eggs',
      sub1: 'For Special One',
      sub2: '3000 RWF/packs'
    },
  ]

  const Vegetables = [
    {
      url: '../groc2-2.png',
      text: 'Mixed',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../groc2-2.png',
      text: 'Mixed',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../groc2-2.png',
      text: 'Mixed',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../groc2-2.png',
      text: 'Mixed',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
  ]

  
  const { Sider } = Layout;

  return (
    <div style={{backgroundColor:'#E5E5E5'}}>
      <Space size="large" direction="vertical">
                <ProductsNavbar />
                <DiscountPass />
            </Space>
      <div className='groceries2Chil11'>
        <img src="../groc2-1.png" className='groceries2Chil12' />
        <p className='food2chil4'>SIMBA SUPERMARKET</p>
        <img src="../food2-1.png" className='groceries2Chil13'/>
        <img src="../food2-2.png" className='groceries2Chil14'/>
      </div>

      <div className='groceries2Chil7'>
        {
          Text.map(text => (
            <div>
            <p className='groceries2Chil8'>{text.text1}</p>
            </div>
          ))
          
        }
        <p className='groceries2Chil9'>See More</p>
      </div>
     

      <div className='groceries2Chil6'>

        <div className='groceries2Chil15'>

          <p style={{ fontWeight: 'bold' }}>Shopping-Delively</p>
          <div className='groceries2Chil16'>
            <p style={{ marginLeft: '10px' }}>1234 KG24 Nyarugenge District,Kigali,Rwanda</p>
            <img src='../Location1.png' style={{ position: 'absolute', width: '20px', height: '20px', marginLeft: '-10px' }}></img>
          </div>
        </div>

        <div className='groceries2Chil17'>
          <div className='groceries2Chil18'>
            <p style={{}}><b>Sunday</b>:11AM-9PM <b>Monday-Friday</b>:11AM-9PM</p>
            <img src='../Location2.png' style={{ position: 'absolute', width: '20px', height: '20px', marginLeft: '-25px' }}></img>
          </div>
          <p style={{}}><b>Suturday</b>:11AM-9PM</p>
        </div>

      </div>

      <div className='groceries2Chil3'>
      <Layout className='groceries2Chil1'>
                    <div>
                        <Space size='medium' direction='vertical'>
                            <Col style={{ marginLeft: '20px' }}>FILTER BY<br></br><br></br>
                                <Space size='middle' direction='vertical'>
                                    <Col style={{ marginLeft: '25px' }}>Sort</Col>
                                    <Row style={{ fontWeight: 'normal', marginLeft: '30px' }}><Radio>Delivery</Radio></Row>
                                    <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal', marginLeft: '30px' }}>Sales</Radio></Row>
                                    <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal', marginLeft: '30px' }}>Special Offers</Radio></Row>
                                    <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal', marginLeft: '30px' }}>Breakfast</Radio></Row>
                                    <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal', marginLeft: '30px' }}>Dry Goods</Radio></Row>
                                    <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal', marginLeft: '30px' }}>Bulk</Radio></Row>
                                    <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal', marginLeft: '30px' }}>Burkerry</Radio></Row>
                                    <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal', marginLeft: '30px' }}>Meats</Radio></Row>
                                    <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal', marginLeft: '30px' }}>Vegetales</Radio></Row>
                                    <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal', marginLeft: '30px' }}>Fresh Fruits</Radio></Row>

                                </Space>
                            </Col>

                        </Space>

                    </div>
                </Layout>
        <Layout className='groceries2Chil2'>

        <div className='groceries2Chil19'>
          <div className='groceries2Chil5'>
            <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Sales</h1>
            <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
          </div>
          <div className='groceries2Chil20'>
            {
              FeatureProduct.map(featureProduct => (
                <div className='groceries2Chil4'>
                  <div style={{ position: 'relative' }}>
                    <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '130px' }}></img>
                    <img src={featureProduct.url}  style={{width:'150px'}}></img>
                  </div>

                  <p>{featureProduct.text}</p>
                  <p>{featureProduct.sub1}</p>
                  <p>{featureProduct.sub2}</p>
                </div>
              ))
            }
          </div></div>

          <div className='groceries2Chil19'>
          <div className='groceries2Chil5'>
            <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Featured Products</h1>
            <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
          </div>
          <div className='groceries2Chil20'>
            {
              FeatureProduct.map(featureProduct => (
                <div className='groceries2Chil4'>
                  <div style={{ position: 'relative' }}>
                    <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '130px' }}></img>
                    <img src={featureProduct.url}  style={{width:'150px'}}></img>
                  </div>

                  <p>{featureProduct.text}</p>
                  <p>{featureProduct.sub1}</p>
                  <p>{featureProduct.sub2}</p>
                </div>
              ))
            }
          </div></div>
          <h1 style={{ fontSize: '26.9px', lineHeight: '40px', color: 'white', fontWeight: 'bold', backgroundColor: '#E36363', paddingLeft: '50px',marginLeft:'50px' }}>Vegetales</h1>
          
        <div style={{marginTop:'30px'}} >
          <div className='groceries2Chil19'>
         
          <div className='groceries2Chil10'>
            {
              Vegetables.map(vegetables => (
                <div className='groceries2Chil4'>
                  <div style={{ position: 'relative' }}>
                    <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '170px' }}></img>
                    <img src={vegetables.url}  style={{width:'200px',display:'flex',justifyContent:'space-around'}}></img>
                  </div>

                  <p>{vegetables.text}</p>
                  <p>{vegetables.sub1}</p>
                  <p>{vegetables.sub2}</p>
                </div>
              ))
            }
          </div></div>

          <div className='groceries2Chil19'>
         
          <div className='groceries2Chil10'>
            {
              Vegetables.map(vegetables => (
                <div className='groceries2Chil4'>
                  <div style={{ position: 'relative' }}>
                    <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '170px' }}></img>
                    <img src={vegetables.url}  style={{width:'200px'}}></img>
                  </div>

                  <p>{vegetables.text}</p>
                  <p>{vegetables.sub1}</p>
                  <p>{vegetables.sub2}</p>
                </div>
              ))
            }
          </div></div>

          <div className='groceries2Chil19'>
         
          <div className='groceries2Chil10'>
            {
              Vegetables.map(vegetables => (
                <div className='groceries2Chil4'>
                  <div style={{ position: 'relative' }}>
                    <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '170px' }}></img>
                    <img src={vegetables.url}  style={{width:'200px'}}></img>
                  </div>

                  <p>{vegetables.text}</p>
                  <p>{vegetables.sub1}</p>
                  <p>{vegetables.sub2}</p>
                </div>
              ))
            }
          </div></div>

          <div className='groceries2Chil19'>
          
          <div className='groceries2Chil10'>
            {
              Vegetables.map(vegetables => (
                <div className='groceries2Chil4'>
                  <div style={{ position: 'relative' }}>
                    <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '170px' }}></img>
                    <img src={vegetables.url}  style={{width:'200px'}}></img>
                  </div>

                  <p>{vegetables.text}</p>
                  <p>{vegetables.sub1}</p>
                  <p>{vegetables.sub2}</p>
                </div>
              ))
            }
          </div></div>
          </div>
        </Layout>
      </div>
      <Footer />
    </div>
  )
}

export default FoodSelectRestaurant;

