import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import '../../../styles/components/common/ExploreButton.css';

const ExploreButton = () => {
  const handleExploreClick = () => {
    // Try to find the next section after Hero
    const nextSection = document.querySelector('.awards-section') || 
                       document.querySelector('.playtime-carousel-section') ||
                       document.querySelector('.rooms-slider-section');
    
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth' 
      });
    } else {
      // Fallback: scroll down by viewport height
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="explore-button-container">
      <button 
        className="btn btn-link explore-btn" 
        onClick={handleExploreClick}
        aria-label="Explore more content"
      >
        <span className="explore-text">EXPLORE</span>
        <FaChevronDown className="chevron-icon" />
      </button>
    </div>
  );
};

export default ExploreButton;
