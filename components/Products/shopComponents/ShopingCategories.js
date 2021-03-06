import React, { Component } from 'react';
import { Space, Card, Row, Col, Radio } from 'antd'
import { MdArrowForward } from 'react-icons/md';
import Layout from 'antd/lib/layout/layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Footer from '../../landing-page/reusable/Footer';
import ProductsNavbar from '../reusable/ProductsNavbar';
import DiscountPass from '../reusable/DiscountPass';



const ShopingCategories = () => {
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
    ]


    const { Sider } = Layout;
    return (
        <div>
            <div style={{ backgroundColor: '#E5E5E5' }}>

                <Space size="large" direction="vertical">
                    <ProductsNavbar />
                    <DiscountPass />
                </Space>

                <div style={{ display: 'flex', position: 'relative' }}>
                    <div className='shop2chil2'>
                        <img src='../shopB.png' className='shop2chil2' />
                        <h1 className='shop2chil1'>Kigali Electronics</h1>

                    </div>

                </div>

                <div className='shop2chil6'>

                    <div className='shop2chil7'>

                        <p style={{ fontWeight: 'bold' }}>Shopping-Delively</p>
                        <div className='shop2chil9'>
                            <p style={{ marginLeft: '10px' }}>1234 KG24 Nyarugenge District,Kigali,Rwanda</p>
                            <img src='../Location1.png' style={{ position: 'absolute', width: '20px', height: '20px', marginLeft: '-10px' }}></img>
                        </div>
                    </div>

                    <div className='shop2chil8'>
                        <div className='shop2chil10'>
                            <p style={{}}><b>Sunday</b>:11AM-9PM <b>Monday-Friday</b>:11AM-9PM</p>
                            <img src='../Location2.png' style={{ position: 'absolute', width: '20px', height: '20px', marginLeft: '-25px' }}></img>
                        </div>
                        <p style={{}}><b>Suturday</b>:11AM-9PM</p>
                    </div>

                </div>
                <div className='shop2chil3'>
                    <Layout className='shop2chil4'>

                        <div>
                            <Space size='medium' direction='vertical'>
                                <Col style={{ marginLeft: '20px' }}>FILTER BY<br></br><br></br>
                                    <Space size='middle' direction='vertical'>
                                        <Col style={{ marginLeft: '25px' }}>Sort</Col>
                                        <Row style={{ fontWeight: 'normal', marginLeft: '30px' }}><Radio>Delivery</Radio></Row>
                                        <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal', marginLeft: '30px' }}>Sales</Radio></Row>
                                        <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal', marginLeft: '30px' }}>Special Offers</Radio></Row>
                                        <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal', marginLeft: '30px' }}>Electronics</Radio></Row>
                                        <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal', marginLeft: '30px' }}>Fashion</Radio></Row>
                                        <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal', marginLeft: '30px' }}>TV</Radio></Row>
                                        <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal', marginLeft: '30px' }}>House Appliances</Radio></Row>
                                        <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal', marginLeft: '30px' }}>bag</Radio></Row>
                                        <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal', marginLeft: '30px' }}>Furnitures</Radio></Row>
                                    </Space>
                                </Col>

                            </Space>

                        </div>
                    </Layout>
                    <Layout className='shop2chil5'>
                        <div className='shop2chil16'>
                            <div className='shop2chil14'>
                                <div className='shop2chil12'>
                                    <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Deal of the day</h1>
                                    <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
                                </div>
                                <div className='shop2chil13'>
                                    {
                                        Shop.map(shop => (
                                            <div className='shop2chil15'>
                                                <div style={{ position: 'relative' }}>
                                                    <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '150px' }}></img>
                                                    <p className='shop2chil17'> 30% off</p>
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
                                <div className='shop2chil14'>
                                    <div className='shop2chil12'>
                                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Sales</h1>
                                        <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
                                    </div>
                                    <div className='shop2chil13'>
                                        {
                                            Shop.map(shop => (
                                                <div className='shop2chil15'>
                                                    <div style={{ position: 'relative' }}>
                                                        <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                                                        <p className='shop2chil17'> 30% off</p>
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


                            <div>
                                <div className='shop2chil14'>
                                    <div className='shop2chil12'>
                                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Most Popular</h1>
                                        <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
                                    </div>
                                    <div className='shop2chil13'>
                                        {
                                            Shop.map(shop => (
                                                <div className='shop2chil15'>
                                                    <div style={{ position: 'relative' }}>
                                                        <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                                                        <p className='shop2chil17'> 30% off</p>
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

                        </div>
                    </Layout>

                </div>
            </div>
            <div className='shopChill15'>
                <div className='drink2Chil3'>
                    <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Shoose a Categories</h1>
                    <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                </div>

                <div className='drinkChil6'>

                    <div style={{ position: 'relative' }}>
                        <h1 style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '80px', fontWeight: 'bold', fontSize: '35px' }}>Beauty</h1>
                        <img src='../shopCategory1.png'></img>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <h1 style={{ color: 'white', position: 'absolute', marginLeft: '30px', marginTop: '60px', fontWeight: 'bold', fontSize: '35px' }}>Home Appliances</h1>
                        <img src='../shopCategory2.png'></img>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <h1 style={{ color: 'white', position: 'absolute', marginLeft: '60px', marginTop: '80px', fontWeight: 'bold', fontSize: '35px' }}>Shoes</h1>
                        <img src='../shopCategory3.png'></img>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <h1 style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '80px', fontWeight: 'bold', fontSize: '35px' }}>Fashion</h1>
                        <img src='../shopCategory4.png'></img>
                    </div>

                </div>

                <div className='drinkChil7'>

                    <div style={{ position: 'relative' }}>
                        <h1 style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '80px', fontWeight: 'bold', fontSize: '35px' }}>Phone</h1>
                        <img src='../shopCategory5.png'></img>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <h1 style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '80px', fontWeight: 'bold', fontSize: '35px' }}>Kitchen</h1>
                        <img src='../shopCategory6.png'></img>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <h1 style={{ color: 'white', position: 'absolute', marginLeft: '120px', marginTop: '60px', fontWeight: 'bold', fontSize: '35px' }}>Bag</h1>
                        <img src='../shopCategory7.png'></img>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <h1 style={{ color: 'white', position: 'absolute', marginLeft: '100px', marginTop: '60px', fontWeight: 'bold', fontSize: '35px' }}>Furniture</h1>
                        <img src='../shopCategory8.png'></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ShopingCategories;