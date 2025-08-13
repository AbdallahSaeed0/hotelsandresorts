import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../styles/components/sections/CulinarySlider.css';

const CulinarySlider = () => {
  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const culinaryItems = [
    {
      id: 1,
      image: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2025/01/FB_Web-31-768x432.jpg.webp"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1800&auto=format&fit=crop"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1800&auto=format&fit=crop"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1800&auto=format&fit=crop"
    }
  ];

  const handleBeforeInit = (swiper) => {
    swiper.params.navigation.prevEl = prevButtonRef.current;
    swiper.params.navigation.nextEl = nextButtonRef.current;
    swiperRef.current = swiper;
    setSwiperInstance(swiper);
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <section className="culinary-slider-section">
      <div className="container">
        {/* Header */}
        <div className="culinary-header">
          <div className="row align-items-center">
            <div className="col-md-12">
                             <h2 className="culinary-title">
                             YOUR CULINARY PLAYGROUND
               </h2>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="culinary-navigation">
            <button
              ref={prevButtonRef}
              className={`culinary-nav-btn culinary-prev-btn ${currentSlide === 0 ? 'disabled' : ''}`}
              onClick={() => {
                if (swiperInstance) {
                  swiperInstance.slidePrev();
                }
              }}
              aria-label="Previous restaurant"
              disabled={currentSlide === 0}
            >
              <FaChevronLeft className="culinary-nav-left" />
            </button>
            <button
              ref={nextButtonRef}
              className={`culinary-nav-btn culinary-next-btn ${currentSlide >= culinaryItems.length - 1 ? 'disabled' : ''}`}
              onClick={() => {
                if (swiperInstance) {
                  swiperInstance.slideNext();
                }
              }}
              aria-label="Next restaurant"
              disabled={currentSlide >= culinaryItems.length - 1}
            >
              <FaChevronRight className="culinary-nav-right" />
            </button>
          </div>
        </div>

        {/* Culinary Slider */}
        <div className="culinary-slider-container">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
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
                slidesPerView: 1.3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 1.4,
                spaceBetween: 20,
              },
            }}
            className="culinary-swiper"
          >
                         {culinaryItems.map((item) => (
               <SwiperSlide key={item.id} className="culinary-slide">
                 <div className="culinary-card">
                   {/* Logo Overlay */}
                   <div className="culinary-logo-overlay">
                     <img 
                       src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/penthouse.svg" 
                       alt="Penthouse Logo"
                       className="culinary-logo"
                     />
                   </div>
                   
                   {/* Restaurant Image */}
                   <div className="culinary-image-container">
                     <img 
                       src={item.image} 
                       alt="Culinary Experience"
                       className="culinary-image"
                       loading="lazy"
                     />
                   </div>
                 </div>
               </SwiperSlide>
             ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CulinarySlider;
