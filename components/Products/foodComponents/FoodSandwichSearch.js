import React, { Component , useState } from 'react';
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
import ProductsAdSection from '../../Products/reusable/ProductsAdSection';


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

    const [pageDetails, setPageDetails] = useState([
        {
          MainPic: "../assets/FoodB.png",
          MainTitle: "TastFood at your doorStep",
          MainDescription:
            "Order food from our best restaurants you can have a delightful experience",
        },
        {
            MainPic: "../assets/FoodB.png",
            MainTitle: "TastFood at your doorStep",
            MainDescription:
              "Order food from our best restaurants you can have a delightful experience",
        },
        {
            MainPic: "../assets/FoodB.png",
            MainTitle: "TastFood at your doorStep",
            MainDescription:
              "Order food from our best restaurants you can have a delightful experience",
        },
      ]);
    
      const [adStyles, setAdStyles] = useState([
        {
          backgroundColor: "#db573b",
          maxHeight: "400px",
          width: "683px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        },
        {
          fontWeight: "600",
          fontSize: "30px",
          color: "#ffff",
        },
      ]);
    
    
      const [buttonClassName, setButtonClassName] = useState("FoodOrderButton");


    const { Sider } = Layout;
    return (
        <div class='foodPar'>

            <Space size="large" direction="vertical">
                <ProductsNavbar />
                <DiscountPass />
                <DefaultCatIcons />

                <ProductsAdSection 
                details={pageDetails}
                Styles={adStyles}
                buttonClass={buttonClassName}
                />

            <div className='food1chil3'>
                {
                    Values.map(values => (
                        <div>
                            <img src={values.url}></img>
                            <p>{values.text}</p>
                        </div>
                    ))
                }
            </div>
            <div className='food1chil4'>
                <Layout className='food1chil4'>
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
                <Layout className='food1chil5'>
                    <div>


                        <div className='food1chil6'>

                            {
                                Favorite.map(fav => (
                                    <Card className='food1chil7'>
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


                    <div className='food1chil6'>

                        {
                            SpecialOffer.map(special => (
                                <Card className='food1chil7'>
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


                    <div className='food1chil6'>

                        {
                            Popular.map(popular => (
                                <Card className='food1chil7'>
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



                    <div className='food1chil6'>

                        {
                            Hurry.map(hurry => (
                                <Card className='food1chil7'>
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

export default FoodSandwichSearch;