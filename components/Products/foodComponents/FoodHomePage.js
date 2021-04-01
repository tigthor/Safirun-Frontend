import React, { Component } from 'react';
// import { MenuOutlined } from '@ant-design/icons'
import { Space, Card, Row, Col, Radio } from 'antd'
import { MdArrowForward } from 'react-icons/md';
import Layout from 'antd/lib/layout/layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Footer from '../../landing-page/reusable/Footer'
import ProductsNavbar from '../reusable/ProductsNavbar';
import DefaultCatIcons from '../reusable/DefaultCatIcons';
import DiscountPass from '../reusable/DiscountPass';


const FoodHomePage = () => {

    const Values = [

        {
            url: '../assets/Pickup-2-1.png',
            text: 'pickup',
        },
        {
            url: '../assets/Pickup-2-2.png',
            text: 'Deals',
        },
        {
            url: '../assets/Pickup-2-3.png',
            text: 'Sandwich',
        },
        {
            url: '../assets/Pickup-2-4.png',
            text: 'Burgers',
        },

        {
            url: '../assets/Pickup-2-5.png',
            text: 'Fast Food',
        },
        {
            url: '../assets/Pickup-2-6.png',
            text: 'Desserts',
        },
        {
            url: '../assets/Pickup-2-7.png',
            text: 'BBQ',
        },
        {
            url: '../assets/Pickup-2-8.png',
            text: 'Chicken',
        },
        {
            url: '../assets/Pickup-2-9.png',
            text: 'Backery',
        },
        {
            url: '../assets/Pickup-2-10.png',
            text: 'Pizza',
        },

        {
            url: '../assets/Pickup-2-11.png',
            text: 'Chinese',
        },
        {
            url: '../assets/Pickup-2-12.png',
            text: 'Indian',
        },
        {
            url: '../assets/Pickup-2-13.png',
            text: 'Health',
        },
        {
            url: '../assets/Pickup-2-14.png',
            text: 'MEXICAN',
        }
    ]

    const Favorite = [
        {
            url: '../assets/Camelia.png',
            title: 'Camellia',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)',
            href: 'selectRestorants'
        },
        {
            url: '../assets/Simba.png',
            title: 'Simba',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/MezeFresh.png',
            title: 'MezeFresh',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min ',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/ChineseRestaurant.png',
            title: 'ChineseRestaurant',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        }
    ]

    const SpecialOffer = [
        {
            url: '../assets/Special1.png',
            title: 'Sandwich',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)',
            href: 'sandwichSearch'
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

    const Popular = [
        {
            url: '../assets/popular1.png',
            title: 'Sandwich',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/popular2.png',
            title: 'burger',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/popular3.png',
            title: 'buritto',
            sub1: '$$-Fast Food-dine In-Mexican',
            sub2: '20-30 min ',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/popular4.png',
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
    const AllResto1 = [
        {
            url: '../assets/recomended1.png',
            title: "L'epicurier",
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/recomended2.png',
            title: 'Burger Planet',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/recomended3.png',
            title: "Buritto's King",
            sub1: '$$-Fast Food-dine In-Mexican',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/recomended4.png',
            title: 'Coco',
            sub1: '$$-Fast food-Delivery-hel',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        }
    ]

    const AllResto3 = [
        {
            url: '../assets/recomended1.png',
            title: 'Sandwich & Chips',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/recomended2.png',
            title: 'Burgert',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/recomended3.png',
            title: "Tally's backery",
            sub1: '$$-Fast Food-dine In-Mexican',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/recomended4.png',
            title: "Hery's Coffee Shop",
            sub1: '$$-Fast food-Delivery-hel',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        }
    ]

    const AllResto4 = [
        {
            url: '../assets/hurry1.png',
            title: 'Habesha Ethiopian',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/hurry2.png',
            title: 'Tacos Wold',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/hurry3.png',
            title: 'The Hut',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/hurry4.png',
            title: 'Java House',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        }
    ]

    const AllResto5 = [
        {
            url: '../assets/recomended1.png',
            title: "Master's Pizza",
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/recomended2.png',
            title: 'Sone Luna',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/recomended3.png',
            title: 'Repub Louange',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/recomended4.png',
            title: 'Soko Restourant',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        }
    ]
    const { Sider } = Layout;
    return (
        <div class='foodPar'>

            <Space size="large" direction="vertical">
                <ProductsNavbar />
                <DiscountPass />
                <DefaultCatIcons />


                <div className='foodchil4'>
                    <div><img src='../assets/FoodB.png' style={{ width: '683px', height: '400px' }}></img></div>
                    <div className='foodchil5'>
                        <h1>TastFood at your doorStep</h1>
                        <p>Order food from our best restaurants you <br></br> can have a delightful experience</p>
                        <p style={{ border: '2px solid white', borderRadius: '20px', width: '100px', marginLeft: '250px', }}>order Now</p>
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
                <div className='foodchil12'>
                    <Layout className='foodchil11'>
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
                    <Layout className='foodchil13'>
                        <div>
                            <div>
                                <div className='fooderChil9'>
                                    <h1 style={{ marginLeft: '80px', fontSize: '26.9px', lineHeight: '40px', color: '#1F1F1F' }}>Your Favorites</h1>
                                    <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px', left: '1310px' }} />
                                </div>
                            </div>

                            <div className='fooderChil8'>

                                {
                                    Favorite.map(fav => (
                                        <Card className='fooderChil10'>
                                            <a href={fav.href} style={{ textDecoration: 'none' }}>
                                                <img src={fav.url} style={{ width: '242px', height: '150px', marginBottom: '-8px' }}></img>
                                                <div style={{ height: '94px', width: '242px', boxShadow: '0px 0px 11px' }}>
                                                    <p style={{ lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{fav.title}</p>
                                                    <p style={{ fontSize: '14px', color: '#787878', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{fav.sub1}</p>
                                                    <div style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>
                                                        <img src='../assets/star.png' style={{ position: 'absolute', marginLeft: '100px', marginTop: '8px' }}></img>
                                                        <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', position: 'relative' }}>{fav.sub2}</p>
                                                        <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', position: 'relative', marginLeft: '120px', marginTop: '-30px' }}>{fav.sub3}</p>
                                                    </div>
                                                </div>
                                            </a>

                                        </Card>
                                    ))
                                }
                            </div>
                        </div>

                        <div>
                            <div className='fooderChil9'>
                                <h1 style={{ marginLeft: '80px', fontSize: '26.9px', lineHeight: '40px', color: '#1F1F1F' }}>Special Offers</h1>
                                <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
                            </div>
                        </div>

                        <div className='fooderChil8'>

                            {
                                SpecialOffer.map(special => (
                                    <Card className='fooderChil10'>
                                        <a href={special.href} style={{ textDecoration: 'none' }}>
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
                                        </a>

                                    </Card>
                                ))
                            }
                        </div>

                        <div>
                            <div className='fooderChil9'>
                                <h1 style={{ marginLeft: '80px', fontSize: '26.9px', lineHeight: '40px', color: '#1F1F1F' }}>Most popular near you</h1>
                                <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
                            </div>
                        </div>

                        <div className='fooderChil8'>

                            {
                                Popular.map(popular => (
                                    <Card className='fooderChil10'>
                                        <img src={popular.url} style={{ width: '242px', height: '150px', marginBottom: '-8px' }}></img>
                                        <div style={{ height: '94px', width: '242px', boxShadow: '0px 0px 11px', display: 'flex', flexDirection: 'column' }}>
                                            <p style={{ lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{popular.title}</p>
                                            <p style={{ fontSize: '14px', color: '#787878', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{popular.sub1}</p>
                                            <div style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>
                                                <img src='../assets/star.png' style={{ position: 'absolute', marginLeft: '100px', marginTop: '8px' }}></img>
                                                <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px' }}>{popular.sub2}</p>
                                                <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', position: 'relative', marginLeft: '120px', marginTop: '-30px' }}>{popular.sub3}</p>
                                            </div>
                                        </div>
                                    </Card>
                                ))
                            }
                        </div>

                        <div>
                            <div className='fooderChil9'>
                                <h1 style={{ marginLeft: '80px', fontSize: '26.9px', lineHeight: '40px', color: '#1F1F1F' }}>In a hurry</h1>
                                <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
                            </div>
                        </div>

                        <div className='fooderChil8'>

                            {
                                Hurry.map(hurry => (
                                    <Card className='fooderChil10'>
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

                        <div>
                            <div className='fooderChil9'>
                                <h1 style={{ marginLeft: '80px', fontSize: '26.9px', lineHeight: '40px', color: '#1F1F1F' }}>Recomended Dishes</h1>
                                <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
                            </div>
                        </div>

                        <div className='fooderChil8'>

                            {
                                Recomended.map(recomended => (
                                    <Card className='fooderChil10'>
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
                        <div>
                            <div>
                                <div className='fooderChil9'>
                                    <a href='selectRestorants' style={{ marginLeft: '80px', fontSize: '26.9px', lineHeight: '40px', color: '#1F1F1F', textDecoration: 'none' }}>All Restaurant</a>
                                    <a href='selectRestorants'> <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} /></a>
                                </div>
                            </div>

                            <div className='fooderChil8'>

                                {
                                    AllResto1.map(allResto1 => (
                                        <Card className='fooderChil10'>
                                            <img src={allResto1.url} style={{ width: '242px', height: '150px', marginBottom: '-8px' }}></img>
                                            <div style={{ height: '94px', width: '242px', boxShadow: '0px 0px 11px', display: 'flex', flexDirection: 'column' }}>
                                                <p style={{ lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{allResto1.title}</p>
                                                <p style={{ fontSize: '14px', color: '#787878', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{allResto1.sub1}</p>
                                                <div style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>
                                                    <img src='../assets/star.png' style={{ position: 'absolute', marginLeft: '100px', marginTop: '8px' }}></img>
                                                    <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px' }}>{allResto1.sub2}</p>
                                                    <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', position: 'relative', marginLeft: '120px', marginTop: '-30px' }}>{allResto1.sub3}</p>
                                                </div></div>

                                        </Card>
                                    ))
                                }
                            </div>
                            <div className='fooderChil8'>

                                {
                                    Favorite.map(fav => (
                                        <Card className='fooderChil10'>
                                            <img src={fav.url} style={{ width: '242px', height: '150px', marginBottom: '-8px' }}></img>
                                            <div style={{ height: '94px', width: '242px', boxShadow: '0px 0px 11px', display: 'flex', flexDirection: 'column' }}>
                                                <p style={{ lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{fav.title}</p>
                                                <p style={{ fontSize: '14px', color: '#787878', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{fav.sub1}</p>
                                                <div style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>
                                                    <img src='../assets/star.png' style={{ position: 'absolute', marginLeft: '100px', marginTop: '8px' }}></img>
                                                    <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px' }}>{fav.sub2}</p>
                                                    <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', position: 'relative', marginLeft: '120px', marginTop: '-30px' }}>{fav.sub3}</p>
                                                </div></div>

                                        </Card>
                                    ))
                                }
                            </div>

                            <div className='fooderChil8'>

                                {
                                    AllResto3.map(allResto3 => (
                                        <Card className='fooderChil10'>
                                            <img src={allResto3.url} style={{ width: '242px', height: '150px', marginBottom: '-8px' }}></img>
                                            <div style={{ height: '94px', width: '242px', boxShadow: '0px 0px 11px', display: 'flex', flexDirection: 'column' }}>
                                                <p style={{ lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{allResto3.title}</p>
                                                <p style={{ fontSize: '14px', color: '#787878', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{allResto3.sub1}</p>
                                                <div style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>
                                                    <img src='../assets/star.png' style={{ position: 'absolute', marginLeft: '100px', marginTop: '8px' }}></img>
                                                    <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px' }}>{allResto3.sub2}</p>
                                                    <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', position: 'relative', marginLeft: '120px', marginTop: '-30px' }}>{allResto3.sub3}</p>
                                                </div></div>

                                        </Card>
                                    ))
                                }
                            </div>

                            <div className='fooderChil8'>

                                {
                                    AllResto4.map(allResto4 => (
                                        <Card className='fooderChil10'>
                                            <img src={allResto4.url} style={{ width: '242px', height: '150px', marginBottom: '-8px' }}></img>
                                            <div style={{ height: '94px', width: '242px', boxShadow: '0px 0px 11px', display: 'flex', flexDirection: 'column' }}>
                                                <p style={{ lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px', marginLeft: '10px' }}>{allResto4.title}</p>
                                                <p style={{ fontSize: '14px', color: '#787878', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px', marginLeft: '10px' }}>{allResto4.sub1}</p>
                                                <div style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>
                                                    <img src='../assets/star.png' style={{ position: 'absolute', marginLeft: '100px', marginTop: '8px' }}></img>
                                                    <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px' }}>{allResto4.sub2}</p>
                                                    <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', position: 'relative', marginLeft: '120px', marginTop: '-30px' }}>{allResto4.sub3}</p>
                                                </div></div>

                                        </Card>
                                    ))
                                }
                            </div>

                            <div className='fooderChil8'>

                                {
                                    AllResto5.map(allResto5 => (
                                        <Card className='fooderChil10'>
                                            <img src={allResto5.url} style={{ width: '242px', height: '150px', marginBottom: '-8px' }}></img>
                                            <div style={{ height: '94px', width: '242px', boxShadow: '0px 0px 11px', display: 'flex', flexDirection: 'column', justifyItems: 'baseline', justifyContent: 'space-evenly' }}>
                                                <p style={{ lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{allResto5.title}</p>
                                                <p style={{ fontSize: '14px', color: '#787878', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>{allResto5.sub1}</p>
                                                <div style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', marginLeft: '10px' }}>
                                                    <img src='../assets/star.png' style={{ position: 'absolute', marginLeft: '100px', marginTop: '8px' }}></img>
                                                    <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px' }}>{allResto5.sub2}</p>
                                                    <p style={{ fontSize: '14.2675px', color: '#000000', lineHeight: '30px', margin: '0px', padding: '0px', position: 'relative', marginLeft: '120px', marginTop: '-30px' }}>{allResto5.sub3}</p>
                                                </div></div>

                                        </Card>
                                    ))
                                }
                            </div>
                        </div>
                    </Layout>
                </div>

                {/* <div>
                <p className='TriangleShapeCSS'>View</p>

            </div> */}


                <div style={{ display: 'flex', position: 'relative' }}>

                    <div style={{ position: 'absolute' }}><div class="arrow-right"> <p style={{ marginLeft: '-65px', color: 'white', marginBottom: '30px' }}>New</p></div></div>
                </div>
                <br></br>
                <footer>
                    <Footer /></footer>
            </Space>


        </div>
    );
}

export default FoodHomePage;