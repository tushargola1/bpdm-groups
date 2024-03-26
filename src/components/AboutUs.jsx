import React, { useState, useEffect } from 'react';
import aboutImage from '../../public/images/about-vid.mp4' 

import Banner from './Banner'

const AboutUs = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
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
    <Banner title = 'About Us'/>
    <div className="container about-us">
        <div className="row g-4">
            <div className="col-md-6 left">
                <p>High Quality Tactical Solutions</p>
                <h4>    Finding A Permanent Solution Is Our Ultimate Goal!</h4>
            </div>
            <div className="col-md-6 right">
                <h5>Since 1995, Our Team Has Succeeded In Understanding The Needs Of The Industry And Creating Reliable Products To Serve Them All.</h5>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
</p><p>
Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
            </div>
        </div>
    </div>


  {/* numbers */}

    <div className="counter-wrapper content-wrapper-about ">
        <div className="counter">
          <h1 className="count" data-target="1254">{counts[0]}</h1>
          <p>Products</p>
        </div>
        <div className="counter">
          <h1 className="count" data-target="12168">{counts[1]}</h1>
          <p>Years of Experience</p>
        </div>
        <div className="counter">
          <h1 className="count" data-target="2172">{counts[2]}</h1>
          <p>Completed Projects</p>
        </div>
      
      </div>
   
    
    <div className=" container w-100">
      <div className="about-content w-100">
         <h5>Quality Comes First! We Make Sure That Every Minute Detail Is Looked Into While Manufacturing Even The Smallest Product. Our Focus Is 100% On Client Needs And Satisfaction.</h5>
      </div>
     
    </div>



    {/* why us  */}

    <div className="container my-5">
      <div className="row why-us g-md-5 g-4">
        <div className="col-xl-4 left col-lg-6">
<p>Innovative Solutions</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolores modi esse nemo ipsum. Adipisci neque, perferendis aperiam ab error distinctio dolorum eum vel. Amet eligendi minus non inventore animi!
Dolor velit voluptate soluta debitis facere enim. Est repellendus, sint, debitis quo dignissimos voluptatum dolorem itaque, odio ipsa mollitia doloribus quidem adipisci. In, laborum. Minus odit sit odio tempore voluptatum.
Qui nemo perferendis atque omnis ut sint explicabo ab nihil illo, dolor repellendus adipisci aliquid dicta ipsam molestias ipsum iusto neque natus, minima quas fuga! Illum architecto eum adipisci consectetur.</p>
        </div>
        <div className="col-xl-4 middle col-lg-6">
          <p>Quality Unsurpassed</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolores modi esse nemo ipsum. Adipisci neque, perferendis aperiam ab error distinctio dolorum eum vel. Amet eligendi minus non inventore animi!
Dolor velit voluptate soluta debitis facere enim. Est repellendus, sint, debitis quo dignissimos voluptatum dolorem itaque, odio ipsa mollitia doloribus quidem adipisci. In, laborum. Minus odit sit odio tempore voluptatum.
Qui nemo perferendis atque omnis ut sint explicabo ab nihil illo, dolor repellendus adipisci aliquid dicta ipsam molestias ipsum iusto neque natus, minima quas fuga! Illum architecto eum adipisci consectetur.</p>
        </div>
        <div className="col-xl-4 right d-none d-xl-block">
        <video src={aboutImage} loop autoPlay muted className='about-video ' ></video>

        </div>
      </div>
    </div>
  
    </>
  )
}

export default AboutUs
