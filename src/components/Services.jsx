import React from 'react';
import HT from '../../public/images/services/HT-LT-Erection-Service.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import { Autoplay,FreeMode } from 'swiper/modules';
import Members from './Members';
import Company from './Company';

const Services = () => {
  
  return (
    <>
      <div className="service-section container my-5">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Services</h6>
          <h1 className="mb-5">Our Services</h1>
        </div>

        
        <div className="  row  mt-5 ">
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 1500,
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
            <div className="" >
                  <div className="tpn_card">
            <img src={HT} className="w-100 mb-4" alt="HT Image" />
            <h5>HT LT Erection Service</h5>
            <p>Enjoy this clean styling.</p>
            <a href="javascript:;" className="btn tpn_btn">Explore</a>
          </div>
            </div>
            </SwiperSlide>
        <SwiperSlide>

            <div className="" >
                  <div className="tpn_card">
            <img src={HT} className="w-100 mb-4" alt="HT Image" />
            <h5>HT LT Erection Service</h5>
            <p>Enjoy this clean styling.</p>
            <a href="javascript:;" className="btn tpn_btn">Explore</a>
          </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>

            <div className="" >
                  <div className="tpn_card">
            <img src={HT} className="w-100 mb-4" alt="HT Image" />
            <h5>HT LT Erection Service</h5>
            <p>Enjoy this clean styling.</p>
            <a href="javascript:;" className="btn tpn_btn">Explore</a>
          </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>

            <div className="" >
                  <div className="tpn_card">
            <img src={HT} className="w-100 mb-4" alt="HT Image" />
            <h5>HT LT Erection Service</h5>
            <p>Enjoy this clean styling.</p>
            <a href="javascript:;" className="btn tpn_btn">Explore</a>
          </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>

            <div className="" >
                  <div className="tpn_card">
            <img src={HT} className="w-100 mb-4" alt="HT Image" />
            <h5>HT LT Erection Service</h5>
            <p>Enjoy this clean styling.</p>
            <a href="javascript:;" className="btn tpn_btn">Explore</a>
          </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>

            <div className="" >
                  <div className="tpn_card">
            <img src={HT} className="w-100 mb-4" alt="HT Image" />
            <h5>HT LT Erection Service</h5>
            <p>Enjoy this clean styling.</p>
            <a href="javascript:;" className="btn tpn_btn">Explore</a>
          </div>
            </div>
            </SwiperSlide>
          
        
          </Swiper>
        </div>
        
      
      </div>
      <Members/>
      <Company/>
    </>
  );
};

export default Services;
