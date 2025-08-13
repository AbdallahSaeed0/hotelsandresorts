import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaChevronRight, FaChevronLeft, FaPlay } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../styles/components/sections/RoomsSlider.css';

const RoomsSlider = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 25;

  const slides = Array.from({ length: totalSlides }, (_, index) => ({
    id: index + 1,
    image: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/06/Superior-Double-Queen-1920x1280.webp',
    title: 'SUPERIOR | DOUBLE QUEEN'
  }));

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex + 1);
  };

  const handlePrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="rooms-slider-section">
      {/* Header */}
      <div className="rooms-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="rooms-title">
                ROOMS
                <img 
                  src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/holograph-new.png" 
                  alt="Holographic Play Icon" 
                  className="holographic-icon"
                />
              </h1>
            </div>
            <div className="col-md-4 text-md-end">
              <p className="lifestyle-text">Lifestyle Meets Luxury</p>
              <a href="#" className="all-rooms-link">ALL ROOMS ►</a>
            </div>
          </div>
        </div>
      </div>

      {/* All Rooms Section */}
      <div className="all-rooms-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <h2 className="all-rooms-title">all rooms</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="rooms-slider-container">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          speed={600}
          effect="slide"
          onSlideChange={handleSlideChange}
          className="rooms-swiper"
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
              effect: "slide"
            },
            320: {
              slidesPerView: 1.4,
              spaceBetween: 30,
              effect: "slide"
            }
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="room-slide">
              <div className="slide-image-container">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="slide-image"
                />
                
                {/* Navigation and Counter - Desktop Only */}
                <div className="slider-controls desktop-controls">
                  <div className="navigation-container">
                    <button 
                      className="nav-btn prev-btn"
                      onClick={handlePrevSlide}
                      aria-label="Previous slide"
                    >
                      <FaChevronLeft />
                    </button>
                    <span className="slide-counter">
                      {currentSlide}/{totalSlides}
                    </span>
                    <button 
                      className="nav-btn next-btn"
                      onClick={handleNextSlide}
                      aria-label="Next slide"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="slide-content">
                  <h2 className="room-title">{slide.title}</h2>
                </div>
                
                {/* Explore Button */}
                <div className="explore-btn-container">
                  <button className="explore-btn">EXPLORE <FaPlay className="play-icon" /></button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Navigation Controls - Outside Slider */}
      <div className="mobile-slider-controls">
        <div className="navigation-container">
          <button 
            className="nav-btn prev-btn"
            onClick={handlePrevSlide}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>
          <span className="slide-counter">
            {currentSlide}/{totalSlides}
          </span>
          <button 
            className="nav-btn next-btn"
            onClick={handleNextSlide}
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RoomsSlider;
