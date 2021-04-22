import React from 'react';
import { Card, Space } from 'antd';

const ChooseStore = ({ Locations,Styles, title }) => {
  return (
    <div style={Styles}>
    <Space size='small' direction='vertical'>
      <h1>{title}</h1>
      <Space size='large' direction='horizontal' wrap='true' className='ChooseStore'>
        {Locations.map((Location) => (
          <Card key={Location.id} className='ChooseStoreCard'>
            <img src={Location.storeImage} className='ChooseStoreCard_Image'/>
            <div className='ChooseStoreCard_Text'>
            <h3>{Location.storeName}</h3>
            <p>{Location.storeLocation}</p>
            </div>
          </Card>
        ))}
        </Space>
      </Space>
    </div>
  );
};

export default ChooseStore;
