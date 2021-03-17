import React from 'react';

const ChooseFlorist = ({ Locations }) => {
  return (
    <div>
      <h1>Choose A Florist</h1>
      <div className='ChooseFlorist'>
        {Locations.map((Location) => (
          <div key={location.id}>
            <img src={Location.floristImage} />
            <h3>{location.floristName}</h3>
            <p>{location.floristLocation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseFlorist;
