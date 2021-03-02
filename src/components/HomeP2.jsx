import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Row, Col, Space } from 'antd';



const Middlesectio = () => {
    const Data = [
        {
            url: '../assets/food1.png',
            text: 'FOOD',
            backgroudColor: '#C2773C'
        },
        {
            url: '../assets/drinks2.png',
            text: 'DRINKS',
            backgroudColor: '#813F5A'
        },
        {
            url: '../assets/GROCERIES2.png',
            text: 'GROCERIES',
            backgroudColor: '#589D16'
        },
        {
            url: '../assets/PHARMACY-ESSENTIALS2.png',
            text: 'PHARMACY & ESSENTIALS',
            backgroudColor: '#3F85B8'
        },
        {
            url: '../assets/FLORIST2.png',
            text: 'FLORIST',
            backgroudColor: '#AB2B1A'
        },
        {
            url: '../assets/UTILITIES2.png',
            text: 'UTILITIES',
            backgroudColor: '#004CE7'
        },

    ]

    const Values = [

        {
            url: '../assets/INDIAN.jpg',
            text: 'INDIAN',
            backgroudColor: '#CCCCCC'
        },
        {
            url: '../assets/BREAKFAST.jpg',
            text: 'BREAKFAST',
            backgroudColor: '#CCCCCC'
        },
        {
            url: '../assets/ITALIAN.jpg',
            text: 'ITALIAN',
            backgroudColor: '#CCCCCC'
        },
        {
            url: '../assets/ALCOHOL.jpg',
            text: 'ALCOHOL',
            backgroudColor: '#CCCCCC'
        },

        {
            url: '../assets/MEXICAN.png',
            text: 'MEXICAN',
            backgroudColor: '#CCCCCC'
        },
        {
            url: '../assets/BACKERY.jpg',
            text: 'BACKERY',
            backgroudColor: '#CCCCCC'
        }

    ]

    return (
        <div>
            <div>
                <div className='marketPlaceChil1'>
                    <h1 className='marketPlace'>SAFIRUN market place </h1>
                    <div style={{ display: 'flex', position: 'relative' }}>
                        <p className='viewMore' style={{ marginRight: '20px', marginBottom: '-40px' }}>Vew more</p>
                        <p><MdArrowForward style={{ color: 'black', height: '27px', width: '27px', marginLeft: '80px', marginTop: '-12px', position: 'absolute', left: '10px', top: '18px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} /></p>
                    </div>

                </div>
                <div className="marketPlaceChil2">
                    {Data.map(data => (
                        <div className="marketPlaceChil3">
                            <img src={data.url} style={{
                                width: '342px',
                                height: '303px',
                                left: '539px',
                                top: '1002px',
                            }} />
                            <p style={{
                                backgroundColor: `${data.backgroudColor}`, width: '342px',

                                height: '57px', fontFamily: 'poppis', fontStyle: 'normal', fontWeight: 'bold', fontSize: '15px', lineHeight: '33px', position: 'absolute', bottom: '-4px', left: '-6px', color: '#FFFFFF', justifyContent: 'center', alignItems: "center"
                            }}>{data.text}</p>
                        </div>

                    ))}
                    <div className="marketPlaceChil3">
                        <img src='../assets/SHOPPIN2.png' style={{
                            width: '1042px',
                            height: '246px',
                            left: '539px',
                            top: '1002px',

                        }} />
                        <p style={{
                            backgroundColor: '#750062', width: '1042px', color: '#FFFFFF', position: 'absolute', justifyContent: 'center', bottom: '-4px', left: '-6px',
                            height: '57px',
                        }}>SHOPPIG</p>
                    </div>
                </div>
            </div>

            <div className='favoriteRestoPar'>
                <div style={{ marginRight: '200px', marginTop: '50px' }}>

                    <h3 class='fontF' style={{ textAlign: 'left', fontStyle: 'normal', fontWeight: '600px', fontSize: '35px', lineHeight: '35px' }}>Favorite Restaurants &<br></br> Stores in your pocket</h3>
                    <p style={{ textAlign: 'left' }}>Order from your favorite restaurants and stores,<br></br>with the all-new SAFIRUN app.</p>
                    <h4 style={{ textAlign: 'left' }}>DISCOVER. ORDER. TRACK IN APP</h4>
                    <img src='../assets/PlaystoreBadges-011.jpg'></img>
                    <img src='../assets/PlaystoreBadges-021.jpg'></img>
                </div>
                <div className='favoriteRestochil1' >
                    <img src='../assets/Trackrunner1.jpg' style={{ position: 'absolute', zIndex: 2 }}></img>
                    <img src='../assets/Trackrunner2.jpg' style={{ position: 'relative', top: '1px', left: '200px', zIndex: 1 }}></img>
                </div>
            </div>
            <div >
                <h1>what's on the menu</h1>
                <div className='whatOnTheMenuPar' style={{ height: '463px' }}>

                    <div className="whatOnTheMenuChil1" style={{ width: '299px', height: '463px' }}>
                        <img src='../assets/burger.png' style={{
                            width: '299px',
                            height: '400px',

                        }} />
                        <p style={{
                            backgroundColor: '#CCCCCC', width: '300px', color: '#000000', position: 'absolute', justifyContent: 'center', bottom: '-0px', left: '-6px',
                            height: '57px',
                        }}>BUGGERS</p>
                    </div>
                    <div className='whatOnTheMenuChil2' style={{ width: '800px', height: '463px' }}>
                        {Values.map(values => (
                            <div className="whatOnTheMenuChil3">
                                <img src={values.url} style={{
                                    width: '243px',
                                    height: '220px',
                                    left: '539px',
                                    top: '1002px',
                                }} />
                                <p style={{
                                    backgroundColor: `${values.backgroudColor}`, width: '243px',
                                    height: '60px', fontFamily: 'poppis', fontStyle: 'normal', fontWeight: 'bold', fontSize: '15px', lineHeight: '33px', position: 'absolute', bottom: '0px', left: '-6px', color: '#000000', justifyContent: 'center', alignItems: "center"
                                }}>{values.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div><h1>why Order with SUFIRUN</h1></div>

                <div className='whyOrdersWithSafiRunPar'>
                    <div className='whyOrdersWithSafiRunChil1' >
                        <img src='../assets/why1.png' />
                        <h2>variety</h2>
                        <p style={{ fontFamily: 'serif', fontSize: '20px' }}>restaurants and stores<br></br>delverred to your doorstep</p>
                    </div>

                    <div className='whyOrdersWithSafiRunChil1' ><img src='../assets/why2.png' style={{}} />
                        <h2>lighteng fast delivery</h2>
                        <p style={{ fontFamily: 'serif', fontSize: '20px' }}>join our delivery team <br></br>and earn to the go</p></div>


                    <div className='whyOrdersWithSafiRunChil1' ><img src='../assets/why3.png' style={{}} />
                        <h2>live Order tracking</h2>
                        <p style={{ fontFamily: 'serif', fontSize: '20px' }}>know where your is at all<br></br>times from the store to your<br></br>doorstep</p></div>
                    <br></br>

                    <div className='whyOrdersWithSafiRunChil1' ><img src='../assets/why4.png' style={{}} />
                        <h2>become a partner</h2>
                        <p style={{ fontFamily: 'serif', fontSize: '20px' }}>grow your business by<br></br>partnernig with us</p>
                        <p style={{ color: '#039C00' }}>Sign Up your store <MdArrowForward style={{ color: 'black', backgroundColor: '#CCCCCC', borderRadius: '20px' }} /></p></div>



                    <div className='whyOrdersWithSafiRunChil1' ><img src='../assets/why5.png' style={{}} />
                        <h2>become a runner</h2>
                        <p style={{ fontFamily: 'serif', fontSize: '20px' }}>join our delivery team <br></br>and earn to the go</p>
                        <p style={{ color: '#039C00' }}>Start earing today <MdArrowForward style={{ color: 'black', backgroundColor: '#CCCCCC', borderRadius: '20px' }} /></p></div>


                    <div className='whyOrdersWithSafiRunChil1' ><img src='../assets/why6.png' style={{}} />
                        <h2>get the app</h2>
                        <p style={{ fontFamily: 'serif', fontSize: '20px', fontWeight: 'normal' }}>your favorite stores<br></br>all in one app</p>
                        <p style={{ color: '#039C00' }}>Dowload the app <MdArrowForward style={{ color: 'black', backgroundColor: '#CCCCCC', borderRadius: '20px' }} /></p></div>

                </div>

            </div>
            <h1>Connect With Us</h1>
            <div className='ConnectWithUsPar'>
                <img src='/assets/ico1.png'></img>
                <img src='/assets/ico2.png'></img>
                <img src='/assets/ico3.png'></img>
                <img src='/assets/ico4.png'></img>
                <img src='/assets/ico5.png'></img>
            </div>

            <div>
                <h1>Location we currently serve</h1>
                <img src='/assets/map.png'></img>
            </div>

            <div style={{ display: 'flex', justifyContent: 'right', flexWrap: 'wrap', width: '1440px', }}>
                <div className='readyToOrder' style={{ width: '718px', marginTop: '100px' }}>
                    <h2>Ready To Order</h2>
                    <p>Browser local restaurants and stores for<br></br>delively by enterig your adress below</p>
                    <div>

                        <img src='../assets/pin.png' style={{ width: '27px', height: '27px', position: 'absolute', marginTop: '15px' }}></img>

                        <input type='text' placeholder='Enter Delivery adress' style={{ width: '355px', height: '47px', textAlign: 'center' }}></input>

                        <MdArrowForward style={{ color: 'white', backgroundColor: '#000000', width: '58px', height: '50px', position: 'absolute', marginTop: '1px' }} />
                    </div>
                </div>
                <div>
                    <img src='../assets/order.png' style={{ position: 'absolute', width: '500px', height: '400px' }} />
                </div>
            </div>

            <br></br><br></br><br></br><br></br><br></br><br></br>
            <div style={{ backgroundColor: '#0E0E0E' }}>
                <div className='footerChil1'>
                    <div style={{ marginRight: '500px', marginTop: '50px' }}>
                        <img src="../assets/Safirun-logo.png" style={{ marginLeft: '-400px' }} /><br></br>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: '250px', marginTop: '50px',}}>
                            <img src='../assets/PlaystoreBadges-011.jpg'></img>
                            <img src='../assets/PlaystoreBadges-021.jpg' style={{ marginLeft: '10px' }}></img>
                        </div>

                    </div>

                    <div className='footerChil2'>
                
                    {/* ,display:'flex',flexDirection:'relative',justifyContent:'space-between' */}

                        <Col style={{ fontFamily: 'D-DIN', fontWeight: 'bold', fontSize: '22px', lineHeight: '24px',position:'absolute',left:'-350px'}}> Our Company
            
                            <Space size='small' direction='vertical'>
                            <Row style={{ fontFamily: 'serif', fontSize: '15px', color: '#B0B0B0' , textAlign: 'left'}}>About Us</Row>
                                <Row style={{ fontFamily: 'D-DIN', fontWeight: 'normal', fontSize: '18px', lineHeight: '20px', color: '#B0B0B0' , textAlign: 'left'}}>Product</Row>
                                <Row style={{ fontFamily: 'D-DIN', fontWeight: 'normal', fontSize: '18px', lineHeight: '20px', color: '#B0B0B0', textAlign: 'left' }}>FAQ</Row>
                                <Row style={{ fontFamily: 'D-DIN', fontWeight: 'normal', fontSize: '18px', lineHeight: '20px', color: '#B0B0B0' , textAlign: 'left'}}>Career</Row>
                                <Row style={{ fontFamily: 'D-DIN', fontWeight: 'normal', fontSize: '18px', lineHeight: '20px', color: '#B0B0B0', textAlign: 'left' }}>Contact Us</Row>
                            </Space>
                        </Col>

                        <Col style={{ fontFamily: 'D-DIN', fontWeight: 'bold', fontSize: '22px', lineHeight: '24px',position:'absolute',left:'-150px' }}> Parters
                        <Space size='middle' direction='vertical'>
                            <Row style={{ fontFamily: 'serif', fontSize: '15px', color: '#B0B0B0', textAlign: 'left' }}>SafiRun For Busiess</Row>
                            <Row style={{ fontFamily: 'D-DIN', fontWeight: 'normal', fontSize: '18px', lineHeight: '20px', color: '#B0B0B0' , textAlign: 'left'}}>Restaurant Sign Up</Row>
                            <Row style={{ fontFamily: 'D-DIN', fontWeight: 'normal', fontSize: '18px', lineHeight: '20px', color: '#B0B0B0', textAlign: 'left' }}>Become a runnner</Row>
                            <Row style={{ fontFamily: 'D-DIN', fontWeight: 'normal', fontSize: '18px', lineHeight: '20px', color: '#B0B0B0', textAlign: 'left' }}>Terms Of Use</Row>
                            <Row style={{ fontFamily: 'D-DIN', fontWeight: 'normal', fontSize: '18px', lineHeight: '20px', color: '#B0B0B0', textAlign: 'left' }}>Privacy Police</Row>
                            </Space></Col>

                        <Col style={{ fontFamily: 'D-DIN', fontWeight: 'bold', fontSize: '22px', lineHeight: '24px',position:'absolute',left:'30px' }}> AREAS
            <Row style={{ fontFamily: 'D-DIN', fontWeight: 'normal', fontSize: '18px', lineHeight: '20px', color: '#B0B0B0' , textAlign: 'left'}}>Kigali</Row>

                        </Col>
                        
                    </div>
                </div>

                <hr style={{ width: '1265px' }}></hr>
                <div className='footerChil3' >
                    <div className='footerChil4'>
                        <div><img src='/assets/ico3.png' ></img></div>
                        <div><img src='/assets/ico1.png' style={{ marginLeft: '5px' }}></img></div>
                        <div><img src='/assets/ico2.png' ></img></div>
                        <div><img src='/assets/ico5.png' style={{ marginLeft: '5px' }}></img></div>
                        <div><img src='/assets/ico4.png' style={{ marginLeft: '5px' }}></img></div>
                        
                    </div>
                    <div>
                    </div>
                    <div style={{ marginLeft: '800px', color: 'white', marginTop: '-50px'}}>

                        <p>@Copyright 2021 SafiRun logistics ltd</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Middlesectio;
