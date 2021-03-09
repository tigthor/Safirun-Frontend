import React from 'react';
import logo from '../assets/pictures/Beer.png';
import { motion } from 'framer-motion';
import { Card } from 'antd';

const Navbar = () => {
  return (
    <div className="navbar">
      <i
        style={{
          width: '174px',
          height: '69px',
          // paddingLeft: '92px',
          // paddingBottom: '29px',
        }}
      />
      <div className="links">
        <Card className="nav_How_it_works">
          <p>How it works</p>
          <div>
            <Row>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
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
};

export default Navbar;
