// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react';
import data from '../assets/data';

const Experience = () => {
  const items = data[3].screens as string[];
  let exp = document.querySelector('.exp') as HTMLElement;
  let currentIndex = 0;
  function move(a: string) {
    if (a === '-') {
      currentIndex -= 1;
    } else {
      currentIndex += 1;
    }
    //  ? () : ();
    // currentIndex += 1;
    if (exp) {
      exp.style.transform = `rotateY(${currentIndex * 45}deg)`;
      exp.style.transition = '1s';
    }
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    exp = document.querySelector('.exp') as HTMLElement;
    const childs = exp?.children as unknown as HTMLImageElement[];
    for (let i = 0; i < childs.length; i += 1) {
      childs[i].style.transform = `rotateY(${i * (360 / childs.length)}deg) translateZ(25vw)`;
    }
    // exp.style.animation = `spin 60s infinite linear`;
  });
  return (
    <div className="expPage">
      <button className="prew" onClick={() => move('-')}>
        PREW
      </button>
      <button className="next" onClick={() => move('')}>
        NEXT
      </button>
      <div className="slider">
        <div className="exp">
          {items?.map((itm, ind) => (
            // eslint-disable-next-line react/no-array-index-key
            <img className={`expItem${ind} expItem`} src={itm} key={ind} />
          ))}
        </div>
        <div className="ground">.</div>
      </div>
    </div>
  );
};

export default Experience;
