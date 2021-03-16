import React from 'react';
import { MdArrowForward } from 'react-icons/md';

const Marketplace = () => {
  const Data = [
    {
      url: '../../assets/food1.png',
      text: 'FOOD',
      backgroudColor: '#C2773C',
      href: 'food'
    },
    {
      url: '../../assets/drinks2.png',
      text: 'DRINKS',
      backgroudColor: '#813F5A',
      href: 'drinks'
    },
    {
      url: '../../assets/GROCERIES2.png',
      text: 'GROCERIES',
      backgroudColor: '#589D16',
      href: 'groceries'
    },
    {
      url: '../../assets/PHARMACY-ESSENTIALS2.png',
      text: 'PHARMACY & ESSENTIALS',
      backgroudColor: '#3F85B8',
      href: 'pharmacy'
    },
    {
      url: '../../assets/FLORIST2.png',
      text: 'FLORIST',
      backgroudColor: '#AB2B1A',
      href: 'florist'
    },
    {
      url: '../../assets/UTILITIES2.png',
      text: 'UTILITIES',
      backgroudColor: '#004CE7',
      href: 'utilities'
    },
  ];
  return (
    <div>
      <div className="marketPlaceChil1">
        <h1 className="light">SAFIRUN market place </h1>
        <div style={{ display: 'flex', position: 'relative', flexDirection: 'row'}}>
          <p
            className="viewMore"
            style={{ marginRight: '20px', marginBottom: '-40px' }}
          >
            View more
          </p>
          <p>
            <MdArrowForward
            className='ViewMore_arrow'
               type='button'
            />
          </p>
        </div>
      </div>
      <div className="marketPlaceChil2">
        {Data.map((data) => (
          <div className="marketPlaceChil3">
            <img
              src={data.url}
              style={{
                width: '342px',
                height: '303px',
                left: '539px',
                borderRadius: '3px',
                top: '1002px',
              }}
            />
            <p
              style={{
                backgroundColor: `${data.backgroudColor}`,
                width: '342px',
                color: '#FFFFFF',
                position: 'absolute',
                justifyContent: 'center',
                textAlign: 'center',
                verticalAlign: 'middle',
                bottom: '-4px',
                borderRadius: '3px',
                left: '-0px',
                height: '57px',
                lineHeight: '57px',
              }}
            >
                <a href={data.href} style={{
                    textDecoration: 'none',
                    color: '#FFFFFF'
                }}>
              {data.text}</a>
            </p>
          </div>
        ))}
        <div className="marketPlaceChil3">
          <img
            src="../assets/SHOPPIN2.png"
            style={{
              width: '1042px',
              height: '246px',
              borderRadius: '3px',
              left: '539px',
              top: '1002px',
              
            }}
          />
          <p
            style={{
              backgroundColor: '#750062',
              width: '1042px',
              color: '#FFFFFF',
              position: 'absolute',
              justifyContent: 'center',
              textAlign: 'center',
              verticalAlign: 'middle',
              bottom: '-4px',
              borderRadius: '3px',
              left: '-0px',
              height: '57px',
              lineHeight: '57px',
            }}
          >
            SHOPPING
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
