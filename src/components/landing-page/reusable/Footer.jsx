import React from 'react';
import { Button, Divider, Card, Input, Space, Row, Col } from 'antd';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#0E0E0E' }}>
      <div className="footerChil1">
        <div style={{ marginRight: '500px', marginTop: '50px' }}>
          <img
            src="assets/Safirun-logo.png"
            style={{ marginLeft: '-400px' }}
          />
          <br></br>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginRight: '250px',
              justifyItems: 'baseline',
              // marginTop: '50px',
            }}
          >
            <img
              src='assets/apple2.png'
              style={{
                height: '150px',
                width: '150px',
              }}
            ></img>
            <img
              src='assets/pics/googlepaly.png'
              style={{
                marginLeft: '10px',
                backgroundColor: 'black',
                height: '85px',
                width: '150px',
                marginTop: '30px',
              }}
            ></img>
          </div>
        </div>

        <div className="footerChil2">
          {/* ,display:'flex',flexDirection:'relative',justifyContent:'space-between' */}

          <Col
            style={{
              fontFamily: 'D-DIN',
              fontWeight: 'bold',
              fontSize: '22px',
              lineHeight: '24px',
              position: 'absolute',
              left: '-350px',
            }}
          >
            {' '}
            Our Company
            <Space size="small" direction="vertical">
              <Row
                style={{
                  fontFamily: 'serif',
                  fontSize: '15px',
                  color: '#B0B0B0',
                  textAlign: 'left',
                }}
              >
                About Us
              </Row>
              <Row
                style={{
                  fontFamily: 'D-DIN',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  lineHeight: '20px',
                  color: '#B0B0B0',
                  textAlign: 'left',
                }}
              >
                Product
              </Row>
              <Row
                style={{
                  fontFamily: 'D-DIN',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  lineHeight: '20px',
                  color: '#B0B0B0',
                  textAlign: 'left',
                }}
              >
                FAQ
              </Row>
              <Row
                style={{
                  fontFamily: 'D-DIN',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  lineHeight: '20px',
                  color: '#B0B0B0',
                  textAlign: 'left',
                }}
              >
                Career
              </Row>
              <Row
                style={{
                  fontFamily: 'D-DIN',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  lineHeight: '20px',
                  color: '#B0B0B0',
                  textAlign: 'left',
                }}
              >
                Contact Us
              </Row>
            </Space>
          </Col>

          <Col
            style={{
              fontFamily: 'D-DIN',
              fontWeight: 'bold',
              fontSize: '22px',
              lineHeight: '24px',
              position: 'absolute',
              left: '-150px',
            }}
          >
            {' '}
            Parters
            <Space size="middle" direction="vertical">
              <Row
                style={{
                  fontFamily: 'serif',
                  fontSize: '15px',
                  color: '#B0B0B0',
                  textAlign: 'left',
                }}
              >
                SafiRun For Busiess
              </Row>
              <Row
                style={{
                  fontFamily: 'D-DIN',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  lineHeight: '20px',
                  color: '#B0B0B0',
                  textAlign: 'left',
                }}
              >
                Restaurant Sign Up
              </Row>
              <Row
                style={{
                  fontFamily: 'D-DIN',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  lineHeight: '20px',
                  color: '#B0B0B0',
                  textAlign: 'left',
                }}
              >
                Become a runnner
              </Row>
              <Row
                style={{
                  fontFamily: 'D-DIN',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  lineHeight: '20px',
                  color: '#B0B0B0',
                  textAlign: 'left',
                }}
              >
                Terms Of Use
              </Row>
              <Row
                style={{
                  fontFamily: 'D-DIN',
                  fontWeight: 'normal',
                  fontSize: '18px',
                  lineHeight: '20px',
                  color: '#B0B0B0',
                  textAlign: 'left',
                }}
              >
                Privacy Police
              </Row>
            </Space>
          </Col>

          <Col
            style={{
              fontFamily: 'D-DIN',
              fontWeight: 'bold',
              fontSize: '22px',
              lineHeight: '24px',
              position: 'absolute',
              left: '30px',
            }}
          >
            {' '}
            AREAS
            <Row
              style={{
                fontFamily: 'D-DIN',
                fontWeight: 'normal',
                fontSize: '18px',
                lineHeight: '20px',
                color: '#B0B0B0',
                textAlign: 'left',
              }}
            >
              Kigali
            </Row>
          </Col>
        </div>
      </div>

      <hr style={{ width: '1265px' }}></hr>
      <div className="footerChil3">
        <div className="footerChil4">
          <div>
            <img src="../../assets/ico3.png"></img>
          </div>
          <div>
            <img
              src="../../assets/ico1.png"
              style={{ marginLeft: '5px' }}
            ></img>
          </div>
          <div>
            <img src="../../assets/ico2.png"></img>
          </div>
          <div>
            <img
              src="../../assets/ico5.png"
              style={{ marginLeft: '5px' }}
            ></img>
          </div>
          <div>
            <img
              src="../../assets/ico4.png"
              style={{ marginLeft: '5px' }}
            ></img>
          </div>
        </div>
        <div></div>
        <div
          style={{ marginLeft: '800px', color: 'white', marginTop: '-50px' }}
        >
          <p>@Copyright 2021 SafiRun logistics ltd</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
