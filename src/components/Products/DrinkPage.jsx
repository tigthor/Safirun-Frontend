import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import '../../App.css';

const Drinks = () => {
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
  return ( 
    <div className="Products_drinks">
        <div className='foodchil3'>
                {
                    Data.map(data => (
                        <div className='foodchil3'>
                            <img className='foodchil3pic' src={data.url}></img>
                            <p foodchil3text>{data.text}</p>
                        </div>
                    ))
                }
            </div>
  
            <div>
            <div className='drinkChil2'>
               <div className='drinkChil1'>
              <p>Bottle of <br></br>perfection </p>
              <p>Drink Responsiility</p>
              <p style={{ border: '2px solid white', borderRadius: '20px', width: '100px' }}>order Now</p>
            </div>
              <img src='../drinkkk.png' style={{marginLeft:'200px'}}/>
              
              </div>
            <div>
              <img src='../wine.png'></img>
              <img src='../whiskey.png'></img>
              <img src='../vodka.png'></img>
              <img src='../beer.png'></img>
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
    </div>
   );
}

ReactDOM.render(
  <React.StrictMode>
      <Drinks />
  </React.StrictMode>,
  document.getElementById('drink')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
