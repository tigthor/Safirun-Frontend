import React from 'react';
import { Card, Space } from 'antd';

const ChooseFlorist = ({ Locations }) => {
  return (
    <div>
    <Space size='small' direction='vertical'>
      <h1>Choose A Florist</h1>
      <div className='ChooseFlorist'>
        {Locations.map((Location) => (
          <Card key={Location.id} className='ChooseFloristCard'>
            <img src={Location.floristImage} className='ChooseFloristCard_Image'/>
            <div className='ChooseFloristCard_Text'>
            <h3>{Location.floristName}</h3>
            <p>{Location.floristLocation}</p>
            </div>
          </Card>
        ))}
      </div>
      </Space>
    </div>
  );
};

export default ChooseFlorist;
