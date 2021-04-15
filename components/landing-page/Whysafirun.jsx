import React from 'react';
import { MdArrowForward } from 'react-icons/md';
import { Space } from 'antd';

const Whysafi = () => {
  const whySafiData = [
    {
      imgSrc: '../assets/why1.png',
      title: 'Variety',
      reason: 'Restaurants and store deliverred to your doorstep'
    },
    {
      imgSrc: '../assets/why2.png',
      title: 'Lighting fast delivery',
      reason: 'Join our delivery team and earn to the go'
    },
    {
      imgSrc: '../assets/why3.png',
      title: 'Live order tracking',
      reason: 'Know where your is at all times from the store to your'
    },
    {
      imgSrc: '../assets/why4.png',
      title: 'Become a partner',
      reason: 'Grow your business by partnernig with us'
    },
    {
      imgSrc: '../assets/why5.png',
      title: 'Become a runner',
      reason: 'Join our delivery team and earn to the go'
    },
    {
      imgSrc: '../assets/why6.png',
      title: 'Get the app',
      reason: 'Your favorite stores all in one app'
    }
  ]

  return (
    <div className='w-full max-w-full'>
      <div>
        <h1 className="text-2xl text-center transition-opacity lg:text-4xl">
          WHY ORDER WITH SAFIRUN
            </h1>
      </div>
      <div className="flex w-4/5 ml-auto mr-auto">
        <div
          className='flex flex-row flex-wrap content-between w-full space-x-5 text-center rounded'
        >
          {whySafiData.map(data => (
            <div className="WhySafiSingle">
              <img src={data.imgSrc} className='w-32' />
              <div>
                <h2 className='text-2xl'>{data.title}</h2>
                <p>
                  {data.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Whysafi;