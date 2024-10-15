import React from 'react';
import './Home.css';
import Hcarousel from './Hcarousel';
import {
  img1, img2, img3, img4, img5,
  img6
} from "../assets";


function Home() {
  return (
    <>
      <div className='home'>
        <div className='h1'>
          <h1>Extraordinary<br />Digital Experiences</h1>
        </div>
        <div className='home-image'>
          <img src={img1} alt="Digital Experience" />
        </div>
        <div className='h2'>
          <h2>We design, build and ship world-class digital products for forward-thinking brands.</h2>
        </div>
        <div className='slide1'>
          <img src={img3} alt="Digital Experience" />
          <img src={img4} alt="Digital Experience" />
          <img src={img5} alt="Digital Experience" />
          <img src={img6} alt="Digital Experience" />
        </div>
        <div>
          <h3>About Us</h3>
          <div className='home-image'>
            <img src={img2} alt="Digital Experience" />
          </div>
          <h2>Great work for great people.</h2>
          <h5>We put people first, understanding that a well-crafted product significantly impacts the lives
             of those who use it. By empowering users, we’re able to solve unique problems, accelerate progress 
             and unlock potential for our clients. Our independent spirit drives our creative energy and approach 
             to technology, allowing us to ensure quality and consistently deliver outstanding outcomes.</h5>
        </div>
        <div className='Hcarousel'>
          <h1>What's New</h1>
          <Hcarousel/>
          <h1> .............. </h1>
        </div>
        <h1>Nitesh Is Good Boy</h1>
      </div>
     
    </>
  );
 
   
 

};

export default Home;
