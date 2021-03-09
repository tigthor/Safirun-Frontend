import React from 'react'
import logo from '../assets/pictures/Beer.png'
import { motion } from 'framer-motion'
import { Card, Row } from 'antd'

const Navbar = () => {
  return (
    <div className='navbar'>
      <i
        style={{
          width: '174px',
          height: '69px',
        }}
      />
      <div className='links'>
        <Card className='nav_How_it_works'>
          <p className='text_how_it_works'>How it works</p>
          <div className="div_how_it_works">
            <Row>
              <Card>
                <h6></h6>
                <img src='' />
                <p></p>
              </Card>
              <Card>
                <h6></h6>
                <img src='' />
                <p></p>
              </Card>
              <Card>
                <h6></h6>
                <img src='' />
                <p></p>
              </Card>
              <Card>
                <h6></h6>
                <img src='' />
                <p></p>
              </Card>
            </Row>
          </div>
        </Card>
        <a href='/create'>
          <bold> Sign in </bold>
        </a>
        <div class='text-box'>
          <a href='#' class='btn btn-white btn-animate'>
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
  )
}

export default Navbar
