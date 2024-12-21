import React from 'react';
import './About.css';

import Footer from '../Footer/Footer';
import {
  img1, img2, img3, img4, img5,
  img6
} from "../assets";


function Home() {
  return (

      <div className='home'>
        <div className='h1'>
          <h1>Extraordinary<br />Digital Experiences</h1>
        </div>

        <div className='home-image'>
          <img src={img1} alt="Digital Experience" />
          <div>
            <h2>We design, build and ship<br/> world-class digital products<br/> for forward-thinking brands.</h2>
          </div>
          <div className='home-image1'>
            <img src={img3} alt="Digital Experience" />
          </div>
        </div>

        <div className='home-image2'>
          <img src={img4} alt="Digital Experience" />
          <img src={img5} alt="Digital Experience" />
        </div>

        <div className='home-image3'>
          <img src={img6} alt="Digital Experience" />
        </div>

        <div className='home-about'>
        <h2>Great work for<br/> great people.</h2>
        
        <div className='home-content'>
        <div className='about-image'>
            <img src={img2} alt="Digital Experience" />
          </div>
          <div className='about-content1'>
            <h5>We put people first, understanding that a well-crafted product significantly impacts the lives
             of those who use it. By empowering users, we’re able to solve unique problems, accelerate progress 
             and unlock potential for our clients.<br/><br/> Our independent spirit drives our creative energy and approach 
             to technology, allowing us to ensure quality and consistently deliver outstanding outcomes.</h5>
            <button>About Us</button>
          </div>
          
          </div>  
        </div>
        <div className='Hcarousel'>
          <h1>What's New</h1>
      
        </div>
        <div className='Footer'>
        <Footer/>
        </div>
    </div>

  );
 
};

export default Home;
