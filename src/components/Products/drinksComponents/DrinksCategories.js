import React, { Component } from 'react';
// import { MenuOutlined } from '@ant-design/icons'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { MdArrowForward } from 'react-icons/md';
import Layout from 'antd/lib/layout/layout';
import { Space, Card, Row, Col, Radio } from 'antd'



  const DrinksCategories = () => {
  const pageStyles = [
    {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '1000px',
    }
  ]
  const Text = [
    {
      text1: 'Chardonnay',
    },
    {
      text1: 'Pinot Noir',
    },
    {
      text1: 'Meriot',
    },
    {
      text1: 'port',
    },
    {
      text1: 'Rioja',
    },
    {
      text1: 'Phone',
    },
    {
      text1: 'Sangria',
    },
    {
      text1: 'Port',
    },
    {
      text1: 'Rioja',
    },
    {
      text1: 'Phone',
    },
    {
      text1: 'Sangria',
    },
    {
      text1: 'Rioja',
    },
    {
      text1: 'Phone',
    },
    {
      text1: 'Sangria',
    },
  ]

  const Chardonnay = [
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Chardonnay',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Four Cousins',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Penfolds',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Massetto',
      sub2: '1l | 20,000 RWF'
    },

  ]

  const Pinot = [
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Pinot Noir',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Pinot Noir',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Pinot Noir',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Pinot Noir',
      sub2: '1l | 20,000 RWF'
    },

  ]

  const Melrot = [
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Melrot',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Melrot',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Melrot',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Melrot',
      sub2: '1l | 20,000 RWF'
    },

  ]



  const Port = [
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Port',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Port',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Port',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Port',
      sub2: '1l | 20,000 RWF'
    },

  ]

  const Rioja = [
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Rioja',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Rioja',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Rioja',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Rioja',
      sub2: '1l | 20,000 RWF'
    },

  ]

  const Phone = [
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Phone',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Phone',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Phone',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Phone',
      sub2: '1l | 20,000 RWF'
    },

  ]

  const Sangria = [
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Sangria',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Sangria',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Sangria',
      sub2: '1l | 20,000 RWF'
    },
    {
      url: '../winRed.png',
      text: 'Sweet Red Wine',
      sub1: 'Sangria',
      sub2: '1l | 20,000 RWF'
    },

  ]
  const { Sider } = Layout;

  return (
    <div>
      <div className='drink3Chil1'>
        <p className='drink3Chil3'>Free Delively +10% Off With SafiRun Pass</p>
      </div>
      <div className='drink3Chil4'>
        <img src="../RecdWine.png" className='drink3Chil2' />
        <p className='drink3Chil5'>Red Wine</p>
      </div>

      <div className='drink3Chil6'>
        {
          Text.map(text => (
            <p className='drink3Chil7'>{text.text1}</p>
          ))
        }
      </div>
      <div className='drink3Chil8'>
        <Layout className='drink3Chil12'>
          <div>
            <Space size='medium' direction='vertical'>
              <Col>FILTER BY<br></br><br></br>
                <Space size='middle' direction='vertical'>
                  <Col>Sort</Col>
                  <Row style={{ fontWeight: 'normal' }}><Radio>Delivery</Radio></Row>
                  <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal' }}>PickUp</Radio></Row>
                  <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal' }}>Dine In</Radio></Row>
                  <Row><Radio style={{ color: '#2E2929', fontWeight: 'normal' }}>Dine In</Radio></Row>
                </Space>
              </Col>

            </Space>

          </div>
        </Layout>
        <Layout>

          <div className='drink3Chil9'>
            <div>
              <div className='fooderChil9'>
                <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-170px', color: '#000000', fontWeight: 'bold' }}>Chardonnay</h1>
                <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px', marginRight: '50px' }} />
              </div>
              <div style={pageStyles[0]}>
                {
                  Chardonnay.map(chardonnay => (
                    <div className='drinkChil8'>
                      <div style={{ position: 'relative' }}>
                        <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                        <img src={chardonnay.url}></img>
                      </div>

                      <p>{chardonnay.text}</p>
                      <p>{chardonnay.sub1}</p>
                      <p>{chardonnay.sub2}</p>
                    </div>
                  ))
                }
              </div>
            </div>

            <br></br><br></br><br></br>
            <div>
              <div className='fooderChil9'>
                <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-170px', color: '#000000', fontWeight: 'bold' }}>Pinot noir</h1>
                <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px', marginRight: '50px' }} />
              </div>
              <div className='drink3Chil13'>
                {
                  Pinot.map(pinot => (
                    <div className='drinkChil8'>
                      <div style={{ position: 'relative' }}>
                        <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                        <img src={pinot.url}></img>
                      </div>

                      <p>{pinot.text}</p>
                      <p>{pinot.sub1}</p>
                      <p>{pinot.sub2}</p>
                    </div>
                  ))
                }
              </div>
            </div>

            <br></br><br></br><br></br><div>
              <div className='fooderChil9'>
                <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-170px', color: '#000000', fontWeight: 'bold' }}>Melrot</h1>
                <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px', marginRight: '50px' }} />
              </div>
              <div className='drink3Chil13'>
                {
                  Melrot.map(melrot => (
                    <div className='drinkChil8'>
                      <div style={{ position: 'relative' }}>
                        <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                        <img src={melrot.url}></img>
                      </div>

                      <p>{melrot.text}</p>
                      <p>{melrot.sub1}</p>
                      <p>{melrot.sub2}</p>
                    </div>
                  ))
                }
              </div>
            </div>

            <br></br><br></br><br></br>
            <div>
              <div className='fooderChil9'>
                <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-170px', color: '#000000', fontWeight: 'bold' }}>Port</h1>
                <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px', marginRight: '50px' }} />
              </div>
              <div className='drink3Chil13'>
                {
                  Port.map(port => (
                    <div className='drinkChil8'>
                      <div style={{ position: 'relative' }}>
                        <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                        <img src={port.url}></img>
                      </div>

                      <p>{port.text}</p>
                      <p>{port.sub1}</p>
                      <p>{port.sub2}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <br></br><br></br><br></br>
            <div>
              <div className='fooderChil9'>
                <h1 style={{ fontSize: '26.9px', lineHeight: '40px', marginLeft: '-170px', color: '#000000', fontWeight: 'bold' }}>Rioja</h1>
                <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px', marginRight: '50px' }} />
              </div>
              <div className='drink3Chil13'>
                {
                  Rioja.map(rioja => (
                    <div className='drinkChil8'>
                      <div style={{ position: 'relative' }}>
                        <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                        <img src={rioja.url}></img>
                      </div>

                      <p>{rioja.text}</p>
                      <p>{rioja.sub1}</p>
                      <p>{rioja.sub2}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <br></br><br></br><br></br>
            <div>
              <div className='fooderChil9'>
                <h1 style={{ fontSize: '26.9px', lineHeight: '40px', color: '#000000', fontWeight: 'bold' }}>Phone</h1>
                <MdArrowForward style={{ color: 'black', height: '27px', width: '27px', backgroundColor: '#CCCCCC', borderRadius: '20px' }} />
              </div>
              <div className='drink3Chil13'>
                {
                  Phone.map(phone => (
                    <div className='drinkChil8'>
                      <div style={{ position: 'relative' }}>
                        <img src='../shopCart.png' style={{ position: 'absolute', marginLeft: '120px' }}></img>
                        <img src={phone.url}></img>
                      </div>

                      <p>{phone.text}</p>
                      <p>{phone.sub1}</p>
                      <p>{phone.sub2}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <br></br><br></br><br></br>
          </div>
        </Layout>
      </div>
    </div>
  )
}

export default DrinksCategories;

