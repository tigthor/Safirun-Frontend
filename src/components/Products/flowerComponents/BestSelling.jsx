import React from 'react';
import { Card, Row, Col, Image, Layout } from 'antd';
import star from '../../../../public/Star.png';
import Flower1 from '../../../../public/assets/Flower1.png';
import Flower2 from '../../../../public/assets/Flower2.png';
import Flower3 from '../../../../public/assets/Flower3.png';
import Flower4 from '../../../../public/assets/Flower4.png';

const FloristData = [
    {
        mainPic: '../assets/Flower1.png',
        mainTitle: 'Aroma',
        mainDesc: '$$-Flowers-Delivery',
        infoTime: '20-30 min',
        infoRatingsText: '4.2',
        infoRatingsText2: '(200+)',
    },
    {
        mainPic: '../assets/Flower2.png',
        mainTitle: 'Ifeza',
        mainDesc: '$$-Flowers-Delivery',
        infoTime: '20-30 min',
        infoRatingsText: '4.2',
        infoRatingsText2: '(200+)',
    },
    {
        mainPic: '../assets/Flower3.png',
        mainTitle: 'JM Flowers',
        mainDesc: '$$-Flowers-Delivery',
        infoTime: '20-30 min',
        infoRatingsText: '4.2',
        infoRatingsText2: '(200+)',
    },
    {
        mainPic: '../assets/Flower4.png',
        mainTitle: 'Kimironko Market',
        mainDesc: '$$-Flowers-Delivery',
        infoTime: '20-30 min',
        infoRatingsText: '4.2',
        infoRatingsText2: '(200+)',
    }
]

const BestSelling = () => {
    return (
        <div className='BestSelling'>
        <Row align='middle'>
            <h1>Best Selling Flowers</h1>
            <div className='BestSelling_Items'>
                {
                    FloristData.map(data => (
                        <Card className='oneProductCard'>
                            <img src={data.mainPic} className='oneProductCard_MainPic' />
                            <h3 className='ProductCard_MainTitle'>{data.mainTitle}</h3>
                            <p className='ProductCard_Description'>{data.mainDesc}</p>
                            <div className='ProductCard_Additional_Info'>
                                <p className='ProductCard_Additional_Info_time'>{data.infoTime}</p>
                                <div className='ProductCard_Additional_Info_ratings'>
                                    <img className='ProductCard_Additional_Info_ratings_star' src={star} />
                                    <p className='ProductCard_Additional_Info_ratings_txt'>{data.infoRatingsText}</p>
                                    <p className='ProductCard_Additional_Info_ratings_text2'>{data.infoRatingsText2}</p>
                                </div>

                            </div>
                        </Card>
                    ))
                }
            </div>
        </Row>
        </div>
    )
}

export default BestSelling;
