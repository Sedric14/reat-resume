import React, { useEffect, useState } from 'react';
import data from '../assets/data';

const About = () => {
  const [subtitle, setSubtitle] = useState(' ');
  const txt = data[1].text as string;
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
      <h2>ABOUT ME</h2>
      <div className="photo"> </div>
      <div className="about">{subtitle}</div>
    </div>
  );
};

export default About;
