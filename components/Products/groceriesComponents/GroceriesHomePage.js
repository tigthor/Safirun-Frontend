import React, { Component } from 'react';
// import { MenuOutlined } from '@ant-design/icons'
import { Space, Card, Row, Col, Radio } from 'antd'
import { MdArrowForward } from 'react-icons/md';
import Layout from 'antd/lib/layout/layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Footer from '../../landing-page/reusable/Footer'


const GroceriesHomePage = () => {
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


  const TopGroceries = [
    {
      url: '../grocTop1.png',
      text: 'Mixed',
      sub1: 'For Special One',
      sub2: '2500 RWF/Pc'
    },
    {
      url: '../grocTop2.png',
      text: 'Chicken legs',
      sub1: 'For Special One',
      sub2: '6000 RWF'
    },
    {
      url: '../grocTop3.png',
      text: 'Banana',
      sub1: 'For Special One',
      sub2: '5000 RWF/Kg'
    },
    {
      url: '../grocTop4.png',
      text: 'Spice',
      sub1: 'For Special One',
      sub2: '5000 RWF/Kg'
    },
    {
      url: '../grocTop5.png',
      text: 'Tomato',
      sub1: 'For Special One',
      sub2: '5000 RWF/Kg'
    },
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

  const MostPopular = [
    {
      url: '../grocPop1.png',
      text: 'Rice Bags',
      sub1: 'For Special One',
      sub2: '10000 RWF/bag'
    },
    {
      url: '../grocPop2.png',
      text: 'Cane Sugar',
      sub1: 'For Special One',
      sub2: '20000 RWF/bag'
    },
    {
      url: '../grocPop3.png',
      text: 'Sunflower oil',
      sub1: 'For Special One',
      sub2: '3000 RWF/5l'
    },
    {
      url: '../grocPop4.png',
      text: 'Ceres Juice',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
    {
      url: '../grocPop5.png',
      text: 'Inyange milk',
      sub1: 'For Special One',
      sub2: '5000 RWF'
    },
  ]

  const SuperMarkets = [


    {
      url: '../grocMark1.png',
      text: 'Ndori Super Market(Kigali,Rwanda)',
    },
    {
      url: '../grocMark2.png',
      text: 'Simba Super Market(Kigali,Rwanda)',
    },
    {
      url: '../grocMark3.png',
      text: 'Sawa City',
    },

  ]

  const SuperMarkets2 = [
    {
      url: '../grocMark4.png',
      text: 'Woodland Super Market',
    },

  ]
  const FreshProducts = [
    {
      url: '../grocMark8.png',
      text: 'Eat Green(Kigali,Rwanda)',
    },
    {
      url: '../grocMark7.png',
      text: 'Go Green(Kigali,Rwanda)',
    },
    {
      url: '../grocMark6.png',
      text: 'Butchery oil(Kigali,Rwanda)',
    },
  ]

  const FreshProducts2 = [
    {
      url: '../grocMark5.png',
      text: 'Kigali Farms(Kigali,Rwanda)',
    },
  ]


  const { Sider } = Layout;
  return (
    <div class='foodPar'>

      <div className='shop3chil2'>
        <p className='foodchil2'>Free Delively +10% Off With SafiRun Pass</p>
      </div>

      <div className='foodchil3'>
        {
          Data.map(data => (

            
            <div className='foodchil3'>
              <img class='foodchil3pic' src={data.url}></img>
              <p foodchil3text>{data.text}</p>
            </div>
          ))
        }
      </div>
      <div className='groceriesChil1'>
        <div><img src='../groc1.png' style={{ width: '683px', height: '400px' }}></img></div>
        <div className='groceriesChil2'>
          <div className='groceriesChil10'>
            <h1 style={{ color: 'white',fontWeight:'bold',lineHeight:'80px' }}>Need Groceries</h1>
            <p style={{ color: 'white',lineHeight:'50px' }}>Get your favorite groceries <br></br> delivered to your doorstep</p>
          </div>
          <p style={{ border: '2px solid white', borderRadius: '20px', width: '146px',height:'39px', marginLeft: '250px', color: 'white' }}>ORDER NOW</p>
        </div>
      </div>

      <div style={{ marginLeft: '20px', marginRight: '20px' }}>
        <div className='groceriesChil3'>
          <div className='drinkChil10'>
            <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Top Pics For You</h1>
            <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
          </div>
          <div className='groceriesChil6'>
            {
              TopGroceries.map(topGroceries => (
                <div className='drinkChil8'>
                  <div style={{ position: 'relative' }}>
                    <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '200px' }}></img>
                    <img src={topGroceries.url}></img>
                  </div>

                  <p>{topGroceries.text}</p>
                  <p>{topGroceries.sub1}</p>
                  <p>{topGroceries.sub2}</p>
                </div>
              ))
            }
          </div></div>

        <div className='groceriesChil3'>
          <div className='drinkChil10'>
            <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Featured Products</h1>
            <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
          </div>
          <div className='groceriesChil6'>
            {
              FeatureProduct.map(featureProduct => (
                <div className='drinkChil8'>
                  <div style={{ position: 'relative' }}>
                    <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '200px' }}></img>
                    <img src={featureProduct.url}></img>
                  </div>

                  <p>{featureProduct.text}</p>
                  <p>{featureProduct.sub1}</p>
                  <p>{featureProduct.sub2}</p>
                </div>
              ))
            }
          </div></div>

        <div className='groceriesChil3'>
          <div className='drinkChil10'>
            <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Most Popular</h1>
            <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
          </div>
          <div className='groceriesChil6'>
            {
              MostPopular.map(mostPopular => (
                <div className='drinkChil8'>
                  <div style={{ position: 'relative' }}>
                    <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '200px' }}></img>
                    <img src={mostPopular.url}></img>
                  </div>

                  <p>{mostPopular.text}</p>
                  <p>{mostPopular.sub1}</p>
                  <p>{mostPopular.sub2}</p>
                </div>
              ))
            }
          </div></div>


        <h1 style={{ color: 'black', marginLeft: '30px' }}>Choose Store</h1>

        <div className='groceriesChil3'>
          <div className='groceriesChil4'>
            <h1 style={{ fontSize: '26.9px', lineHeight: '40px', color: 'white', fontWeight: 'bold', backgroundColor: '#E36363', paddingLeft: '50px' }}>SUPERMARKETS</h1>
          </div>
          <div className='groceriesChil7'>
            {
              SuperMarkets.map(superMarkets => (
                <div className='drinkChil8'>
                  <div style={{ position: 'relative' }}>
                    <img src={superMarkets.url}></img>
                  </div>

                  <p className='groceriesChil9'>{superMarkets.text}</p>

                </div>
              ))
            }
          </div>
          <div className='groceriesChil7'>
            {
              SuperMarkets2.map(superMarkets2 => (
                <div className='drinkChil8'>
                  <div style={{ position: 'relative' }}>
                    <img src={superMarkets2.url}></img>
                  </div>

                  <p className='groceriesChil9'>{superMarkets2.text}</p>

                </div>
              ))
            }
          </div>

        </div>

        <div className='groceriesChil8'>
          <div className='groceriesChil4'>
            <h1 style={{ fontSize: '26.9px', lineHeight: '40px', color: 'white', fontWeight: 'bold', backgroundColor: '#E36363', paddingLeft: '50px' }}>FLESH PRODUCE & MEAT</h1>
          </div>
          <div className='groceriesChil7'>
            {
              FreshProducts.map(freshProducts => (
                <div className='drinkChil8'>
                  <div style={{ position: 'relative' }}>
                    <img src={freshProducts.url}></img>
                  </div>

                  <p className='groceriesChil9'>{freshProducts.text}</p>

                </div>
              ))
            }
          </div>

          <div className='groceriesChil7'>
            {
              FreshProducts2.map(freshProducts2 => (
                <div className='drinkChil8'>
                  <div style={{ position: 'relative' }}>
                    <img src={freshProducts2.url}></img>
                  </div>

                  <p className='groceriesChil9'>{freshProducts2.text}</p>

                </div>
              ))
            }
          </div>

        </div>




      </div>




      <div style={{ display: 'flex', position: 'relative' }}>

        <div style={{ position: 'absolute' }}><div class="arrow-right"> <p style={{ marginLeft: '-65px', color: 'white', marginBottom: '30px' }}>New</p></div></div>
      </div>
      <br></br>
      <footer>
        <Footer /></footer>


    </div>
  );
}

export default GroceriesHomePage;