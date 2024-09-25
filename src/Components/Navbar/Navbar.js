
import React from 'react';
import './Navbar.css';

function Navbarhome() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">humaan</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#expertise">Expertise</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}




export default Navbarhome;