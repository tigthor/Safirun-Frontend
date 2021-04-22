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
import { motion } from 'framer-motion';
import Connect from './reusable/connectWithus';

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
          <Space size="middle" direction="vertical" wrap='true'>
            <h2 className="light">What people say about us</h2>
            <div className="Main_Tweet_Box">
              <Row gutter={[206, 106]} className="Tweets">
                <Col span={60} className="tweet_box">
                  <Card>
                    {/*<motion.div
                      initial="hidden"
                      animate="visible"
                      variants={variants}
                      transition={{
                        repeat: Infinity,
                        duration: 28,
                        delay: 19,
                      }}
                    >*/}
                      <img src='../../assets/pics/Mrmark.png' alt="" />
                      <Typography
                        style={{
                          position: 'relative',
                        }}
                      >
                        <p className="Tweet_text">
                          The amount of joy I get from reaching the number of
                          points required to get $20 off @safirun is probably
                          not normal. Alex
                        </p>
                        <img src='assets/pics/twitter_ico.png' className="icon-twitter-bird"></img>
                      </Typography>
                    {/* </motion.div> */}
                  </Card>
                </Col>
                <Col span={60} className="tweet_box">
                  <Card>
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
                      <img src='assets/pics/Mrmason.png' alt="" />
                      <Typography
                        style={{
                          position: 'relative',
                        }}
                      >
                        <p className="Tweet_text">
                          Just convinced myself that it's "too late" to do
                          dishes so safirun it is. David
                        </p>
                        <img src='assets/pics/twitter_ico.png' className="icon-twitter-bird"></img>
                      </Typography>
                    </motion.div>
                  </Card>
                </Col>
                <Col span={60} className="tweet_box">
                  <Card>
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
                      <img src='assets/pics/Mrna.png' alt="" />
                      <Typography
                        style={{
                          position: 'relative',
                        }}
                      >
                        <p className="Tweet_text">
                          Just convinced myself that it's "too late" to do
                          dishes so safirun it is. David
                        </p>
                        <img src='assets/pics/twitter_ico.png' className="icon-twitter-bird"></img>
                      </Typography>
                    </motion.div>
                  </Card>
                </Col>
              </Row>
              <Row gutter={[206, 106]} className="Tweets">
                <Col
                  span={60}
                  style={{
                    textAlign: 'center',
                    /* text-justify: auto; */
                    maxWidth: '150px',
                    height: '210px',
                  }}
                >
                  <Card>
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
                      <img src='assets/pics/Missjane.png' alt="" />
                      <Typography
                        style={{
                          position: 'relative',
                        }}
                      >
                        <p className="Tweet_text">
                          The amount of joy I get from reaching the number of
                          points required to get $20 off @safirun is probably
                          not normal. Alex
                        </p>
                        <img src='assets/pics/twitter_ico.png' className="icon-twitter-bird"></img>
                      </Typography>
                    </motion.div>
                  </Card>
                </Col>
                <Col
                  span={60}
                  style={{
                    maxWidth: '270px',
                    height: '210px',
                    backgroundColor: '#ffff',
                  }}
                >
                  <Connect />
                </Col>
                <Col
                  span={60}
                  style={{
                    textAlign: 'center',
                    /* text-justify: auto; */
                    maxWidth: '150px',
                    height: '210px',
                  }}
                >
                  <Card>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={variants}
                      transition={{
                        repeat: Infinity,
                        duration: 28,
                        delay: 14,
                      }}
                    >
                      <img src='assets/pics/Mrna.png' alt="" />
                      <Typography
                        style={{
                          position: 'relative',
                        }}
                      >
                        <p className="Tweet_text">
                          Just convinced myself that it's "too late" to do
                          dishes so safirun it is. David
                        </p>
                        <img src='assets/pics/twitter_ico.png' className="icon-twitter-bird"></img>
                      </Typography>
                    </motion.div>
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
