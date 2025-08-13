import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../styles/components/sections/FeaturesSlider.css';

const FeaturesSlider = () => {
  const featuresItems = [
    {
      id: 1,
      title: "Rooms",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Eat & Drink",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Play",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Relax",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="features-slider-section">
      <div className="container">
        {/* Header */}
        <div className="features-header">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h2 className="features-title">
              REDISCOVER <br /> YOUR SENSES
              </h2>
            </div>
          </div>
        </div>

        {/* Features Grid/Slider */}
        <div className="features-grid">
          {/* Desktop Grid */}
          <div className="features-desktop-grid d-none d-lg-block">
            <div className="row">
              {featuresItems.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-6 mb-4">
                  <div className="features-card">
                    {/* Feature Image */}
                    <div className="features-image-container">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="features-image"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Feature Title */}
                    <div className="features-content">
                      <h3 className="features-item-title">
                        {item.title}
                        <img 
                          src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/holograph-new.png" 
                          alt="Holograph Icon" 
                          className="features-item-icon"
                        />
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Slider */}
          <div className="features-mobile-slider d-lg-none">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1.2}
              navigation={{
                nextEl: '.features-nav-next',
                prevEl: '.features-nav-prev',
              }}
              className="features-swiper"
            >
              {featuresItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="features-card">
                    {/* Feature Image */}
                    <div className="features-image-container">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="features-image"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Feature Title */}
                    <div className="features-content">
                      <h3 className="features-item-title">
                        {item.title}
                        <img 
                          src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/holograph-new.png" 
                          alt="Holograph Icon" 
                          className="features-item-icon"
                        />
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Mobile Navigation */}
            <div className="features-mobile-navigation">
              <button className="features-nav-btn features-nav-prev">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="features-nav-btn features-nav-next">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSlider;
