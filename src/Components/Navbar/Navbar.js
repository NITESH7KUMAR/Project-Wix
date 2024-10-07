import React from 'react';
import './Navbar.css';

function Navbarhome() {
  return (
    <body>
    <header className="header">
      <nav className="navbar">
        <div className="logo">Humaan</div>
        <ul className="nav-links">
          <li><a href="/Home">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Work">Work</a></li>
          <li><a href="/Expertise">Expertise</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
        <div className="logo">Humaan</div>
      </nav>
    </header>
    </body>
  );
}




export default Navbarhome;