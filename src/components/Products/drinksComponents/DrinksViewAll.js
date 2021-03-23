import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { MdArrowForward } from 'react-icons/md';
import { Space } from 'antd'
import Footer from '../../landing-page/reusable/Footer'
import ProductsNavbar from '../reusable/ProductsNavbar';
import DiscountPass from '../reusable/DiscountPass';

const DrinksViewAll = () => {

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
        <div>
            <Space size="large" direction="vertical">
                <ProductsNavbar />
                <DiscountPass />
            </Space>


            <div style={{ display: 'flex', position: 'relative', marginTop: '-15px' }}>
                <div className='drink2Chil1'>
                    <div class='drink2Chil2'>
                        <h1 style={{ color: 'white', fontWeight: 'bold', fontSize: '65px', marginLeft: '300px' }}>Bottle of<br></br> perfection </h1>
                        <p style={{ color: 'white', fontWeight: 'bold', marginLeft: '300px', fontSize: '25px', lineHeight: '80px' }}>Drink responsibly</p>
                        <p style={{ border: '2px solid white', borderRadius: '20px', width: '150px', marginLeft: '300px', color: 'white', fontWeight: 'bold', lineHeight: '50px', paddingLeft: '40px', paddingRight: '20px', fontSize: '20px' }}>ORDER NOW</p>
                    </div>
                    <img src='../wines.png' style={{ marginRight: '80px' }} />
                </div>
                <div className='drink2Chil4'>
                    <img src='../Ellipse.png' style={{ marginLeft: '10px' }}></img>
                    <img src='../Ellipse.png' style={{ marginLeft: '10px' }}></img>
                    <img src='../Ellipse.png' style={{ marginLeft: '10px' }}></img>
                    <img src='../Ellipse.png' style={{ marginLeft: '10px' }}></img>
                    <img src='../Ellipse.png' style={{ marginLeft: '10px' }}></img>
                </div>
            </div>

            <div className='drink2Chil5'>
                {
                    Values.map(values => (
                        <div>
                            <img src={values.url}></img>
                            <p>{values.text}</p>
                        </div>
                    ))
                }
            </div>

            <div> <hr className='drink2Chil8'></hr></div>
            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                <div>
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Red Wine</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>White Wine</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Rose's Winer</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Cases of wine</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Vodka</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Champagne & Sparkling wine</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Creamy Liqueur</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Snacks</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Wisky $ Scotch</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Tequila & Mezcal</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Rum</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Beer</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Gin</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Mixers,Water & Sodas</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Tobacco</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Canned Drinks</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Non Alcoholic</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Brand & Cognac</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
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
                    <div className='drink2Chil3'>
                        <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Bourbor</h1>
                        <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                    </div>
                    <div className='drink2Chil6'>
                        {
                            Whisky.map(whisky => (
                                <div className='drink2Chil7'>
                                    <div style={{ position: 'relative' }}>
                                        <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                                        <img src={whisky.url}></img>
                                    </div>

                                    <p>{whisky.text}</p>
                                    <p>{whisky.sub1}</p>
                                    <p>{whisky.sub2}</p>
                                </div>
                            ))
                        }</div>

                    <div>
                        <div className='drink2Chil3'>
                            <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-180px', color: '#000000', fontWeight: 'bold' }}>Grassware & Accessories</h1>
                            <p style={{ fontWeight: 'bold', marginRight: '40px' }}>View All</p>
                        </div>
                        <div className='drink2Chil6'>
                            {
                                Whisky.map(whisky => (
                                    <div className='drink2Chil7'>
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
            </div>
            <Footer />
        </div>
    )

}
export default DrinksViewAll;

