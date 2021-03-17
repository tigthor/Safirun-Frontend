import React from 'react';

const ChooseFlorist = ({ locations }) => {
  return (
    <div>
      <h1>Choose A Florist</h1>
      <div>
        {locations.map((location) => (
          <div key={location.id}>
            <img src={location.floristImage} />
            <h3>{location.floristName}</h3>
            <p>{location.floristLocation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseFlorist;
