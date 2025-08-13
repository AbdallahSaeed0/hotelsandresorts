import React, { useState, useEffect, useRef } from 'react';
import { BiSearch, BiX } from 'react-icons/bi';
import '../../../styles/components/common/SearchPopup.css';

const SearchPopup = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);

  // Sample search recommendations
  const recommendations = [
    'Rooms & Suites',
    'Dining & Restaurants',
    'Spa & Wellness',
    'Events & Weddings',
    'Location & Directions',
    'Contact Information'
  ];

  const filteredRecommendations = recommendations.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      // Focus input when popup opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      // Simulate search
      setTimeout(() => {
        setIsSearching(false);
        console.log('Searching for:', searchQuery);
        // Here you would implement actual search functionality
      }, 1000);
    }
  };

  const handleRecommendationClick = (recommendation) => {
    setSearchQuery(recommendation);
    // You can implement navigation or search here
    console.log('Selected recommendation:', recommendation);
  };

  if (!isOpen) return null;

  return (
    <div className="search-popup-overlay" onClick={onClose}>
      <button 
        className="search-close-btn-overlay"
        onClick={onClose}
        aria-label="Close search"
      >
        <BiX />
      </button>
      <div className="search-popup-container" onClick={(e) => e.stopPropagation()}>
        {/* Search Form */}
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-input-container">
            <input
              ref={inputRef}
              type="text"
              className="search-input"
              placeholder="Search for rooms, dining, spa, events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoComplete="off"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                <BiX />
              </button>
            )}
          </div>
          <button 
            type="submit" 
            className="search-submit-btn"
            disabled={!searchQuery.trim() || isSearching}
          >
            {isSearching ? '...' : <BiSearch />}
          </button>
        </form>

        {/* Recommendations */}
        <div className="search-recommendations">
          <h3 className="recommendations-title">
            {searchQuery ? 'Search Results' : 'Popular Searches'}
          </h3>
          <div className="recommendations-list">
            {filteredRecommendations.length > 0 ? (
              filteredRecommendations.map((recommendation, index) => (
                <button
                  key={index}
                  className="recommendation-item"
                  onClick={() => handleRecommendationClick(recommendation)}
                >
                  <BiSearch className="recommendation-icon" />
                  <span>{recommendation}</span>
                </button>
              ))
            ) : searchQuery ? (
              <div className="no-results">
                <p>No results found for "{searchQuery}"</p>
                <p>Try searching for something else</p>
              </div>
            ) : (
              recommendations.slice(0, 6).map((recommendation, index) => (
                <button
                  key={index}
                  className="recommendation-item"
                  onClick={() => handleRecommendationClick(recommendation)}
                >
                  <BiSearch className="recommendation-icon" />
                  <span>{recommendation}</span>
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
