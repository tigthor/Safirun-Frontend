import React, { Component } from 'react';
// import { MenuOutlined } from '@ant-design/icons'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { MdArrowForward } from 'react-icons/md';
import Layout from 'antd/lib/layout/layout';
import { Space, Card, Row, Col, Radio } from 'antd';
import ProductsNavbar from '../reusable/ProductsNavbar';
import DiscountPass from '../reusable/DiscountPass';
import Footer from '../../landing-page/reusable/Footer';


const FoodSelectRestaurant = () => {
  const pageStyles = [
    {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '1000px',
    }
  ]
  const Text = [
    {
      text1: 'Most popular',
    },
    {
      text1: 'Entrees',
    },
    {
      text1: 'Sides',
    },
    {
      text1: 'Beverages',
    },
    {
      text1: 'BreakFast',
    },
    {
      text1: 'Chicken',
    },
    {
      text1: 'Beef',
    },
    {
      text1: 'SeaFood',
    },
    {
      text1: 'MilkShake',
    },
    {
      text1: 'Fries',
    },
    {
      text1: 'Liver',
    },
    {
      text1: 'Cakes',
    },
    {
      text1: 'Juices',
    },
    {
      text1: 'Grills',
    },
    {
      text1: 'Family',
    },
  ]



  const SpecialOffer = [
    {
      url: '../assets/Special1.png',
      title: 'Sandwich',
      sub1: '$$-Fast food-Burgers-Coffee',
      sub2: '20-30 min',
      sub3: ' 4.2(200+)'
    },
    {
      url: '../assets/Special2.png',
      title: 'buritto',
      sub1: '$$-Fast Food-dine In-Mexican',
      sub2: '20-30 min',
      sub3: ' 4.2(200+)'
    },
    {
      url: '../assets/special3.png',
      title: 'burger',
      sub1: '$$-Fast food-Burgers-Coffee',
      sub2: '20-30 min',
      sub3: ' 4.2(200+)'
    },
    {
      url: '../assets/spacial4.png',
      title: 'Chicken Salad',
      sub1: '$$-Fast food-Delivery-hel',
      sub2: '20-30 min',
      sub3: ' 4.2(200+)'
    }
  ]


  const Hurry = [
    {
      url: '../assets/hurry1.png',
      title: 'Tortilla',
      sub1: '$$-Fast food-Burgers-Coffee',
      sub2: '20-30 min',
      sub3: ' 4.2(200+)'
    },
    {
      url: '../assets/hurry2.png',
      title: 'Tacos',
      sub1: '$$-Fast food-Burgers-Coffee',
      sub2: '20-30 min',
      sub3: ' 4.2(200+)'
    },
    {
      url: '../assets/hurry3.png',
      title: 'Chicken buritto',
      sub1: '$$-Fast Food-dine In-Mexican',
      sub2: '20-30 min',
      sub3: ' 4.2(200+)'
    },
    {
      url: '../assets/hurry4.png',
      title: 'Quesadilla',
      sub1: '$$-Fast food-Delivery-hel',
      sub2: '20-30 min',
      sub3: ' 4.2(200+)'
    }
  ]

  const Recomended = [
    {
      url: '../assets/recomended1.png',
      title: 'Pizza Peperoni',
      sub1: '$$-Fast food-Burgers-Coffee',
      sub2: '20-30 min',
      sub3: ' 4.2(200+)'
    },
    {
      url: '../assets/recomended2.png',
      title: 'Tomatoes Pasta',
      sub1: '$$-Fast food-Burgers-Coffee',
      sub2: '20-30 min',
      sub3: ' 4.2(200+)'
    },
    {
      url: '../assets/recomended3.png',
      title: 'Cheese Makaronni',
      sub1: '$$-Fast Food-dine In-Mexican',
      sub2: '20-30 min',
      sub3: ' 4.2(200+)'
    },
    {
      url: '../assets/recomended4.png',
      title: 'Spaghetti',
      sub1: '$$-Fast food-Delivery-hel',
      sub2: '20-30 min',
      sub3: ' 4.2(200+)'
    }
  ]

  const { Sider } = Layout;

  return (
    <div>
      <Space size="large" direction="vertical">
                <ProductsNavbar />
                <DiscountPass />

                </Space>
      <div className='food2chil7'>
        <img src="../foodSel1.png" className='food2chil8' />
        <p className='food2chil4'>Camellia Restaurant</p>
        <img src="../food2-1.png" className='food2chil5'/>
        <img src="../food2-2.png" className='food2chil6'/>
      </div>

      <div className='food2chil3'>
        {
          Text.map(text => (
            <p className='food2chil9'>{text.text1}</p>
          ))
        }
      </div>

      <div className='food2chil2'>

        <div className='food2chil10'>

          <p style={{ fontWeight: 'bold' }}>Shopping-Delively</p>
          <div className='food2chil11'>
            <p style={{ marginLeft: '10px' }}>1234 KG24 Nyarugenge District,Kigali,Rwanda</p>
            <img src='../Location1.png' style={{ position: 'absolute', width: '20px', height: '20px', marginLeft: '-10px' }}></img>
          </div>
        </div>

        <div className='food2chil12'>
          <div className='food2chil13'>
            <p style={{}}><b>Sunday</b>:11AM-9PM <b>Monday-Friday</b>:11AM-9PM</p>
            <img src='../Location2.png' style={{ position: 'absolute', width: '20px', height: '20px', marginLeft: '-25px' }}></img>
          </div>
          <p style={{}}><b>Suturday</b>:11AM-9PM</p>
        </div>

      </div>

      <div className='food2chil14'>
        <Layout className='food2chil15'>
          <div>
            <Space size='medium' direction='vertical'>
              <Col>
                <Space size='middle' direction='vertical'>
                  <Row style={{ fontWeight: 'normal' }}><Radio>Delivery</Radio></Row>
                  <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal' }}>PickUp</Radio></Row>
                  <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal' }}>Dine In</Radio></Row>
                </Space>
              </Col>
              <hr style={{ width: '195px', marginLeft: '5px' }}></hr>
              <Col> Sort <img src='../assets/DownArrow.png' style={{ marginLeft: '150px' }}></img>
                <Space size='middle' direction='vertical'>
                  <Row><Radio>Distance</Radio></Row>
                  <Row><Radio>Restaurant</Radio></Row>
                  <Row><Radio>Time Line</Radio></Row></Space>
              </Col>
              <hr style={{ width: '195px', marginLeft: '5px' }}></hr>
              <Col style={{ display: 'flex', position: 'relative' }}> <p style={{ marginTop: '-0px' }}>Sort 4.5 <img src='../assets/star.png' /> and above </p><img src='../assets/DownArrow.png' style={{ marginLeft: '180px', position: 'absolute' }}></img></Col>
              <Col style={{ display: 'flex', position: 'relative' }}> <p style={{ marginTop: '-0px' }}>Price Range</p><img src='../assets/DownArrow.png' style={{ marginLeft: '180px', position: 'absolute' }}></img></Col>

            </Space>

          </div>
        </Layout>
        <Layout className='food2chil1'>


          <div className='food2chil16'>

            {
              SpecialOffer.map(special => (
                <Card className='food2chil17'>
                  <img src={special.url} style={{ width: '242px', height: '150px', marginBottom: '-8px' }}></img>
                  <div style={{ height: '94px', width: '242px', boxShadow: '0px 0px 11px', display: 'flex', flexDirection: 'column' }}>
                    <p style={{ lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{special.title}</p>
                    <p style={{ fontSize: '14px', color: '#787878', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{special.sub1}</p>
                    <div style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>
                      <img src='../assets/star.png' style={{ position: 'absolute', marginLeft: '100px', marginTop: '8px' }}></img>
                      <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px' }}>{special.sub2}</p>
                      <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', position: 'relative', marginLeft: '120px', marginTop: '-30px' }}>{special.sub3}</p>
                    </div>
                  </div>

                </Card>
              ))
            }
          </div>



          <div className='food2chil16'>

            {
              Hurry.map(hurry => (
                <Card className='food2chil17'>
                  <img src={hurry.url} style={{ width: '242px', height: '150px', marginBottom: '-8px' }}></img>
                  <div style={{ height: '94px', width: '242px', boxShadow: '0px 0px 11px', display: 'flex', flexDirection: 'column' }}>
                    <p style={{ lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{hurry.title}</p>
                    <p style={{ fontSize: '14px', color: '#787878', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{hurry.sub1}</p>
                    <div style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>
                      <img src='../assets/star.png' style={{ position: 'absolute', marginLeft: '100px', marginTop: '8px' }}></img>
                      <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px' }}>{hurry.sub2}</p>
                      <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', position: 'relative', marginLeft: '120px', marginTop: '-30px' }}>{hurry.sub3}</p>
                    </div></div>

                </Card>
              ))
            }
          </div>


          <div className='food2chil16'>

            {
              Recomended.map(recomended => (
                <Card className='food2chil17'>
                  <img src={recomended.url} style={{ width: '242px', height: '150px', marginBottom: '-8px' }}></img>
                  <div style={{ height: '94px', width: '242px', boxShadow: '0px 0px 11px', display: 'flex', flexDirection: 'column' }}>
                    <p style={{ lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{recomended.title}</p>
                    <p style={{ fontSize: '14px', color: '#787878', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{recomended.sub1}</p>
                    <div style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>
                      <img src='../assets/star.png' style={{ position: 'absolute', marginLeft: '100px', marginTop: '8px' }}></img>
                      <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px' }}>{recomended.sub2}</p>
                      <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', position: 'relative', marginLeft: '120px', marginTop: '-30px' }}>{recomended.sub3}</p>
                    </div></div>

                </Card>
              ))
            }
          </div>


        </Layout>
      
      </div>
      <Footer />
    </div>
  )
}

export default FoodSelectRestaurant;

