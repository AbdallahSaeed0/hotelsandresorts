import React, { useState } from 'react';
import { BiSearch, BiPhone, BiLeaf } from 'react-icons/bi';
import { FaPlay } from 'react-icons/fa';
import fpjLogo from '../../../assets/logos/FPJ-new.svg';
import { SearchPopup } from '../../common';
import '../../../styles/components/layout/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMenuClick = () => {
    if (isMenuOpen) {
      // Start closing animation
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
        // Re-enable scrolling when menu closes
        document.body.style.overflow = 'auto';
      }, 300); // Match animation duration
    } else {
      setIsMenuOpen(true);
      // Disable scrolling when menu opens
      document.body.style.overflow = 'hidden';
    }
  };

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handlePhoneClick = () => {
    alert('Phone clicked!');
  };

  const handleLeafClick = () => {
    alert('Leaf clicked!');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          {/* Hamburger Menu */}
          <button 
            className="navbar-toggler border-0 me-3" 
            type="button" 
            onClick={handleMenuClick}
            aria-label="Toggle navigation menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu Button */}
          <button 
            className={`btn btn-link menu-btn me-3 ${isMenuOpen ? 'menu-open' : ''}`}
            onClick={handleMenuClick}
            aria-label="Open menu"
          >
            <div className="menu-icon-container">
              <span className="menu-line"></span>
              <span className="menu-line"></span>
            </div>
          </button>

          {/* Brand Logo */}
          <a className="navbar-brand" href="#">
            <img src={fpjLogo} alt="FIVE PALM JUMEIRAH" className="brand-logo" />
          </a>

          {/* Navbar Toggle for Mobile */}
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#rooms">ROOMS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#dine">DINE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#events">EVENTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#relax">RELAX</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#music">MUSIC</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold" href="#shop">SHOP</a>
              </li>
            </ul>
          </div>

          {/* Right Icons */}
          <div className="navbar-icons d-flex align-items-center">
            <button 
              className="btn btn-link icon-btn"
              onClick={handleSearchClick}
              aria-label="Search"
            >
              <BiSearch className="icon" />
            </button>
            <button 
              className="btn btn-link icon-btn"
              onClick={handlePhoneClick}
              aria-label="Call us"
            >
              <BiPhone className="icon" />
            </button>
            <button 
              className="btn btn-link icon-btn"
              onClick={handleLeafClick}
              aria-label="Sustainability"
            >
              <BiLeaf className="icon leaf-icon" />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Overlay */}
      {(isMenuOpen || isClosing) && (
        <div className={`menu-overlay ${isClosing ? 'closing' : ''}`}>
          <div className="menu-content">
            <div className="menu-header">
              <div className="menu-header-left">
                <button 
                  className="btn btn-link menu-close-btn"
                  onClick={handleMenuClick}
                  aria-label="Close menu"
                >
                  <div className="menu-icon-container menu-open">
                    <span className="menu-line"></span>
                    <span className="menu-line"></span>
                  </div>
                </button>
                <div className="menu-logo">
                  <img src={fpjLogo} alt="FIVE PALM JUMEIRAH" className="brand-logo" />
                </div>
              </div>
              
              <div className="menu-icons">
                <button 
                  className="btn btn-link icon-btn"
                  onClick={handleSearchClick}
                  aria-label="Search"
                >
                  <BiSearch className="icon" />
                </button>
                <button 
                  className="btn btn-link icon-btn"
                  onClick={handlePhoneClick}
                  aria-label="Call us"
                >
                  <BiPhone className="icon" />
                </button>
                <button 
                  className="btn btn-link icon-btn"
                  onClick={handleLeafClick}
                  aria-label="Sustainability"
                >
                  <BiLeaf className="icon leaf-icon" />
                </button>
              </div>
            </div>
            
            <div className="menu-body">
              <div className="menu-nav">
                <ul className="menu-nav-list">
                  <li>
                    <a href="#rooms">
                      ROOMS
                      <FaPlay className="menu-play-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#dine">
                      DINE
                      <FaPlay className="menu-play-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#events">
                      EVENTS
                      <FaPlay className="menu-play-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#relax">
                      RELAX
                      <FaPlay className="menu-play-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#music">
                      MUSIC
                      <FaPlay className="menu-play-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#shop">
                      SHOP
                      <FaPlay className="menu-play-icon" />
                    </a>
                  </li>
                </ul>

                {/* Additional Links Section */}
                <div className="menu-additional-links">
                  <div className="row">
                    <div className="col-6 col-md-3">
                      <div className="d-flex flex-column gap-3">
                        <a href="#about">About FIVE</a>
                        <a href="#press">In the Press</a>
                        <a href="#partners">Trade Partners</a>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="d-flex flex-column gap-3">
                        <a href="#careers">Careers</a>
                        <a href="#culture">Culture</a>
                        <a href="#faqs">FAQs</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="menu-background">
                <div 
                  className="menu-bg-image"
                  style={{
                    backgroundImage: 'url(https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2025/06/SEVENROOMS-BG.jpg.webp)'
                    }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Popup */}
      <SearchPopup 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
};

export default Navbar;
