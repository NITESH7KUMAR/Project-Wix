import React from 'react';
import './Navbar.css';
import Expertise from '../Expertise/Expertise.js';

function Navbarhome() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Humaan</div>
        <div className="nav-links"> 
          <li className='nav-links1'><a href="/Home">Home</a></li>
          <li className='nav-links1'><a href="/About">About</a></li>
          <li className='nav-links1'><a href="/Work">Work</a></li>
          <li className='nav-linkss1 expertise-link '><Expertise/></li>
          <li className='nav-links1'><a href="/Contact">Contact</a></li>
        </div>
        <div className="logo1">Humaan</div>  
      </nav>
    </header>
  );
}

export default Navbarhome;