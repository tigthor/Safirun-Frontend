import React from 'react';
import { MdArrowForward } from 'react-icons/md';

const Marketplace = () => {

  const Data = [
    {
      url: '../../assets/food1.png',
      text: 'FOOD',
      backgroudColor: '#C2773C',
    },
    {
      url: '../../assets/drinks2.png',
      text: 'DRINKS',
      backgroudColor: '#813F5A',
    },
    {
      url: '../../assets/GROCERIES2.png',
      text: 'GROCERIES',
      backgroudColor: '#589D16',
    },
    {
      url: '../../assets/PHARMACY-ESSENTIALS2.png',
      text: 'PHARMACY & ESSENTIALS',
      backgroudColor: '#3F85B8',
    },
    {
      url: '../../assets/FLORIST2.png',
      text: 'FLORIST',
      backgroudColor: '#AB2B1A',
    },
    {
      url: '../../assets/UTILITIES2.png',
      text: 'UTILITIES',
      backgroudColor: '#004CE7',
    },
  ];
    return (
      <div>
        <div className="marketPlaceChil1">
          <h1 className="light">SAFIRUN market place </h1>
          <div style={{ display: 'flex', position: 'relative' }}>
            <p
              className="viewMore"
              style={{ marginRight: '20px', marginBottom: '-40px' }}
            >
              Vew more
            </p>
            <p>
              <MdArrowForward
                style={{
                  color: 'black',
                  height: '27px',
                  width: '27px',
                  marginLeft: '80px',
                  marginTop: '-12px',
                  position: 'absolute',
                  left: '10px',
                  top: '18px',
                  backgroundColor: '#CCCCCC',
                  borderRadius: '20px',
                }}
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

                  height: '57px',
                  fontFamily: 'poppis',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  lineHeight: '33px',
                  position: 'absolute',
                  bottom: '-4px',
                  left: '0px',
                  borderRadius: '3px',
                  color: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {data.text}
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
                bottom: '-4px',
                borderRadius: '3px',
                left: '-0px',
                height: '57px',
              }}
            >
              SHOPPIG
            </p>
          </div>
        </div>
      </div>
    );
}

export default Marketplace;