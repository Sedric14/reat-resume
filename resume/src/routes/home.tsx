import React from 'react';
import data from '../assets/data';

const Home = () => (
  <div>
    <div className="photo homePhoto"> </div>
    <div className="home">
      {data[0].text}
      <br />
      {data[0].text2}
    </div>
  </div>
);
export default Home;
