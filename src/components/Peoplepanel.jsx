import React from 'react';
import {
  Button,
  Divider,
  Card,
  Input,
  Space,
  Row,
  Col,
  Typography,
} from 'antd';
import twitter from '../assets/pics/twitter_ico.png';
import { motion } from 'framer-motion';
import food from '../assets/pictures/Food.png';
import mark from '../assets/pics/Mrmark.png';
import mason from '../assets/pics/Mrmason.png';
import ma from '../assets/pics/Mrna.png';

const Peoplepanel = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    },
  };
  return (
    <div className="WhatPeopleSayPanel">
      <div className="WhatPeopleSayPanel__Background" />
      <div className="dcom__container__large">
        <div className="WhatPeopleSayPanel__Box">
          <Space size="middle" direction="vertical">
            <h2 className="light">What people say about us</h2>
            <div className="HomepageDivider" />
            <div className="Main_Tweet_Box">
              <Row gutter={[206, 106]} className="Tweets">
                <Col span={60} className="tweet_box">
                  <Card>
                    <img src={mark} alt="" />
                    <Typography
                      style={{
                        position: 'relative',
                      }}
                    >
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{
                          repeat: Infinity,
                          duration: 18,
                          delay: 10,
                        }}
                      >
                        <p className="Tweet_text">
                          The amount of joy I get from reaching the number of
                          points required to get $20 off @safirun is probably
                          not normal. Alex
                        </p>
                        <img src={twitter} class="icon-twitter-bird"></img>
                      </motion.div>
                    </Typography>
                  </Card>
                </Col>
                <Col span={60} className="tweet_box">
                  <Card>
                    <img src={mason} alt="" />
                    <Typography
                      style={{
                        position: 'relative',
                      }}
                    >
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{
                          repeat: Infinity,
                          duration: 15,
                          delay: 7,
                        }}
                      >
                        <p className="Tweet_text">
                          Just convinced myself that it's "too late" to do
                          dishes so safirun it is. David
                        </p>
                        <img src={twitter} class="icon-twitter-bird"></img>
                      </motion.div>
                    </Typography>
                  </Card>
                </Col>
                <Col span={60} className="tweet_box">
                  <Card>
                    <img src={ma} alt="" />
                    <Typography
                      style={{
                        position: 'relative',
                      }}
                    >
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{
                          repeat: Infinity,
                          duration: 14,
                          delay: 5,
                        }}
                      >
                        <p className="Tweet_text">
                          Just convinced myself that it's "too late" to do
                          dishes so safirun it is. David
                        </p>
                        <img src={twitter} class="icon-twitter-bird"></img>
                      </motion.div>
                    </Typography>
                  </Card>
                </Col>
              </Row>
              <Row gutter={[206, 106]} className="Tweets">
                <Col span={60} className="tweet_box">
                  <Card>
                    <img src={mark} alt="" />
                    <Typography
                      style={{
                        position: 'relative',
                      }}
                    >
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{
                          repeat: Infinity,
                          duration: 10,
                          delay: 7,
                        }}
                      >
                        <p className="Tweet_text">
                          The amount of joy I get from reaching the number of
                          points required to get $20 off @safirun is probably
                          not normal. Alex
                        </p>
                        <img src={twitter} class="icon-twitter-bird"></img>
                      </motion.div>
                    </Typography>
                  </Card>
                </Col>
                <Col span={60} className="tweet_box">
                  <Card>
                    <img src={mason} alt="" />
                    <Typography
                      style={{
                        position: 'relative',
                      }}
                    >
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{
                          repeat: Infinity,
                          duration: 12,
                          delay: 3,
                        }}
                      >
                        <p className="Tweet_text">
                          Just convinced myself that it's "too late" to do
                          dishes so safirun it is. David
                        </p>
                        <img src={twitter} class="icon-twitter-bird"></img>
                      </motion.div>
                    </Typography>
                  </Card>
                </Col>
                <Col span={60} className="tweet_box">
                  <Card>
                    <img src={ma} alt="" />
                    <Typography
                      style={{
                        position: 'relative',
                      }}
                    >
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{
                          repeat: Infinity,
                          duration: 9,
                          delay: 1,
                        }}
                      >
                        <p className="Tweet_text">
                          Just convinced myself that it's "too late" to do
                          dishes so safirun it is. David
                        </p>
                        <img src={twitter} class="icon-twitter-bird"></img>
                      </motion.div>
                    </Typography>
                  </Card>
                </Col>
              </Row>
            </div>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Peoplepanel;
