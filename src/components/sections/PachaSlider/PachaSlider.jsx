import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronRight, FaChevronLeft, FaWhatsapp, FaPlay } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../styles/components/sections/PachaSlider.css';

const PachaSlider = () => {
  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const pachaEvents = [
    {
      id: 1,
      date: "17th October, 7 PM (Doors Open 6 PM)",
      title: "CARL COX | Grand Dubai Season Opening | Playa Pacha",
      image: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2025/06/FB_Web-95-1-1400x788.jpg.webp"
    }
  ];

  const handleBeforeInit = (swiper) => {
    swiper.params.navigation.prevEl = prevButtonRef.current;
    swiper.params.navigation.nextEl = nextButtonRef.current;
    swiperRef.current = swiper;
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <section className="pacha-slider-section">
      <div className="container">
        {/* Header */}
        <div className="pacha-header">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2 className="pacha-title">
                Pacha Icons
                <img 
                  src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/pacha-cherry-icon.svg" 
                  alt="Pacha Cherry Icon" 
                  className="pacha-cherry-icon"
                />
              </h2>
            </div>
            <div className="col-md-4">
              <p className="pacha-subtitle">At FIVE LUXE</p>
            </div>
          </div>
          
          {/* Navigation Buttons - Desktop Only */}
          {pachaEvents.length > 1 && (
            <div className="pacha-navigation desktop-navigation">
              <button
                ref={prevButtonRef}
                className={`pacha-nav-btn pacha-prev-btn ${currentSlide === 0 ? 'disabled' : ''}`}
                aria-label="Previous event"
                disabled={currentSlide === 0}
              >
                <FaChevronLeft className="pacha-nav-left" />
              </button>
              <button
                ref={nextButtonRef}
                className={`pacha-nav-btn pacha-next-btn ${currentSlide >= pachaEvents.length - 1 ? 'disabled' : ''}`}
                aria-label="Next event"
                disabled={currentSlide >= pachaEvents.length - 1}
              >
                <FaChevronRight className="pacha-nav-right" />
              </button>
            </div>
          )}
        </div>

        {/* Pacha Slider */}
        <div className="pacha-slider-container">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={false}
            speed={600}
            initialSlide={0}
            centeredSlides={false}
            allowTouchMove={true}
            resistance={true}
            resistanceRatio={0.85}
            onBeforeInit={handleBeforeInit}
            onSlideChange={handleSlideChange}
            breakpoints={{
              768: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            className="pacha-swiper"
          >
            {pachaEvents.map((event) => (
              <SwiperSlide key={event.id} className="pacha-slide">
                <div className="pacha-card">
                  {/* Date Bar */}
                  <div className="pacha-date-bar">
                    <span className="pacha-date-text">{event.date}</span>
                  </div>
                  
                  {/* Event Content */}
                  <div className="pacha-content">
                    <h3 className="pacha-event-title">{event.title}</h3>
                    <div className="pacha-buttons">
                      <button className="pacha-book-btn">BOOK NOW <FaPlay className="play-icon" /></button>
                      <button className="pacha-whatsapp-btn" aria-label="WhatsApp">
                        <FaWhatsapp />
                      </button>
                    </div>
                  </div>
                  
                  {/* Event Image */}
                  <div className="pacha-image-container">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="pacha-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Navigation Controls - Under Slider */}
        {pachaEvents.length > 1 && (
          <div className="mobile-pacha-controls">
            <div className="row align-items-center">
              <div className="col-6">
                <a href="#" className="pacha-all-link mobile-all-link">ALL EVENTS ►</a>
              </div>
              <div className="col-6 text-end">
                <div className="pacha-navigation mobile-navigation">
                  <button
                    className={`pacha-nav-btn pacha-prev-btn ${currentSlide === 0 ? 'disabled' : ''}`}
                    onClick={() => swiperRef.current?.swiper?.slidePrev()}
                    aria-label="Previous event"
                    disabled={currentSlide === 0}
                  >
                    <FaChevronLeft className="pacha-nav-left" />
                  </button>
                  <button
                    className={`pacha-nav-btn pacha-next-btn ${currentSlide >= pachaEvents.length - 1 ? 'disabled' : ''}`}
                    onClick={() => swiperRef.current?.swiper?.slideNext()}
                    aria-label="Next event"
                    disabled={currentSlide >= pachaEvents.length - 1}
                  >
                    <FaChevronRight className="pacha-nav-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PachaSlider;
