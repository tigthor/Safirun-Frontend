import React from 'react';

const Locserved = () => {
    return (
      <div
        style={{
          // maxWidth: '700px',
          height: '500px',
        }}
      >
        <h1>Location we currently serve</h1>
        <img
          src="../../assets/map.png"
          style={{
            maxWidth: '700px',
            maxHeight: '300px',
          }}
        ></img>
      </div>
    );
}

export default Locserved;