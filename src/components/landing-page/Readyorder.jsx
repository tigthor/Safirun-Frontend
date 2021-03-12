import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import Arrow from '../../assets/pictures/right-arrow-solid-square-button.png';
import location from '../../assets/pictures/location.png';
import { Button, Input, Space } from 'antd';

const Readyorder = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'right',
                flexWrap: 'wrap',
                maxWidth: '1340px',
                height: '400px',
                backgroundColor: '#ffff'
            }}
        >
            <div
                className="readyToOrder"
            >
                <Space size="middle" direction="vertical">
                    <h2
                    style={{
                        textAlign: 'left',
                        marginLeft: '100px',
                        fontSize: '40px'
                    }}
                    >Ready To Order</h2>
                    <p style={{
                        textAlign: 'left',
                        marginLeft: '100px'
                    }}>
                        Browser local restaurants and stores for<br></br>delively by enterig
            your adress below
          </p>
                    <div>
                        <div className="SearchBox">
                            <Input
                                className="SearchInput"
                                style={{
                                    width: '357.58px',
                                    top: '10px',
                                    left: '-300px',
                                    height: '44.59px',
                                    margin: 'center',
                                    marginLeft: '100px',
                                    borderRadius: '10px',
                                    // borderColor: 'transparent',
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
                                    left: '110px',
                                    top: '9.5px',
                                    height: '30px',
                                    width: '28.42px',
                                }}
                            />
                        </div>
                    </div>
                </Space>

            </div>
            <div>
                <img
                    src="../assets/order.png"
                    style={{ position: 'absolute', width: '610px', height: '400px' }}
                />
            </div>
        </div>
    );
}

export default Readyorder;