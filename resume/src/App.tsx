import React from 'react';
import { Link } from 'react-router-dom';
import Router from './routes';
import './styles/vendors.scss';

const App = () => (
  <main className="main">
    <ul className="linksContainer">
      <li>
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="link">
          About
        </Link>
      </li>
      <li>
        <Link to="/skills" className="link">
          Skills
        </Link>
      </li>
      <li>
        <Link to="/experience" className="link">
          Experience
        </Link>
      </li>
      <li>
        <Link to="/education" className="link">
          Education
        </Link>
      </li>
      <li>
        <Link to="/contacts" className="link">
          Contacts
        </Link>
      </li>
      <li>
        <a
          href="https://raw.githubusercontent.com/Sedric14/assets/main/wallpaper.jpg"
          download
          className="link"
        >
          Download
        </a>
        {/* <Link to="/download" className="link">
          Download
        </Link> */}
      </li>
    </ul>
    <Router />
  </main>
);

export default App;
