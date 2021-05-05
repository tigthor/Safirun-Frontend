import React, { Component, useState, useEffect } from 'react';
import ProductsNavbar from '../reusable/ProductsNavbar';
import DiscountPass from '../reusable/DiscountPass';
import Footer from '../../landing-page/reusable/Footer';
import { Radio, Space, Table } from 'antd';

const DrinksDiscription = () => {

    const [count, setCount] = useState(0);
    const handleClick = () => {
        return setCount(count + 1)
    };

    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };


    return (
        <div>
            <Space size="large" direction="vertical">
                <ProductsNavbar />
                <DiscountPass />
                <p className='drink4chil35'>Drinks / Wiskey</p>
                <div className='drink4chil12'>

                    <div className='drink4chil1'>
                        <img className='drink4chil2' src='../WhiskeyB.png'></img>
                    </div>

                    <div>
                        <div>
                            <p className='drink4chil11'>The Great Blue Whiskey</p>
                            <div className='drink4chil10'>
                                <img src='../star.png'></img>
                                <img src='../star.png'></img>
                                <img src='../star.png'></img>
                                <img src='../star.png'></img>
                                <img src='../star.png'></img>
                            </div>
                        </div>

                        <div className='drink4chil3'>
                            <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                                <tr>
                                    <th className='drink4chil5' colspan="2">50ml</th>
                                </tr>
                                <tr>
                                    <th className='drink4chil5' colspan="2">75ml</th>
                                </tr>
                                <tr>
                                    <th className='drink4chil5' colspan="2">100ml</th>
                                </tr>

                            </table>
                        </div>

                        <div>
                            <Radio.Group onChange={onChange} value={value}>
                                <div className='drink4chil4'><Radio className='drink4chil6' value={1}><p className='drink4chil9'>5000rwf</p></Radio><br></br></div>
                                <div className='drink4chil7'><Radio className='drink4chil6' value={2}><p className='drink4chil9'>9000rwf</p></Radio><br></br></div>
                                <div className='drink4chil8'><Radio className='drink4chil6' value={3}><p className='drink4chil9'>10,000rwf</p></Radio></div>
                            </Radio.Group>
                        </div>

                        <p className='drink4chil13'>Add To Cat</p>
                        <div className='drink4chil16'>
                            <p className='drink4chil14'>{count}</p>
                            <div className='drink4chil36'>
                                <button onClick={() => {
                                    return setCount(count + 1);
                                }}>+</button>
                                <button onClick={() => {
                                    return setCount(count - 1);
                                }}>-</button></div>
                        </div>
                        <div>

                            <div className='drink4chil17'>
                                <p style={{ fontWeight: 'bold' }}>BRAND / COMPANY</p>
                                <p>PINTA/NEGRA</p>
                            </div>
                            <div className='drink4chil18'>
                                <p style={{ fontWeight: 'bold' }}>STYLE/TYPE</p>
                                <p>CHARDONNAY</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='drink4chil21'>

                    <p>OFTEN BOUGHT WITH</p>
                    <div className='drink4chil40'>
                        <img className='drink4chil19' src='../WhiskeyB.png'></img>
                        <img className='drink4chil19' src='../WhiskeyB.png'></img>
                        <img className='drink4chil19' src='../WhiskeyB.png'></img>
                        <img className='drink4chil19' src='../WhiskeyB.png'></img>
                        <img className='drink4chil20' src='../drink4Arrow2.png'></img>
                    </div>

                </div>
                <div className='drink4chil34'>
                    <hr className='drink4chil33'></hr>
                    <div className='drink4chil32'>
                        <p className='drink4chil31'>RATINGS & REVIEW</p>
                        <div className='drink4chil27'>

                            <div>
                                <p className='drink4chil28'>4.2</p>
                            </div>
                            <div>
                                <div className='drink4chil30'>
                                    <img className='drink4chil23' src='../StarWhite.png'></img>
                                    <img className='drink4chil23' src='../StarWhite.png'></img>
                                    <img className='drink4chil23' src='../StarWhite.png'></img>
                                    <img className='drink4chil23' src='../StarWhite.png'></img>
                                    <img className='drink4chil23' src='../StarWhite.png'></img>
                                </div>
                                <p className='drink4chil29'>3.2 Reviewers</p>
                            </div>
                        </div>
                    </div>
                    <hr className='drink4chil26'></hr>
                    <div className='drink4chil25'>
                        <div>
                            <div className='drink4chil22'>
                                <div className='drink4chil10'>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                </div>
                                <p className='drink4chil24'>Two Months Ago</p>
                            </div>
                            <p>Lovely Test</p>
                            <p>Pascal</p>
                        </div>
                    </div>
                    <hr className='drink4chil26'></hr>

                    <div className='drink4chil25'>
                        <div>
                            <div className='drink4chil22'>
                                <div className='drink4chil10'>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                </div>
                                <p className='drink4chil24'>Two Months Ago</p>
                            </div>
                            <p>Lovely Test</p>
                            <p>Pascal</p>
                        </div>
                    </div>
                    <hr className='drink4chil26'></hr>

                    <div className='drink4chil25'>
                        <div>
                            <div className='drink4chil22'>
                                <div className='drink4chil10'>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                </div>
                                <p className='drink4chil24'>Two Months Ago</p>
                            </div>
                            <p>Lovely Test</p>
                            <p>Pascal</p>
                        </div>
                    </div>
                    <hr className='drink4chil26'></hr>

                    <div className='drink4chil25'>
                        <div>
                            <div className='drink4chil22'>
                                <div className='drink4chil10'>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                </div>
                                <p className='drink4chil24'>Two Months Ago</p>
                            </div>
                            <p>Lovely Test</p>
                            <p>Pascal</p>
                        </div>
                    </div>
                    <hr className='drink4chil26'></hr>

                    <div className='drink4chil25'>
                        <div>
                            <div className='drink4chil22'>
                                <div className='drink4chil10'>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                </div>
                                <p className='drink4chil24'>Two Months Ago</p>
                            </div>
                            <p>Lovely Test</p>
                            <p>Pascal</p>
                        </div>
                    </div>
                    <hr className='drink4chil26'></hr>

                    <div className='drink4chil25'>
                        <div>
                            <div className='drink4chil22'>
                                <div className='drink4chil10'>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                    <img className='drink4chil23' src='../star.png'></img>
                                </div>
                                <p className='drink4chil24'>Two Months Ago</p>
                            </div>
                            <p>Lovely Test</p>
                            <p>Pascal</p>
                        </div>
                    </div>
                    <hr className='drink4chil26'></hr>
                    <div className='drink4chil37'>
                        <img className='drink4chil38' src='../drink4Arrow2.png'></img>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <img className='drink4chil39' src='../drink4Arrow2.png'></img>
                    </div>
                </div>




                <Footer />
            </Space>
        </div>

    );
}

export default DrinksDiscription;