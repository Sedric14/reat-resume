import React, { useEffect, useState } from 'react';
import aba from '../assets/aba';

const About = () => {
  const [subtitle, setSubtitle] = useState(' ');
  const txt = aba[1].text as string;
  let currentIndex = 0;

  useEffect(() => {
    const id = setInterval(() => {
      setSubtitle((prev) => prev + txt[currentIndex]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      currentIndex += 1;
      if (currentIndex === txt.length - 1) {
        clearInterval(id);
      }
    }, 15);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <div className="photo"> </div>
      <div className="about">{subtitle}</div>
    </div>
  );
};

export default About;
