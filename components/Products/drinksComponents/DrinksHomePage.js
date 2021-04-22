import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import { Space } from 'antd';
import Footer from '../../landing-page/reusable/Footer';
import ProductsNavbar from '../reusable/ProductsNavbar';
import DefaultCatIcons from '../reusable/DefaultCatIcons';
import DiscountPass from '../reusable/DiscountPass';

import FloraCategories from '../reusable/FloraCategories';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export const DrinksHomepage = () => {
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

  const Values = [

    {
      url: '../beer6.png',
      text: 'Beer',
    },
    {
      url: '../beer7.png',
      text: 'Whiskey',
    },
    {
      url: '../beer8.png',
      text: 'Cocktail',
    },
    {
      url: '../beer9.png',
      text: 'Red Wine',
    },

    {
      url: '../beer10.png',
      text: 'Vodka',
    },
    {
      url: '../beer11.png',
      text: 'Teckila',
    },
    {
      url: '../beer12.png',
      text: 'Rum',
    },
    {
      url: '../beer13.png',
      text: 'Mixers',
    },
    {
      url: '../beer14.png',
      text: 'Coganac',
    },
  ]

  const WhiskyData = [
    {
      mainPic: '../WhiskeyB.png',
      mainTitle: 'Blue Whisky',
      sub1: 'Handmade Whisky',
      infoTime: "50ml",
      mainDesc: '5000'
      
    },
    {
      mainPic: '../WhiskeyB.png',
      mainTitle: 'Blue Whisky',
      sub1: 'Handmade Whisky',
      infoTime: "50ml",
      mainDesc: '5000'
    },
    {
      mainPic: '../WhiskeyB.png',
      mainTitle: 'Blue Whisky',
      sub1: 'Handmade Whisky',
      infoTime: "50ml",
      mainDesc: '5000'
    },
    {
      mainPic: '../WhiskeyB.png',
      mainTitle: 'Blue Whisky',
      sub1: 'Handmade Whisky',
      infoTime: "50ml",
      mainDesc: '5000'
    },
    {
      mainPic: '../WhiskeyB.png',
      mainTitle: 'Blue Whisky',
      sub1: 'Handmade Whisky',
      infoTime: "50ml",
      mainDesc: '5000'
    }
  ]
  const Whisky = [
    {
      url: '../WhiskeyB.png',
      text: 'Blue Whisky',
      sub1: 'Handmade Whisky',
      sub2: '50ml | 5000 RWF'
    },
    {
      url: '../WhiskeyB.png',
      text: 'Blue Whisky',
      sub1: 'Handmade Whisky',
      sub2: '50ml | 5000 RWF'
    },
    {
      url: '../WhiskeyB.png',
      text: 'Blue Whisky',
      sub1: 'Handmade Whisky',
      sub2: '50ml | 5000 RWF'
    },
    {
      url: '../WhiskeyB.png',
      text: 'Blue Whisky',
      sub1: 'Handmade Whisky',
      sub2: '50ml | 5000 RWF'
    },
    {
      url: '../WhiskeyB.png',
      text: 'Blue Whisky',
      sub1: 'Handmade Whisky',
      sub2: '50ml | 5000 RWF'
    },
    {
      url: '../WhiskeyB.png',
      text: 'Blue Whisky',
      sub1: 'Handmade Whisky',
      sub2: '50ml | 5000 RWF'
    },
    {
      url: '../WhiskeyB.png',
      text: 'Blue Whisky',
      sub1: 'Handmade Whisky',
      sub2: '50ml | 5000 RWF'
    },
  ]
  return (
    <div className="Products_drinks">
      <Space size="large" direction="vertical">
        <ProductsNavbar />
        <DiscountPass />
        <DefaultCatIcons />

        <div>
        <Swiper
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{
        delay: 12500,
        disableOnInteraction: true
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className='drinkChil4'
    >
      <SwiperSlide className="Products_AdSection">
          <div className='drinkChil4'>
            <div className='drinkChil2'>
              <div class='drinkChil1'>
                <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '45px', marginLeft: '30px' }}>Bottle of <br></br>perfection </h1>
                <p style={{ color: 'white', fontWeight: 'bold', marginLeft: '-40px' }}>Drink Responsility</p>
                <p style={{ border: '2px solid white', borderRadius: '20px', width: '150px', marginLeft: '60px', color: 'white', fontWeight: 'bold' }}>order Now</p>
              </div>
              <img src='../wines.png' style={{ marginLeft: '300px', height: '468px', width: '350px' }} />

            </div>
            <div className='drinkChil3'>

              <div style={{ position: 'relative' }}>
                <a href='categories' style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '100px', textDecoration: 'none' }}>Wine</a>
                <img src='../wine.png' style={{ width: '315px', height: '228px', marginBottom: '8px' }}></img>
              </div>

              <a  href='discription' style={{ position: 'relative' }}>
                <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '100px' }}>Whiskey</h1>
                <img src='../whiskey.png' style={{ width: '315px', height: '228px', marginLeft: '10px' }}></img>
              </a>

              <div style={{ position: 'relative' }}>
                <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '100px' }}>Vodka</h1>
                <img src='../vodka.png' style={{ width: '315px', height: '228px' }}></img>
              </div>

              <div style={{ position: 'relative' }}>
                <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '100px' }}>Beer</h1>
                <img src='../beer.png' style={{ width: '315px', height: '228px', marginLeft: '10px' }}></img>
              </div>

            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='drinkChil4'>
            <div className='drinkChil2'>
              <div class='drinkChil1'>
                <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '45px', marginLeft: '30px' }}>Bottle of <br></br>perfection </h1>
                <p style={{ color: 'white', fontWeight: 'bold', marginLeft: '-40px' }}>Drink Responsility</p>
                <p style={{ border: '2px solid white', borderRadius: '20px', width: '150px', marginLeft: '60px', color: 'white', fontWeight: 'bold' }}>order Now</p>
              </div>
              <img src='../wines.png' style={{ marginLeft: '300px', height: '468px', width: '350px' }} />

            </div>
            <div className='drinkChil3'>

              <div style={{ position: 'relative' }}>
                <a href='categories' style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '100px', textDecoration: 'none' }}>Wine</a>
                <img src='../wine.png' style={{ width: '315px', height: '228px', marginBottom: '8px' }}></img>
              </div>

              <a  href='discription' style={{ position: 'relative' }}>
                <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '100px' }}>Whiskey</h1>
                <img src='../whiskey.png' style={{ width: '315px', height: '228px', marginLeft: '10px' }}></img>
              </a>

              <div style={{ position: 'relative' }}>
                <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '100px' }}>Vodka</h1>
                <img src='../vodka.png' style={{ width: '315px', height: '228px' }}></img>
              </div>

              <div style={{ position: 'relative' }}>
                <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '100px' }}>Beer</h1>
                <img src='../beer.png' style={{ width: '315px', height: '228px', marginLeft: '10px' }}></img>
              </div>

            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
          <div className='drinkChil4'>
            <div className='drinkChil2'>
              <div class='drinkChil1'>
                <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '45px', marginLeft: '30px' }}>Bottle of <br></br>perfection </h1>
                <p style={{ color: 'white', fontWeight: 'bold', marginLeft: '-40px' }}>Drink Responsility</p>
                <p style={{ border: '2px solid white', borderRadius: '20px', width: '150px', marginLeft: '60px', color: 'white', fontWeight: 'bold' }}>order Now</p>
              </div>
              <img src='../wines.png' style={{ marginLeft: '300px', height: '400px', width: '350px' }} />

            </div>
            <div className='drinkChil3'>

              <div style={{ position: 'relative' }}>
                <a href='categories' style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '100px', textDecoration: 'none' }}>Wine</a>
                <img src='../wine.png' style={{ width: '315px', height: '228px', marginBottom: '8px' }}></img>
              </div>

              <a  href='discription' style={{ position: 'relative' }}>
                <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '100px' }}>Whiskey</h1>
                <img src='../whiskey.png' style={{ width: '315px', height: '228px', marginLeft: '10px' }}></img>
              </a>

              <div style={{ position: 'relative' }}>
                <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '100px' }}>Vodka</h1>
                <img src='../vodka.png' style={{ width: '315px', height: '228px' }}></img>
              </div>

              <div style={{ position: 'relative' }}>
                <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '100px' }}>Beer</h1>
                <img src='../beer.png' style={{ width: '315px', height: '228px', marginLeft: '10px' }}></img>
              </div>

            </div>
          </div>
          </SwiperSlide>
          </Swiper>

          <div className='drinkChil11' >
            <img src='../Ellipse.png' style={{ marginLeft: '10px' }}></img>
            <img src='../Ellipse.png' style={{ marginLeft: '10px' }}></img>
            <img src='../Ellipse.png' style={{ marginLeft: '10px' }}></img>
            <img src='../Ellipse.png' style={{ marginLeft: '10px' }}></img>
            <img src='../Ellipse.png' style={{ marginLeft: '10px' }}></img>
          </div>
        </div>

        <div className='drinkChil12'>
          {
            Values.map(values => (
              <div>
                <img src={values.url}></img>
                <p>{values.text}</p>
              </div>
            ))
          }
        </div>

        <div> <hr className='drinkChiHr'></hr></div>
        <div style={{ marginLeft: '20px', marginRight: '20px' }}>
        <Space size="large" direction="vertical">
            <FloraCategories title='Top Picks For you' FloristData={WhiskyData}/>
            
            
          <FloraCategories title='Sales' FloristData={WhiskyData}/>
           
          <FloraCategories title='Most Popular' FloristData={WhiskyData}/>

            </Space>
        </div>
        <div className='drinkChil13'>
          <a href='categories' style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold', textDecoration: 'none' }}>Shoose a Categories</a>
          <a href='viewAll' style={{ fontWeight: 'bold', marginRight: '40px',textDecoration: 'none' }}>View All</a>
        </div>

        <div className='drinkChil6'>

          <div style={{ position: 'relative' }}>
            <a href='categories' style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '100px', fontWeight: 'bold', textDecoration: 'none', fontSize: '45px', textAlign: 'center', marginTop: '60px' }}>Wine</a>
            <img src='../dri1.png'></img>
          </div>

          <div style={{ position: 'relative' }}>
            <h1 style={{ color: 'white', position: 'absolute', marginLeft: '30px', marginTop: '100px', fontWeight: 'bold', textDecoration: 'none', fontSize: '30px', textAlign: 'center', marginTop: '60px' }}>Whiskey & Schoch</h1>
            <img src='../dir2.png'></img>
          </div>

          <div style={{ position: 'relative' }}>
            <h1 style={{ color: 'white', position: 'absolute', marginLeft: '30px', marginTop: '100px', fontWeight: 'bold', textDecoration: 'none', fontSize: '30px', textAlign: 'center', marginTop: '60px' }}>Shampagne & Sparkling Wine</h1>
            <img src='../dri3.png'></img>
          </div>

          <div style={{ position: 'relative' }}>
            <h1 style={{ color: 'white', position: 'absolute', marginLeft: '100px', marginTop: '100px', fontWeight: 'bold', textDecoration: 'none', fontSize: '45px', textAlign: 'center', marginTop: '60px' }}>Tequila</h1>
            <img src='../dir4.png'></img>
          </div>

        </div>

        <div className='drinkChil7'>

          <div style={{ position: 'relative' }}>
            <h1 style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '100px', fontWeight: 'bold', textDecoration: 'none', fontSize: '45px', textAlign: 'center', marginTop: '60px' }}>Beer</h1>
            <img src='../dir5.png'></img>
          </div>

          <div style={{ position: 'relative' }}>
            <h1 style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '100px', fontWeight: 'bold', textDecoration: 'none', fontSize: '45px', textAlign: 'center', marginTop: '60px' }}>Snacks</h1>
            <img src='../dir6.png'></img>
          </div>

          <div style={{ position: 'relative' }}>
            <h1 style={{ color: 'white', position: 'absolute', marginLeft: '30px', marginTop: '100px', fontWeight: 'bold', textDecoration: 'none', fontSize: '30px', textAlign: 'center', marginTop: '60px' }}>Mixers,Water & Sodase</h1>
            <img src='../dir7.png'></img>
          </div>

          <div style={{ position: 'relative' }}>
            <h1 style={{ color: 'white', position: 'absolute', marginLeft: '30px', marginTop: '100px', fontWeight: 'bold', textDecoration: 'none', fontSize: '30px', textAlign: 'center', marginTop: '60px' }}>Glassware & accessories</h1>
            <img src='../dir8.png'></img>
          </div>

        </div>
        <Footer />
      </Space>
    </div>
  );
}
export default DrinksHomepage;

