import React from 'react';
import icons from '../img/sprite.svg';

const InConstruction = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
      }}
    >
      <svg style={{ width: '14rem', height: '14rem', margin: '0 auto' }}>
        <use xlinkHref={`${icons}#icon-traffic-cone`} />
      </svg>
      <span style={{ margin: '2rem auto', fontSize: '2.5rem' }}>
        In Construction
      </span>
    </div>
  );
};

export default InConstruction;
