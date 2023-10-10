import React, { useEffect, useState } from 'react';
import aba from '../../assets/aba';

const Home = () => {
  const [subtitle, setSubtitle] = useState(' ');
  const text = aba[0];
  let currentIndex = 0;

  useEffect(() => {
    const id = setInterval(() => {
      setSubtitle((prev) => prev + text[currentIndex]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      currentIndex += 1;
      if (currentIndex === text.length - 1) {
        clearInterval(id);
      }
    }, 30);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <div className="photo"> </div>
      <div className="home">{subtitle}</div>
    </div>
  );
};

export default Home;
