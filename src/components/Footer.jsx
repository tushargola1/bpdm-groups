import React from 'react';
import logo from '../assets/logo/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional, adds smooth scrolling behavior
    });
  };

  return (
    <>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      <div className="footer ">
        <footer className=" text-center text-lg-start text-white">
          {/* <!-- Grid container --> */}
          <div className="container p-4">
            {/* <!--Grid row--> */}
            <div className="row my-4">
              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <div className="rounded-circle shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto" style={{ "width": "150px", "height": "150px" }}>
                  <Link to='/' onClick={scrollToTop}>
                    <img src={logo} height="140" alt="" loading="lazy" />
                  </Link>
                </div>
                <p className="text-center">Homless animal shelter The budgetary unit of the Capital City of Warsaw</p>
                <ul className="list-unstyled d-flex flex-row justify-content-center">
                  <li>
                    <a className="text-white px-2" href="#!">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a className="text-white px-2" href="#!">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a className="text-white ps-2" href="#!">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
                <h5 className="text-uppercase mb-4">Company</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link to={'/about'} className="text-white" onClick={scrollToTop}>About </Link>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">Services</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">Projects</a>
                  </li>
                  <li className="mb-2">
                    <Link to={'/contact'} className="text-white" onClick={scrollToTop}>Contact Us</Link>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Services</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-white">BPDM PROJECTS</a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">Contact</h5>
                <ul className="list-unstyled">
                  <li>
                    <p><i className="fas fa-map-marker-alt pe-2"></i>Warsaw, 57 Street, Poland</p>
                  </li>
                  <li>
                    <p><i className="fas fa-phone pe-2"></i>+ 01 234 567 89</p>
                  </li>
                  <li>
                    <p><i className="fas fa-envelope pe-2 mb-0"></i>contact@example.com</p>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </div>
          {/* <!-- Grid container --> */}
        </footer>
      </div>
      {/* <!-- End of .container --> */}
    </>
  )
}

export default Footer;
