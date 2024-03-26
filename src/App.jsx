import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import from react-router-dom
import Navbar from './components/Navbar';
import TopNavbar from './components/TopNavbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import { useLocation } from "react-router-dom"; // Import from react-router-dom
import Contact from './components/Contact';
import Topbtn from './components/Topbtn';

function App() {
  // const location = useLocation();
  // const isHomePage = location.pathname === '/';

  return (
    <>
    <Topbtn/>
      <BrowserRouter>
        {/* {isHomePage && <TopNavbar />} */}
        <TopNavbar />

        <Navbar />
  
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
