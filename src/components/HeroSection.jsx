import React from 'react'
import img from '../../public/images/background/hero-banner-image.jpg'
import { FaArrowDown } from "react-icons/fa";
import About from './About';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <>
    
<div className="hero-section">
      <div className="gradient"></div>
       <div className="content container">
       <div className="contentSection">
      <p> World's Leading Industry Corporation</p>
      <h1> ONE INDUSTRY ALL <br /> SOLUTION</h1>
      <Link to={'/about'} className="btn btn-primary rounded-pill py-2 px-4">Learn More</Link>
   
       </div>


       </div>
       <div className="arrow">
  
<FaArrowDown/>
</div>
      </div>

<About/>
        
    </>
  )
}

export default HeroSection
