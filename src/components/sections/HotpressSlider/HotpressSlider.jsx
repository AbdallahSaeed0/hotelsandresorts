import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../styles/components/sections/HotpressSlider.css';

const HotpressSlider = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const hotpressItems = [
    {
      id: 1,
      title: "FIVE Palm Jumeirah: an oasis of luxury in the heart of Dubai",
      image: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2025/06/25hours20dubai-aug22-pr-20global-Ingrid20Rasmussen1-356x200.jpg.webp",
      logo: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/holograph-new.png"
    },
    {
      id: 2,
      title: "World-Class Dining",
      image: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2025/06/25hours20dubai-aug22-pr-20global-Ingrid20Rasmussen1-356x200.jpg.webp",
      logo: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/holograph-new.png"
    },
    {
      id: 3,
      title: "Exclusive Experiences",
      image: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2025/06/25hours20dubai-aug22-pr-20global-Ingrid20Rasmussen1-356x200.jpg.webp",
      logo: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/holograph-new.png"
    },
    {
      id: 4,
      title: "Premium Services",
      image: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2025/06/25hours20dubai-aug22-pr-20global-Ingrid20Rasmussen1-356x200.jpg.webp",
      logo: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/holograph-new.png"
    },
    {
      id: 5,
      title: "Ultimate Luxury",
      image: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2025/06/25hours20dubai-aug22-pr-20global-Ingrid20Rasmussen1-356x200.jpg.webp",
      logo: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/holograph-new.png"
    }
  ];

  return (
    <section className="hotpress-slider-section">
      <div className="container">
        {/* Header */}
        <div className="hotpress-header">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="hotpress-title">
              HOT OFF THE PRESS
              </h2>
            </div>
            <div className="col-md-4 text-md-end">
              <a href="#" className="hotpress-all-link">View All ►</a>
            </div>
          </div>
        </div>

        {/* Hotpress Grid - Desktop Only */}
        <div className="hotpress-grid d-none d-lg-block">
          <div className="row">
            {hotpressItems.map((item) => (
              <div key={item.id} className="col-lg-2-4 col-md-6 mb-4">
                <div className="hotpress-card">
                  {/* Hotpress Logo */}
                  <div className="hotpress-logo">
                    <img 
                      src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/08/Mask-group-19.svg" 
                      alt="Logo" 
                      className="hotpress-item-logo"
                    />
                  </div>
                  
                  {/* Hotpress Image */}
                  <div className="hotpress-image-container">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="hotpress-image"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Hotpress Content */}
                  <div className="hotpress-content">
                    <h3 className="hotpress-item-title">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hotpress Mobile Slider */}
        <div className="hotpress-mobile-slider d-lg-none">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            loop={false}
            speed={600}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            className="hotpress-swiper"
          >
            {hotpressItems.map((item) => (
              <SwiperSlide key={item.id} className="hotpress-slide">
                <div className="hotpress-card">
                  {/* Hotpress Logo */}
                  <div className="hotpress-logo">
                    <img 
                      src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/08/Mask-group-19.svg" 
                      alt="Logo" 
                      className="hotpress-item-logo"
                    />
                  </div>
                  
                  {/* Hotpress Image */}
                  <div className="hotpress-image-container">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="hotpress-image"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Hotpress Content */}
                  <div className="hotpress-content">
                    <h3 className="hotpress-item-title">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Mobile Navigation */}
          <div className="hotpress-mobile-navigation">
            <button 
              className="hotpress-nav-btn hotpress-nav-prev"
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </button>
            <button 
              className="hotpress-nav-btn hotpress-nav-next"
              onClick={() => swiperRef.current?.swiper?.slideNext()}
              aria-label="Next slide"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotpressSlider;
