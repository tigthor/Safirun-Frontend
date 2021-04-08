import React from 'react';
import { Space } from 'antd'

const Locserved = () => {
  return (
    <Space direction='vertical' size='small'>
      <h1
        className='text-2xl italic text-center transition-opacity lg:text-4xl'
      >Location we currently serve</h1>
      <img src="../../assets/map.png" style={{
        maxWidth: 'calc(100%)'
      }}></img>
    </Space>
  );
}

export default Locserved;