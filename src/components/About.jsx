import React, { useState, useEffect } from 'react';
import aboutImage from '../../public/images/about-vid.mp4' 
import Services from './Services';
import { Link } from 'react-router-dom';

const About = () => {
    const [counts, setCounts] = useState([0, 0, 0, 0]);
  const speed = 97;

  useEffect(() => {
    const updateCounts = () => {
      const newCounts = counts.map((count, index) => {
        const target = document.querySelectorAll('.count')[index].getAttribute('data-target');
        const inc = target / speed;
        return count < target ? Math.floor(inc + count) : Number(target);
      });
      setCounts(newCounts);
    };

    const countInterval = setInterval(updateCounts, 15);

    return () => clearInterval(countInterval);
  }, [counts]);
  return (
    <>
        {/* <!-- About Start --> */}
    <div className="container-xxl py-5 about">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{"min-height": "400px"}}>
                    <div className="position-relative h-100">
                        {/* <img className="img-fluid position-absolute w-100 h-100 about-img" src={aboutImage} alt="" style={{"object-fit": "cover"}}/> */}
                        <video src={aboutImage} loop autoPlay muted className='about-video ' ></video>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp about-section" data-wow-delay="0.3s">
                    <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 className="mb-4">Welcome to <span className="text-primary">BPDM</span></h1>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
               
                    <div className="row gy-2 gx-4 mb-4">
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>First Class Flights</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Handpicked Hotels</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>5 Star Accommodations</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Latest Model Vehicles</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>150 Premium City Tours</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                        </div>
                    </div>
                    <Link to= {'/about'} className="btn btn-primary py-3 px-5 mt-2" >Read More</Link>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}

{/* counter section */}
    <div className="counter-wrapper">
        <div className="counter">
          <h1 className="count" data-target="1254">{counts[0]}</h1>
          <p>New Visitors Every Week</p>
        </div>
        <div className="counter">
          <h1 className="count" data-target="12168">{counts[1]}</h1>
          <p>Happy customers every year</p>
        </div>
        <div className="counter">
          <h1 className="count" data-target="2172">{counts[2]}</h1>
          <p>Won Amazing Awards</p>
        </div>
        <div className="counter">
          <h1 className="count" data-target="732">{counts[3]}</h1>
          <p>New Listing Every Week</p>
        </div>
      </div>


    <Services/>
    {/* <Members/> */}
    </>
  )
}

export default About

