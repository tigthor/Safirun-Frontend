import React from 'react';
import { MdArrowForward } from 'react-icons/md';

const Whysafi = () => {
    return (
      <div>
        <div>
          <h1 className="text-2xl italic text-center transition-opacity lg:text-4xl">
            Why order with SAFIRUN
            </h1>
        </div>

        <div className="whyOrdersWithSafiRunPar">
          <div className="whyOrdersWithSafiRunChil1">
            <img src="../assets/why1.png" />
            <h2 className='text-2xl italic'>Variety</h2>
            <p style={{ fontFamily: 'serif', fontSize: '20px' }}>
              Restaurants and stores<br></br>deliverred to your doorstep
            </p>
          </div>

          <div className="whyOrdersWithSafiRunChil1">
            <img src="../assets/why2.png"/>
            <h2  className='text-2xl italic'>Lighting fast delivery</h2>
            <p style={{ fontFamily: 'serif', fontSize: '20px' }}>
              Join our delivery team <br></br>and earn to the go
            </p>
          </div>

          <div className="whyOrdersWithSafiRunChil1">
            <img src="../assets/why3.png"/>
            <h2  className='text-2xl italic'>Live order tracking</h2>
            <p style={{ fontFamily: 'serif', fontSize: '20px' }}>
              Know where your is at all<br></br>times from the store to your
              <br></br>doorstep
            </p>
          </div>
          <br></br>

          <div className="whyOrdersWithSafiRunChil1">
            <img src="../assets/why4.png"/>
            <h2  className='text-2xl italic'> Become a partner</h2>
            <p style={{ fontFamily: 'serif', fontSize: '20px' }}>
              Grow your business by<br></br>partnernig with us
            </p>
            <p style={{ color: '#039C00' }}>
              Sign up your store{' '}
            </p>
          </div>

          <div className="whyOrdersWithSafiRunChil1">
            <img src="../assets/why5.png"/>
            <h2  className='text-2xl italic'>Become a runner</h2>
            <p style={{ fontFamily: 'serif', fontSize: '20px' }}>
              Join our delivery team <br></br>and earn to the go
            </p>
            <p style={{ color: '#039C00' }}>
              Start earning today{' '}
            </p>
          </div>

          <div className="whyOrdersWithSafiRunChil1">
            <img src="../assets/why6.png"/>
            <h2  className='text-2xl italic'>Get the app</h2>
            <p
              style={{
                fontSize: '20px',
                fontWeight: 'normal',
              }}
            >
              Your favorite stores<br></br>all in one app
            </p>
            <p style={{ color: '#039C00' }}>
              Download the app{' '}
            </p>
          </div>
        </div>
      </div>
    );
}

export default Whysafi;