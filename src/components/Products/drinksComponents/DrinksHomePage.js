import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { MdArrowForward } from 'react-icons/md';
import { Space } from 'antd'
import Footer from '../../landing-page/reusable/Footer'

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

  const Whisky = [
    {
      url: 'assets/WhiskeyB.png',
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
      <div className='shop3chil2'>
        <p className='drink3Chil3'>Free Delively +10% Off With SafiRun Pass</p>
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
      <div style={{ display:'flex',position:'relative' }}>
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
              <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '100px' }}>Wine</h1>
              <img src='../wine.png' style={{ width: '315px', height: '228px', marginBottom: '8px' }}></img>
            </div>

            <div style={{ position: 'relative' }}>
              <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '100px' }}>Whiskey</h1>
              <img src='../whiskey.png' style={{ width: '315px', height: '228px', marginLeft: '10px' }}></img>
            </div>

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
      
      <div className='drinkChil11' >
        <img src='../Ellipse.png' style={{ marginLeft: '10px' }}></img>
        <img src='../Ellipse.png' style={{ marginLeft: '10px' }}></img>
        <img src='../Ellipse.png' style={{ marginLeft: '10px' }}></img>
        <img src='../Ellipse.png' style={{ marginLeft: '10px' }}></img>
        <img src='../Ellipse.png' style={{ marginLeft: '10px' }}></img>
      </div>
      </div>

      <div className='fooderChil7'>
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
        <div>
          <div className='drinkChil10'>
            <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Top Pics For You</h1>
            <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
          </div>
          <div className='drinkChil5'>
            {
              Whisky.map(whisky => (
                <div className='drinkChil8'>
                  <div style={{ position: 'relative' }}>
                    <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                    <img src={whisky.url}></img>
                  </div>

                  <p>{whisky.text}</p>
                  <p>{whisky.sub1}</p>
                  <p>{whisky.sub2}</p>
                </div>
              ))
            }
          </div></div>

        <div>
          <div className='drinkChil10'>
            <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Sales</h1>
            <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
          </div>
          <div className='drinkChil5'>
            {
              Whisky.map(whisky => (
                <div className='drinkChil8'>
                  <div style={{ position: 'relative' }}>
                    <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                    <img src={whisky.url}></img>
                  </div>

                  <p>{whisky.text}</p>
                  <p>{whisky.sub1}</p>
                  <p>{whisky.sub2}</p>
                </div>
              ))
            }
          </div></div>

        <div>
          <div className='drinkChil10'>
            <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Most Popular</h1>
            <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
          </div>
          <div className='drinkChil5'>
            {
              Whisky.map(whisky => (
                <div className='drinkChil8'>
                  <div style={{ position: 'relative' }}>
                    <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                    <img src={whisky.url}></img>
                  </div>

                  <p>{whisky.text}</p>
                  <p>{whisky.sub1}</p>
                  <p>{whisky.sub2}</p>
                </div>
              ))
            }
          </div></div>
      </div>

      <div className='drinkChil6'>

        <div style={{ position: 'relative' }}>
          <h1 style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '100px', fontWeight: 'bold' }}>Wine</h1>
          <img src='../dri1.png'></img>
        </div>

        <div style={{ position: 'relative' }}>
          <h1 style={{ color: 'white', position: 'absolute', marginLeft: '30px', marginTop: '80px', fontWeight: 'bold' }}>Whiskey & Schoch</h1>
          <img src='../dir2.png'></img>
        </div>

        <div style={{ position: 'relative' }}>
          <h1 style={{ color: 'white', position: 'absolute', marginLeft: '60px', marginTop: '80px', fontWeight: 'bold' }}>Shampagne & Sparkling Wine</h1>
          <img src='../dri3.png'></img>
        </div>

        <div style={{ position: 'relative' }}>
          <h1 style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '100px', fontWeight: 'bold' }}>Tequila</h1>
          <img src='../dir4.png'></img>
        </div>

      </div>

      <div className='drinkChil7'>

        <div style={{ position: 'relative' }}>
          <h1 style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '100px', fontWeight: 'bold' }}>Beer</h1>
          <img src='../dir5.png'></img>
        </div>

        <div style={{ position: 'relative' }}>
          <h1 style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '100px', fontWeight: 'bold' }}>Snacks</h1>
          <img src='../dir6.png'></img>
        </div>

        <div style={{ position: 'relative' }}>
          <h1 style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '80px', fontWeight: 'bold' }}>Mixers,Water & Sodase</h1>
          <img src='../dir7.png'></img>
        </div>

        <div style={{ position: 'relative' }}>
          <h1 style={{ color: 'white', position: 'absolute', marginLeft: '100px', marginTop: '80px', fontWeight: 'bold' }}>Glassware & accessories</h1>
          <img src='../dir8.png'></img>
        </div>

      </div>
      <Footer />
    </div>
  );
}
export default DrinksHomepage;

