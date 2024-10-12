import React,{useState} from 'react';
import "./Expertise.css";

function Expertise() {

  const[isOpen,setIsopen]=useState(false);

  const toggleDropdown = () =>{
    setIsopen(!isOpen);
  }

  return (
    <>
    <div className='dropdown'>
     <button  className='dropbtn'  onClick={toggleDropdown}>Expertise</button>
      <ul className={`dropdown-content ${isOpen ? 'show' : "hide"}`}>
        <div className='expertise-container'>
           <div className='expertise-section'>  
              <h3>What We Do</h3>
              <li>Strategy & UX</li>
              <li>Design</li>
              <li>Websites</li>
              <li>Mobile Apps</li>
              <li>Web Apps</li>
              <li>Headless</li>
            </div> 
            <div className='expertise-section'>
             <h3> Experience</h3>
              <li>Commercial</li>
              <li>Not for Profit</li>
              <li>Education</li>
              <li>Startups</li>
              <li>eCommerce</li>
              <li>Data Vis</li>
            </div>
          </div>
      </ul>
    </div>
    </>
  )
}

export default Expertise