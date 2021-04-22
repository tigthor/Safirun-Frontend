import React, { Component } from 'react';
// import { MenuOutlined } from '@ant-design/icons'
import { Space, Card, Row, Col, Radio } from 'antd'
import { MdArrowForward } from 'react-icons/md';
import Layout from 'antd/lib/layout/layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ProductsNavbar from '../reusable/ProductsNavbar';
import DefaultCatIcons from '../reusable/DefaultCatIcons';
import DiscountPass from '../reusable/DiscountPass';
import Footer from '../../landing-page/reusable/Footer';
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);


const ShopingHomePage = () => {

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

            <Space size="large" direction="vertical">
                <ProductsNavbar />
                <DiscountPass />
                <DefaultCatIcons />

                <div>
                    <div className='shopChil5'>

                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            autoplay={{
                                delay: 12500,
                                disableOnInteraction: true
                            }}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                            className='shopChil7'
                        >
                            <SwiperSlide >
                            <div className='shopChil7'>
                                <img src='../shop1.png' style={{}} />
                                <h1 style={{ lineHeight: '67px', position: 'absolute', color: 'black', fontWeight: '800', fontSize: '45px', marginTop: '100px', marginLeft: '50px' }}>Shop <br></br>With us</h1>

                            </div>
                            </SwiperSlide>
                            <SwiperSlide >
                            <div className='shopChil7'>
                                <img src='../shop1.png' style={{}} />
                                <h1 style={{ lineHeight: '67px', position: 'absolute', color: 'black', fontWeight: '800', fontSize: '45px', marginTop: '100px', marginLeft: '50px' }}>Shop <br></br>With us</h1>

                            </div>
                            </SwiperSlide>
                            <SwiperSlide >
                            <div className='shopChil7'>
                                <img src='../shop1.png' style={{}} />
                                <h1 style={{ lineHeight: '67px', position: 'absolute', color: 'black', fontWeight: '800', fontSize: '45px', marginTop: '100px', marginLeft: '50px' }}>Shop <br></br>With us</h1>

                            </div>
                            </SwiperSlide>
                            </Swiper>
                            
                            <div className='shopChil8'>

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
                        <div>
                            <div>
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
                                </div></div></div>


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
                        <div className='shopChil10'>
                            <a href='categories' style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '30px', color: '#000000', fontWeight: 'bold', textDecoration: 'none' }}>Shoose a Categories</a>
                            <a href='viewAll' style={{ fontWeight: 'bold', marginRight: '40px', textDecoration: 'none' }}>View All</a>
                        </div>
                        <div className='shopChil11'>

                            <div style={{ position: 'relative' }}>
                                <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '30px', marginTop: '100px', marginLeft: '50px' }}>Beauty</h1>
                                <img src='../shopCategory1.png'></img>
                            </div>

                            <div style={{ position: 'relative' }}>
                                <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '30px', marginTop: '100px', marginLeft: '50px' }}>Home Appliances</h1>
                                <img src='../shopCategory2.png'></img>
                            </div>

                            <div style={{ position: 'relative' }}>
                                <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '30px', marginTop: '100px', marginLeft: '50px' }}>Shoes</h1>
                                <img src='../shopCategory3.png'></img>
                            </div>

                            <div style={{ position: 'relative' }}>
                                <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '30px', marginTop: '100px', marginLeft: '50px' }}>Fashion</h1>
                                <img src='../shopCategory4.png'></img>
                            </div>

                        </div>

                        <div className='shopChil11'>

                            <div style={{ position: 'relative' }}>
                                <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '30px', marginTop: '100px', marginLeft: '50px' }}>Phone</h1>
                                <img src='../shopCategory5.png'></img>
                            </div>

                            <div style={{ position: 'relative' }}>
                                <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '30px', marginTop: '100px', marginLeft: '50px' }}>Kitchen</h1>
                                <img src='../shopCategory6.png'></img>
                            </div>

                            <div style={{ position: 'relative' }}>
                                <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '30px', marginTop: '100px', marginLeft: '50px' }}>Bag</h1>
                                <img src='../shopCategory7.png'></img>
                            </div>

                            <div style={{ position: 'relative' }}>
                                <h1 style={{ lineHeight: '40px', position: 'absolute', color: 'white', fontWeight: 'bold', fontSize: '30px', marginTop: '100px', marginLeft: '50px' }}>Furniture</h1>
                                <img src='../shopCategory8.png'></img>
                            </div>
                        </div>
                    </div>
                    <Footer />
            </Space>
        </div>
    );
}

export default ShopingHomePage;