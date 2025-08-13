import React from 'react';
import '../../../styles/components/features/SustainableIndulgence.css';

const SustainableIndulgence = () => {
  return (
    <section className="sustainable-indulgence-section">
      <div className="container">
        {/* Title Above Image */}
        <div className="sustainable-title-section">
          <h2 className="sustainable-title">SUSTAINABLE INDULGENCE</h2>
        </div>
        
        <div className="row g-0">
          {/* Left Column - Image */}
          <div className="col-lg-7">
            <div className="sustainable-image-container">
              <img 
                src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2025/01/ESG-PALM-1920x1472.png.webp" 
                alt="FIVE Palm Jumeirah Sustainable Practices" 
                className="sustainable-image"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="col-lg-4">
            <div className="sustainable-content">
              <div className="sustainable-description">
                <p>
                  At FIVE Palm Jumeirah, Luxury blends with Eco-Responsibility creating a Sustainable Entertainment Ecosystem. LEED Platinum Certified, and with a 'You-Can-Have-It-All' mindset, we harness technology and innovation for guilt-free indulgence.
                </p>
              </div>
              
              <div className="sustainable-stats">
                <div className="stat-item">
                  <h3 className="stat-title">CARBON</h3>
                  <p className="stat-description">
                    5x More Carbon Efficient vs the Average Luxury Resort in UAE (CHSB 2023)
                  </p>
                </div>
                
                <div className="stat-item">
                  <h3 className="stat-title">ELECTRICITY</h3>
                  <p className="stat-description">
                    100% of Electricity sourced through Green Power
                  </p>
                </div>
                
                <div className="stat-item">
                  <h3 className="stat-title">WATER</h3>
                  <p className="stat-description">
                    40.6% Reduction in Water Consumption per Capita in (2023 vs 2020)
                  </p>
                </div>
              </div>
              
              <div className="sustainable-cta">
                <button className="know-more-btn">
                  KNOW MORE <span className="arrow-icon">►</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainableIndulgence;
