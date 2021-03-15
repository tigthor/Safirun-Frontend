import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Divider, Card, Input, Space, Row } from 'antd';
import { RightSquareFilled } from '@ant-design/icons';
import Arrow from '../../assets/pictures/right-arrow-solid-square-button.png';
import location from '../../assets/pictures/location.png';
import icon1 from '../../assets/pictures/Beer.png'
import icon2 from '../../assets/pictures/Food.png'
import icon3 from '../../assets/pictures/Bags.png'
import icon4 from '../../assets/pictures/Florist4.png'
import icon5 from '../../assets/pictures/Florist5.png'
import icon6 from '../../assets/pictures/Florist6.png'
import icon7 from '../../assets/pictures/Florist7.png';

const HomePage2 = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className="Homepage2">
      <div className="SiteSearchPanel__SearchBlock__Inner">
        <div className="SiteSearchPanel__SearchBlock__OpacityContainer">
          <Space size="middle" direction="vertical" style={{
              paddingBottom: '200px'
          }}>
            <Row>
              <div className="SiteSearchPanel__SearchBlock__Inner__Logo icon-delivery-logo">
                We deliver Wines & Spirits
              </div>
            </Row>
            <Row>
              <div className="SiteSearchPanel__Icons">
                <motion.div
                  animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                ></motion.div>
                <img
                  src={icon1}
                  className="SiteSearchPanel__Icons__Icon icon-food "
                  role="button"
                />

                <img
                  src={icon2}
                  className="SiteSearchPanel__Icons__Icon icon-food "
                  role="button"
                />
                <img
                  src={icon3}
                  className="SiteSearchPanel__Icons__Icon icon-food "
                  role="button"
                />
                <img
                  src={icon4}
                  className="SiteSearchPanel__Icons__Icon icon-food "
                  role="button"
                />
                <img
                  src={icon5}
                  className="SiteSearchPanel__Icons__Icon icon-food "
                  role="button"
                />
                <img
                  src={icon6}
                  className="SiteSearchPanel__Icons__Icon icon-food "
                  role="button"
                />
                <img
                  src={icon7}
                  className="SiteSearchPanel__Icons__Icon icon-food "
                  role="button"
                />
              </div>
            </Row>
            <Row>
              <div>
                <h3
                  style={{
                    margin: 'center',
                    textAlign: 'center',
                    fontSize: '18',
                  }}
                >
                  Your eco-friendly delivery to your doorstep.
                </h3>
              </div>
            </Row>
            <Row>
              <div className="SearchBox">
                <Input
                  className="SearchInput"
                  placeholder="Enter Delivery Address to See The Menu"
                ></Input>
                <Button
                  type="primary"
                  className="SearchArrow"
                  icon={
                    <img
                      style={{
                        height: '50px',
                        position: 'absolute',
                        width: '58.42px',
                        left: '-2.5px',
                        bottom: '-3.5px',
                      }}
                      src={Arrow}
                    />
                  }
                ></Button>
                <img
                  src={location}
                  style={{
                    position: 'absolute',
                    left: '6px',
                    top: '9.5px',
                    height: '30px',
                    width: '38.42px',
                  }}
                />
              </div>
            </Row>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default HomePage2;
