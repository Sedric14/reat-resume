import React from 'react';
import aba from '../assets/data';

const Home = () => (
  <div>
    <div className="photo homePhoto"> </div>
    <div className="home">
      {aba[0].text}
      <br />
      {aba[0].text2}
    </div>
  </div>
);
export default Home;
