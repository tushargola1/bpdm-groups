import React from 'react'
import HT from '../../public/images/company/TATA.svg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import { Autoplay,FreeMode } from 'swiper/modules';
const Company = () => {
  return (
    <>
       <div className="company-section container my-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">clients</h6>
          {/* <h1 className="mb-5">Our Services</h1> */}
        </div>

        
        <div className="  row  mt-5 container company-carousel ">
        <Swiper
        slidesPerView={5}
        spaceBetween={10}
        centeredSlides={true}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
         
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView:3,
            spaceBetween: 50    ,
          },
        }}
        modules={[Autoplay ,FreeMode]}
        className="mySwiper "
      >
        <SwiperSlide>
        
                  <div className="company-logo">
            <img src={HT} className="w-25" alt="HT Image" />
           
          </div>
        
            </SwiperSlide>
        <SwiperSlide>

          
                  <div className="company-logo">
            <img src={HT} className="w-25" alt="HT Image" />
     
          </div>
            
            </SwiperSlide>
            <SwiperSlide>

         
                  <div className="company-logo ">
            <img src={HT} className="w-25" alt="HT Image" />
       
          </div>
      
            </SwiperSlide>
            <SwiperSlide>

                  <div className="company-logo">
            <img src={HT} className="w-25" alt="HT Image" />
       
          </div>
          
            </SwiperSlide>
            <SwiperSlide>

           
                  <div className="company-logo">
            <img src={HT} className="w-25" alt="HT Image" />
       
          </div>
           
            </SwiperSlide>
            <SwiperSlide>

            
                  <div className="company-logo">
            <img src={HT} className="w-25" alt="HT Image" />
       
          </div>
   
            </SwiperSlide>
          
        
          </Swiper>
        </div>
        
      
      </div>
    </>
  )
}

export default Company
