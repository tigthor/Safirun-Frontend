import React from 'react';

const Readyorder = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'right',
          flexWrap: 'wrap',
          width: '1440px',
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

            <input
              type="text"
              placeholder="Enter Delivery adress"
              style={{ width: '355px', height: '47px', textAlign: 'center' }}
            ></input>

            <MdArrowForward
              style={{
                color: 'white',
                backgroundColor: '#000000',
                width: '58px',
                height: '50px',
                position: 'absolute',
                marginTop: '1px',
              }}
            />
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