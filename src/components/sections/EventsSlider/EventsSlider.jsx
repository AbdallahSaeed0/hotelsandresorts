import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronRight, FaChevronLeft, FaWhatsapp, FaPhone, FaPlay } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../styles/components/sections/EventsSlider.css';

const EventsSlider = () => {
  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      date: "30th August, 10 PM",
      title: "The Penthouse Presents Tom & Collins",
      image: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2025/05/FB_Web-43-1400x788.jpg.webp"
    },
    {
      id: 2,
      date: "2nd September, 9 PM",
      title: "Sunset Beach Party with DJ Khaled",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1800&auto=format&fit=crop"
    },
    {
      id: 3,
      date: "5th September, 8 PM",
      title: "Luxury Wine Tasting Experience",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1800&auto=format&fit=crop"
    },
    {
      id: 4,
      date: "8th September, 11 PM",
      title: "Moonlight Poolside Soirée",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1800&auto=format&fit=crop"
    },
    {
      id: 5,
      date: "12th September, 7 PM",
      title: "Gourmet Chef's Table Dinner",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1800&auto=format&fit=crop"
    },
    {
      id: 6,
      date: "15th September, 10 PM",
      title: "Live Jazz Under the Stars",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1800&auto=format&fit=crop"
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
    <section className="events-slider-section">
      <div className="container">
        {/* Header */}
        <div className="events-header">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="events-title">
                EVENTS
                <img 
                  src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/holograph-new.png" 
                  alt="Holographic Icon" 
                  className="events-holographic-icon"
                />
              </h2>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="events-subtitle">Immersive Entertainment At FIVE</p>
              <a href="#" className="events-all-link">ALL EVENTS ►</a>
            </div>
          </div>
          
          {/* Navigation Buttons - Desktop Only */}
          <div className="events-navigation desktop-navigation">
            <button
              ref={prevButtonRef}
              className={`events-nav-btn events-prev-btn ${currentSlide === 0 ? 'disabled' : ''}`}
              aria-label="Previous event"
              disabled={currentSlide === 0}
            >
              <FaChevronLeft className="events-nav-left" />
            </button>
            <button
              ref={nextButtonRef}
              className={`events-nav-btn events-next-btn ${currentSlide >= events.length - 1 ? 'disabled' : ''}`}
              aria-label="Next event"
              disabled={currentSlide >= events.length - 1}
            >
              <FaChevronRight className="events-nav-right" />
            </button>
          </div>
        </div>

        {/* Events Slider */}
        <div className="events-slider-container">
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
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="events-swiper"
          >
            {events.map((event) => (
              <SwiperSlide key={event.id} className="events-slide">
                <div className="events-card">
                  {/* Date Bar */}
                  <div className="events-date-bar">
                    <span className="events-date-text">{event.date}</span>
                  </div>
                  
                  {/* Event Content */}
                  <div className="events-content">
                    <h3 className="events-event-title">{event.title}</h3>
                    <div className="events-buttons">
                      <button className="events-book-btn">BOOK NOW <FaPlay className="play-icon" /></button>
                      <button className="events-whatsapp-btn" aria-label="WhatsApp">
                        <FaWhatsapp />
                      </button>
                      <button className="events-phone-btn" aria-label="Phone">
                        <FaPhone />
                      </button>
                    </div>
                  </div>
                  
                  {/* Event Image */}
                  <div className="events-image-container">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="events-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Navigation and Link - Under Slider */}
        <div className="mobile-events-controls">
          <div className="row align-items-center">
            <div className="col-6">
              <a href="#" className="events-all-link mobile-all-link">ALL EVENTS ►</a>
            </div>
            <div className="col-6 text-end">
              <div className="events-navigation mobile-navigation">
                <button
                  className={`events-nav-btn events-prev-btn ${currentSlide === 0 ? 'disabled' : ''}`}
                  onClick={() => swiperRef.current?.swiper?.slidePrev()}
                  aria-label="Previous event"
                  disabled={currentSlide === 0}
                >
                  <FaChevronLeft className="events-nav-left" />
                </button>
                <button
                  className={`events-nav-btn events-next-btn ${currentSlide >= events.length - 1 ? 'disabled' : ''}`}
                  onClick={() => swiperRef.current?.swiper?.slideNext()}
                  aria-label="Next event"
                  disabled={currentSlide >= events.length - 1}
                >
                  <FaChevronRight className="events-nav-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSlider;
