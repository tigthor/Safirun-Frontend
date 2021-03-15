import React, { Component } from 'react';
// import { MenuOutlined } from '@ant-design/icons'
import { Space, Card, Row, Col, Radio } from 'antd'
import { MdArrowForward } from 'react-icons/md';
import Layout from 'antd/lib/layout/layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import '../../App.css';
import Footer from '../landing-page/reusable/Footer'


const FoodPage = () => {
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

    const Shop = [
        {
            url: '../shop1-2.png',
            text: 'Flash Drive',
            sub1: 'For Special One',
            sub2: '5000 RWF'
        },
        {
            url: '../shop2-2.png',
            text: 'Shoe',
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
            url: '../shop4-2.png',
            text: 'Blender',
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
            url: '../shop2-2.png',
            text: 'Shoe',
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


    const { Sider } = Layout;
    return (
        <div>

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
            <div style={{ display: 'flex', position: 'relative' }}>
                <div className='drinkChil4'>
                    <div className='drinkChil2'>
                        <img src='../shop1.png' style={{}} />
                        <h1 style={{ lineHeight: '67px', position: 'absolute', color: 'black', fontWeight: '800', fontSize: '45px', marginTop: '100px', marginLeft: '50px' }}>Shop <br></br>With us</h1>

                    </div>
                    <div className='drinkChil3'>

                        <div style={{ position: 'relative' }}>
                            <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '50px' }}>Electronics</h1>
                            <img src='../shop2.png' style={{ width: '315px', height: '228px', marginBottom: '8px' }}></img>
                        </div>

                        <div style={{ position: 'relative' }}>
                            <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '100px' }}>Fasion</h1>
                            <img src='../shop3.png' style={{ width: '315px', height: '228px', marginLeft: '10px' }}></img>
                        </div>

                        <div style={{ position: 'relative' }}>
                            <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '100px' }}>Home</h1>
                            <img src='../shop4.png' style={{ width: '315px', height: '228px' }}></img>
                        </div>

                        <div style={{ position: 'relative' }}>
                            <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '45px', marginTop: '100px', marginLeft: '100px' }}>Beauty</h1>
                            <img src='../shop5.png' style={{ width: '315px', height: '228px', marginLeft: '10px' }}></img>
                        </div>

                    </div>
                </div>

            </div>

            <div className='shopChil6'>
                <div className='shopChil5'>
                    <div className='shopChil2'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Deal of the day</h1>
                        <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
                    </div>
                    <div className='shopChil3'>
                        {
                            Shop.map(shop => (
                                <div className='shopChil4'>
                                    <div style={{ position: 'relative' }}>
                                        <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '150px' }}></img>
                                        <p className='shopChil1'> 30% off</p>
                                        <img src={shop.url}></img>
                                    </div>

                                    <p style={{ fontWeight: 'bold' }}>{shop.text}</p>
                                    <p style={{}}>{shop.sub1}</p>
                                    <p style={{ fontWeight: 'bold' }}>{shop.sub2}</p>
                                </div>
                            ))
                        }
                    </div></div>


                <div>
                    <div className='shopChil2'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Sales</h1>
                        <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
                    </div>
                    <div className='shopChil3'>
                        {
                            Shop.map(shop => (
                                <div className='shopChil4'>
                                    <div style={{ position: 'relative' }}>
                                        <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                                        <p className='shopChil1'> 30% off</p>
                                        <img src={shop.url}></img>
                                    </div>

                                    <p style={{ fontWeight: 'bold' }}>{shop.text}</p>
                                    <p>{shop.sub1}</p>
                                    <p style={{ fontWeight: 'bold' }}>{shop.sub2}</p>
                                </div>
                            ))
                        }
                    </div></div>


                <div>
                    <div className='shopChil2'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Most Popular</h1>
                        <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
                    </div>
                    <div className='shopChil3'>
                        {
                            Shop.map(shop => (
                                <div className='shopChil4'>
                                    <div style={{ position: 'relative' }}>
                                        <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                                        <p className='shopChil1'> 30% off</p>
                                        <img src={shop.url}></img>
                                    </div>

                                    <p style={{ fontWeight: 'bold' }}>{shop.text}</p>
                                    <p>{shop.sub1}</p>
                                    <p style={{ fontWeight: 'bold' }}>{shop.sub2}</p>
                                </div>
                            ))
                        }
                    </div></div>

            </div>
            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                <div className='drink2Chil3'>
                    <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Shoose a Categories</h1>
                    <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                </div>

                <div className='drinkChil6'>

                    <div style={{ position: 'relative' }}>
                        <h1 style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '100px', fontWeight: 'bold' }}>Beauty</h1>
                        <img src='../shopCategory1.png'></img>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <h1 style={{ color: 'white', position: 'absolute', marginLeft: '30px', marginTop: '80px', fontWeight: 'bold' }}>Home Appliances</h1>
                        <img src='../shopCategory2.png'></img>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <h1 style={{ color: 'white', position: 'absolute', marginLeft: '60px', marginTop: '80px', fontWeight: 'bold' }}>Shoes</h1>
                        <img src='../shopCategory3.png'></img>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <h1 style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '100px', fontWeight: 'bold' }}>Fashion</h1>
                        <img src='../shopCategory4.png'></img>
                    </div>

                </div>

                <div className='drinkChil7'>

                    <div style={{ position: 'relative' }}>
                        <h1 style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '100px', fontWeight: 'bold' }}>Phone</h1>
                        <img src='../shopCategory5.png'></img>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <h1 style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '100px', fontWeight: 'bold' }}>Kitchen</h1>
                        <img src='../shopCategory6.png'></img>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <h1 style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '80px', fontWeight: 'bold' }}>Bag</h1>
                        <img src='../shopCategory7.png'></img>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <h1 style={{ color: 'white', position: 'absolute', marginLeft: '100px', marginTop: '80px', fontWeight: 'bold' }}>Furniture</h1>
                        <img src='../shopCategory8.png'></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <FoodPage />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('shop')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
}