import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
  };

  return (
    <>
      {/* Navbar & Hero Start  */}
      <div className={`container-fluid position-relative p-0 ${isSticky ? 'sticky-top shadow-sm' : ''}`}>
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0" ref={navbarRef}>
          <Link to={'/'} className={`navbar-brand p-0 ${activeLink === '/' ? 'active' : ''}`}>
            <img src={logo} alt="bpdm groups" className='logo'/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" onClick={() => setIsOpen(!isOpen)}>
            <span className="fa fa-bars"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to={'/'} className={`nav-item nav-link ${activeLink === '/' ? 'active' : ''}`} onClick={handleLinkClick}>Home</Link>
              <Link to={'/about'} className={`nav-item nav-link ${activeLink === '/about' ? 'active' : ''}`} onClick={handleLinkClick}>About</Link>
              <div className="nav-item dropdown">
                <a href="#" className={`nav-link dropdown-toggle ${activeLink.startsWith('/services') ? 'active' : ''}`} data-bs-toggle="dropdown" onClick={handleLinkClick}>Services</a>
                <div className="dropdown-menu m-0">
                  <Link to="/services/bpdm-projects" className={`dropdown-item ${activeLink === '/services/bpdm-projects' ? 'active' : ''}`} onClick={handleLinkClick}>Bpdm Projects</Link>
                </div>
              </div>
              <Link to="/projects" className={`nav-item nav-link ${activeLink === '/projects' ? 'active' : ''}`} onClick={handleLinkClick}>Projects</Link>
              <Link to="/contact" className={`nav-item nav-link ${activeLink === '/contact' ? 'active' : ''}`} onClick={handleLinkClick}>Contact</Link>
            </div>
            <Link to="/contact" className="btn btn-primary rounded-pill py-2 px-4">Get in touch</Link>
          </div>
        </nav>
      </div>
      {/* Navbar & Hero End  */}
    </>
  );
};

export default Navbar;
