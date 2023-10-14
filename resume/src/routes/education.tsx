import React from 'react';
// import data from '../assets/data';
import data from '../assets/data';

const Education = () => {
  const ed = data[4] as unknown as string[];
  return (
    <>
      <h2>EDUCATION</h2>
      <div className="education">
        <div>
          <img
            className="sert1"
            src="https://raw.githubusercontent.com/Sedric14/assets/main/portfolio/sert1.png"
            alt="frontend sertificate"
          />
          <h3>{ed[0]}</h3>
        </div>
        <div>
          <img
            className="sert3"
            src="https://raw.githubusercontent.com/Sedric14/assets/main/portfolio/sert3.png"
            alt="english sertificate"
          />
        </div>
        <div>
          <img
            className="sert2"
            src="https://raw.githubusercontent.com/Sedric14/assets/main/portfolio/sert2.png"
            alt="react sertificate"
          />
          <h3>{ed[1]}</h3>
        </div>
      </div>
    </>
  );
};

export default Education;
