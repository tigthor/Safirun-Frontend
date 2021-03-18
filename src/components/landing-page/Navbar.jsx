import React from 'react'
import { Card, Row, Col } from 'antd'

const Navbar = () => {

  const howItWorksData = [
    {
      title: 'Download the app',
      imgSrc: 'how_it_works1.png',
      body: 'Available on Appstore and Google play'
    },
    {
      title: 'Place yor order',
      imgSrc: 'how_it_works2.png',
      body: 'Enter your address find what you are looking for'
    },
    {
      title: 'We handle the rest',
      imgSrc: 'how_it_works3.png',
      body: 'We work with the merchant to make sure everything is ready for delivery and pickup'
    },
    {
      title: 'The runner arrives',
      imgSrc: 'how_it_works2.png',
      body: '..Or you pick it up.Either way,you will get the 20 delivery points for every $1 spent Enter your address find what you are looking for'
    }
  ]

  return (

    <div className="navbar">
      <i
        style={{
          width: '174px',
          height: '69px',
        }}
      />
      <div className="links">
        <Card className="nav_How_it_works">
          <h4 className="text_how_it_works">How it works</h4>
          <div className="div_how_it_works">
            <Row className="row_how_it_works">
              {howItWorksData.map(howItWorks => (
                <Col>
                <Card className='how_it_works_card'>
                  <h6>{howItWorks.title}</h6>
                  <img src={howItWorks.imgSrc} />
                  <p className="how_it_work_p">
                    {howItWorks.body}
                  </p>
                </Card>
              </Col>
              ))} 
            </Row>
          </div>
        </Card>
        <a href="/create">
          <bold> Sign in </bold>
        </a>
        <div className="text-box">
          <a href="#" className="btn btn-white btn-animate">
            <span
              style={{
                color: '#EAA24D',
                position: 'relative',
                top: '-8px',
                left: '-1px',
              }}
            >
              Signup
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar
