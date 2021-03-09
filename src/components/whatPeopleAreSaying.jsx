import React from 'react';
import { Button, Divider, Card, Input, Space, Row, Typography } from 'antd';
import { motion } from 'framer-motion';
import food from '../assets/pictures/Food.png';
import beer from '../assets/pictures/Beer.png';
import bags from '../assets/pictures/Bags.png';
import medics from '../assets/pictures/Florist4.png';
import packages from '../assets/pictures/Florist5.png';
import fire from '../assets/pictures/Florist7.png';

const Peoplesay = () => {
  return (
    <Row>
      <Card>
        <img src={food} alt="" />
        <motion.div
        // animate={{
        //   scale: [1, 2, 2, 1, 1],
        //   rotate: [0, 0, 270, 270, 0],
        //   borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        // }}
        // transition={{ repeat: Infinity, duration: 2 }}
        >
          <Typography>I like Safirun</Typography>
        </motion.div>
      </Card>
      <Card>
        <img src={beer} alt="" />
        <motion.div
        // animate={{
        //   scale: [1, 2, 2, 1, 1],
        //   rotate: [0, 0, 270, 270, 0],
        //   borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        // }}
        // transition={{ repeat: Infinity, duration: 2 }}
        >
          <Typography>I like Safirun</Typography>
        </motion.div>
      </Card>
      <Card>
        <img src={food} alt="" />
        <motion.div
        // animate={{
        //   scale: [1, 2, 2, 1, 1],
        //   rotate: [0, 0, 270, 270, 0],
        //   borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        // }}
        // transition={{ repeat: Infinity, duration: 2 }}
        >
          <Typography>I like Safirun</Typography>
        </motion.div>
      </Card>
      <Card>
        <img src="'assets/pictures/customers.jpg" alt="" />
        <motion.div
        // animate={{
        //   scale: [1, 2, 2, 1, 1],
        //   rotate: [0, 0, 270, 270, 0],
        //   borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        // }}
        // transition={{ repeat: Infinity, duration: 2 }}
        >
          <Typography>I like Safirun</Typography>
        </motion.div>
      </Card>
      <Card>
        <img src="'assets/pictures/Florist7.png" alt="" />
        <motion.div
        // animate={{
        //   scale: [1, 2, 2, 1, 1],
        //   rotate: [0, 0, 270, 270, 0],
        //   borderRadius: ['20%', '20%', '50%', '50%', '20%'],
        // }}
        // transition={{ repeat: Infinity, duration: 2 }}
        >
          <Typography>I like Safirun</Typography>
        </motion.div>
      </Card>
    </Row>
  );
};

export default Peoplesay;
