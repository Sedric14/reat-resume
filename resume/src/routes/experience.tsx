// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import data from '../assets/data';

const Experience = () => {
  const items = data[3].screens;
  return (
    <div>
      <button>PREW</button>
      <button>NEXT</button>
      <div className="exp">
        {items?.map((itm, ind) => (
          <img className={`expItem${ind} expItem`} src={itm} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
