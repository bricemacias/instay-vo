import React from 'react';
import icons from '../../images/sprite.svg';
import { Opacity } from '../../animations';

const InConstruction = () => {
  return (
    <Opacity duration={1}>
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
    </Opacity>
  );
};

export default InConstruction;
