import { Space } from 'antd';
import React from 'react';
const Favresto = () => {
    return (
      <div className="favoriteRestoPar">
        <div style={{  marginTop: '150px' }}>
          <Space direction="vertical" size="middle" wrap='true'>
            <h3
              className="fontF"
              style={{
                textAlign: 'left',
                fontStyle: 'normal',
                fontWeight: '600px',
                fontSize: '35px',
                lineHeight: '35px',
              }}
            >
              Favorite Restaurants &<br></br> Stores in your pocket
            </h3>
            <p style={{ textAlign: 'left' }}>
              Order from your favorite restaurants and stores,<br></br>with the
              all-new SAFIRUN app.
            </p>
            <h4 style={{ textAlign: 'left' }}>DISCOVER. ORDER. TRACK IN APP</h4>
          </Space>
          <img src="../PlaystoreBadges-011.jpg" style={{
            marginTop: '30px'
          }}></img>
          <img src="../PlaystoreBadges-021.jpg"></img>
        </div>
        <div className="favoriteRestochil1">
          <img
            src="../../Safiapps.png" 
            style={{
              width: "300px"
            }}
          ></img>
        </div>
      </div>
    );
}

export default Favresto;