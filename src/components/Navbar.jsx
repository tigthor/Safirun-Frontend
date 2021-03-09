import React from 'react'
import { motion } from 'framer-motion'
import { Card, Row, Col } from 'antd'
import how_it_works1 from '../assets/how_it_works1.png';
import how_it_works2 from '../assets/how_it_works2.png';
import how_it_works3 from '../assets/how_it_works3.png';
import how_it_works4 from '../assets/how_it_works4.png';

const Navbar = () => {
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
          <p className="text_how_it_works">How it works</p>
          <div className="div_how_it_works">
            <Row>
              <Col>
                <Card>
                  <h6></h6>
                  <img src={how_it_works1} />
                  <p></p>
                </Card>
              </Col>
              <Col>
                <Card>
                  <h6></h6>
                  <img src={how_it_works1} />
                  <p></p>
                </Card>
              </Col>
              <Col>
                <Card>
                  <h6></h6>
                  <img src={how_it_works1} />
                  <p></p>
                </Card>
              </Col>
              <Col>
                <Card>
                  <h6></h6>
                  <img src={how_it_works1} />
                  <p></p>
                </Card>
              </Col>
            </Row>
          </div>
        </Card>
        <a href="/create">
          <bold> Sign in </bold>
        </a>
        <div class="text-box">
          <a href="#" class="btn btn-white btn-animate">
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
