import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import Arrow from '../../assets/pictures/right-arrow-solid-square-button.png';
import location from '../../assets/pictures/location.png';
import { Button, Divider, Card, Input, Space, Row } from 'antd';

const Readyorder = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'right',
          flexWrap: 'wrap',
          maxWidth: '1440px',
          height: '500px',
          backgroundColor: '#ffff',
        }}
      >
        <div
          className="readyToOrder"
          style={{ width: '718px', marginTop: '100px' }}
        >
          <h2>Ready To Order</h2>
          <p>
            Browser local restaurants and stores for<br></br>delively by enterig
            your adress below
          </p>
          <div>
            <img
              src="../assets/pin.png"
              style={{
                width: '27px',
                height: '27px',
                position: 'absolute',
                marginTop: '15px',
              }}
            ></img>

            <div className="SearchBox">
              <Input
                className="SearchInput"
                style={{
                  width: '497.58px',
                  top: '10px',
                  right: '3300px',
                  height: '44.59px',
                  margin: 'center',
                  borderRadius: '10px',
                  borderColor: 'transparent',
                  textAlign: 'center',
                }}
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
          </div>
        </div>
        <div>
          <img
            src="../assets/order.png"
            style={{ position: 'absolute', width: '500px', height: '400px' }}
          />
        </div>
      </div>
    );
}

export default Readyorder;