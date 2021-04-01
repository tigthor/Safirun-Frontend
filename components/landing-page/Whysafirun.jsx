import React from 'react';
import { MdArrowForward } from 'react-icons/md';

const Whysafi = () => {
    return (
      <div>
        <div>
          <h1 className="light">Why order with SAFIRUN</h1>
        </div>

        <div className="whyOrdersWithSafiRunPar">
          <div className="whyOrdersWithSafiRunChil1">
            <img src="../assets/why1.png" />
            <h2>Variety</h2>
            <p style={{ fontFamily: 'serif', fontSize: '20px' }}>
              Restaurants and stores<br></br>deliverred to your doorstep
            </p>
          </div>

          <div className="whyOrdersWithSafiRunChil1">
            <img src="../assets/why2.png" style={{}} />
            <h2>Lighting fast delivery</h2>
            <p style={{ fontFamily: 'serif', fontSize: '20px' }}>
              Join our delivery team <br></br>and earn to the go
            </p>
          </div>

          <div className="whyOrdersWithSafiRunChil1">
            <img src="../assets/why3.png" style={{}} />
            <h2>Live order tracking</h2>
            <p style={{ fontFamily: 'serif', fontSize: '20px' }}>
              Know where your is at all<br></br>times from the store to your
              <br></br>doorstep
            </p>
          </div>
          <br></br>

          <div className="whyOrdersWithSafiRunChil1">
            <img src="../assets/why4.png" style={{}} />
            <h2>Become a partner</h2>
            <p style={{ fontFamily: 'serif', fontSize: '20px' }}>
              Grow your business by<br></br>partnernig with us
            </p>
            <p style={{ color: '#039C00' }}>
              Sign up your store{' '}
              <MdArrowForward
                style={{
                  color: 'black',
                  backgroundColor: '#CCCCCC',
                  borderRadius: '20px',
                }}
              />
            </p>
          </div>

          <div className="whyOrdersWithSafiRunChil1">
            <img src="../assets/why5.png" style={{}} />
            <h2>Become a runner</h2>
            <p style={{ fontFamily: 'serif', fontSize: '20px' }}>
              Join our delivery team <br></br>and earn to the go
            </p>
            <p style={{ color: '#039C00' }}>
              Start earning today{' '}
              <MdArrowForward
                style={{
                  color: 'black',
                  backgroundColor: '#CCCCCC',
                  borderRadius: '20px',
                }}
              />
            </p>
          </div>

          <div className="whyOrdersWithSafiRunChil1">
            <img src="../assets/why6.png" style={{}} />
            <h2>Get the app</h2>
            <p
              style={{
                fontFamily: 'serif',
                fontSize: '20px',
                fontWeight: 'normal',
              }}
            >
              Your favorite stores<br></br>all in one app
            </p>
            <p style={{ color: '#039C00' }}>
              Download the app{' '}
              <MdArrowForward
                style={{
                  color: 'black',
                  backgroundColor: '#CCCCCC',
                  borderRadius: '20px',
                }}
              />
            </p>
          </div>
        </div>
      </div>
    );
}

export default Whysafi;