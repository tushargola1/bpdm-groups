import React from 'react'

const Topbtn = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Optional, adds smooth scrolling behavior
        });
      };
  return (
    <>
     <div className="top-btn" onClick={scrollToTop}>
     <i class="fa fa-chevron-up"></i>

     </div>
    </>
  )
}

export default Topbtn
