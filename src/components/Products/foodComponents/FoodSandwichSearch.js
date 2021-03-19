import React, { Component } from 'react';
// import { MenuOutlined } from '@ant-design/icons'
import { Space, Card, Row, Col, Radio } from 'antd'
import { MdArrowForward } from 'react-icons/md';
import Layout from 'antd/lib/layout/layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Footer from '../../landing-page/reusable/Footer'


const FoodSandwichSearch = () => {
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
            url: '../assets/Special1.png',
            title: 'Simba',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/Special1.png',
            title: 'Simba',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/Special1.png',
            title: 'Simba',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min ',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/Special1.png',
            title: 'Simba',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        }
    ]

    const SpecialOffer = [
        {
            url: '../assets/Special1.png',
            title: 'Simba',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/Special1.png',
            title: 'Simba',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/Special1.png',
            title: 'Simba',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/Special1.png',
            title: 'Simba',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        }
    ]

    const Popular = [
        {
            url: '../assets/Special1.png',
            title: 'Simba',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/Special1.png',
            title: 'Simba',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/Special1.png',
            title: 'Simba',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min ',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/Special1.png',
            title: 'Simba',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        }
    ]

    const Hurry = [
        {
            url: '../assets/Special1.png',
            title: 'Simba',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/Special1.png',
            title: 'Simba',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/Special1.png',
            title: 'Simba',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        },
        {
            url: '../assets/Special1.png',
            title: 'Simba',
            sub1: '$$-Fast food-Burgers-Coffee',
            sub2: '20-30 min',
            sub3: ' 4.2(200+)'
        }
    ]

    
    const { Sider } = Layout;
    return (
        <div class='foodPar'>

            <div className='Header'>
                <div style={{ display: 'flex', position: 'relative', flexDirection: 'row' }}>
                    <div style={{ position: 'absolute', marginLeft: '-200px' }}><img src="../assets/image2ico.png" style={{ width: '40px', height: '27px', marginTop: '20px', position: 'absolute', marginLeft: '-30px' }} />
                        <img src="../assets/SafiRuLoGo2.png" style={{ width: '174px', height: '69px', marginTop: '10px' }} /></div>
                </div>
                <div style={{ display: 'flex', position: 'relative', flexDirection: 'row', marginLeft: '-220px' }}>
                    <p style={{ position: 'relative', width: '91px', height: '47px', left: '300px', top: '34px', backgroundColor: '#000000', borderRadius: '20px', fontSize: '16px', lineHeight: '24px', color: '#FFFFFF', textAlign: 'center', position: 'absolute' }}>Delively</p>
                    <p style={{ position: 'absolute', width: '281px', height: '47px', left: '350px', top: '34px', backgroundColor: '#E5E5E5', borderRadius: '20px', boxShadow: '0px 0px 4px rgba', textAlign: 'center', position: 'absolute' }}>Dine in       PickUp</p>
                </div>
                <div style={{ display: 'flex', position: 'relative', flexDirection: 'row' }}>
                    <img src="../assets/pin.png" style={{ position: 'relative', width: '29px', height: '25px', marginLeft: '480px', marginTop: '30px', position: 'absolute' }} />
                    <p style={{ position: 'absolute', width: '531px', height: '47px', left: '700px', top: '34px', backgroundColor: '#E5E5E5', borderRadius: '20px', boxShadow: '0px 0px 4px rgba', textAlign: 'center', position: 'absolute' }}>3rd Floor, Fairview Building. Thu, 25, 2021, 9:00 AM-9:30 AM</p>
                </div>
                <div style={{ display: 'flex', position: 'relative', flexDirection: 'row' }}>
                    <img src="../assets/Search.png" style={{ width: '29px', height: '25px', position: 'absolute' }} />
                    <img src="../assets/Account.png" style={{ width: '29px', height: '25px', position: 'absolute' }} />
                    <img src="../assets/ShoppingCart.png" style={{ width: '29px', height: '25px', position: 'absolute' }} />
                </div>
            </div>
            <div className='foodchil1'>
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
            <div className='foodchil4'>
                <div><img src='../assets/FoodB.png' style={{ width: '683px', height: '400px' }}></img></div>
                <div className='foodchil5'>
                    <h1>TastFood at your doorStep</h1>
                    <p>Order food from our best restaurants you <br></br> can have a delightful experience</p>
                    <p style={{ border: '2px solid white', borderRadius: '20px', width: '100px', marginLeft: '250px' }}>order Now</p>
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
                        

                        <div className='fooderChil8'>

                            {
                                Favorite.map(fav => (
                                    <Card className='fooderChil10'>
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

                                    </Card>
                                ))
                            }
                        </div>
                    </div>


                    <div className='fooderChil8'>

                        {
                            SpecialOffer.map(special => (
                                <Card className='fooderChil10'>
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


        </div>
    );
}

export default FoodSandwichSearch;