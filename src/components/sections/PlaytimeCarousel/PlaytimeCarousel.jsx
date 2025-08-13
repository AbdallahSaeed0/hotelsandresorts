import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../styles/components/sections/PlaytimeCarousel.css';

const PlaytimeCarousel = () => {
  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const combinedSlides = [
    {
      id: 1,
      brand: {
        name: "Penthouse",
        logo: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/09/Logo_Penthouse-1-black.svg"
      },
      media: {
        type: 'video',
        src: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/AA-1-Bohemia-Front-Video.mp4',
        alt: 'Bohemia Front Video'
      }
    },
    {
      id: 2,
      brand: {
        name: "Penthouse",
        logo: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/09/Logo_Penthouse-1-black.svg"
      },
      media: {
        type: 'video',
        src: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/AA-1-Bohemia-Front-Video.mp4',
        alt: 'Playtime Experience 1'
      }
    },
    {
      id: 3,
      brand: {
        name: "Penthouse",
        logo: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/09/Logo_Penthouse-1-black.svg"
      },
      media: {
        type: 'video',
        src: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/AA-1-Bohemia-Front-Video.mp4',
        alt: 'Playtime Experience 2'
      }
    },
    {
      id: 4,
      brand: {
        name: "Penthouse",
        logo: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/09/Logo_Penthouse-1-black.svg"
      },
      media: {
        type: 'video',
        src: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/AA-1-Bohemia-Front-Video.mp4',
        alt: 'Playtime Experience 3'
      }
    },
    {
      id: 5,
      brand: {
        name: "Penthouse",
        logo: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/09/Logo_Penthouse-1-black.svg"
      },
      media: {
        type: 'video',
        src: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/AA-1-Bohemia-Front-Video.mp4',
        alt: 'Playtime Experience 4'
      }
    },
    {
      id: 6,
      brand: {
        name: "Penthouse",
        logo: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/09/Logo_Penthouse-1-black.svg"
      },
      media: {
        type: 'video',
        src: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/AA-1-Bohemia-Front-Video.mp4',
        alt: 'Playtime Experience 5'
      }
    },
    {
      id: 7,
      brand: {
        name: "Penthouse",
        logo: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/09/Logo_Penthouse-1-black.svg"
      },
      media: {
        type: 'video',
        src: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/AA-1-Bohemia-Front-Video.mp4',
        alt: 'Playtime Experience 6'
      }
    },
    {
      id: 8,
      brand: {
        name: "Penthouse",
        logo: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2024/09/Logo_Penthouse-1-black.svg"
      },
      media: {
        type: 'video',
        src: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/AA-1-Bohemia-Front-Video.mp4',
        alt: 'Playtime Experience 7'
      }
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
    <>
      {/* Playtime Carousel Section */}
      <section className="playtime-carousel-section">
        <div className="container">
          {/* Header with Title and Controls */}
          <div className="row align-items-center mb-4">
            <div className="col-md-6">
              <h2 className="section-title">
                IT'S PLAYTIME
                <img 
                  src="https://palmjumeirah.fivehotelsandresorts.com/wp-content/themes/five-palm-hr/images/holograph-new.png" 
                  alt="Holographic Play Icon" 
                  className="holographic-icon"
                />
              </h2>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="carousel-controls">
                <button
                  ref={prevButtonRef}
                  className={`control-btn prev-btn ${currentSlide === 0 ? 'disabled' : ''}`}
                  aria-label="Previous slide"
                  disabled={currentSlide === 0}
                >
                  <FaChevronLeft />
                </button>
                <button
                  ref={nextButtonRef}
                  className="control-btn next-btn"
                  aria-label="Next slide"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel with Combined Logo and Media */}
          <div className="carousel-container">
            <Swiper
              modules={[Navigation, Mousewheel]}
              spaceBetween={28}
              slidesPerView={1.4}
              loop={false}
              speed={600}
              mousewheel={true}
              initialSlide={0}
              centeredSlides={false}
              onBeforeInit={handleBeforeInit}
              onSlideChange={handleSlideChange}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 28,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 28,
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 28,
                },
              }}
              className="playtime-swiper"
            >
              {combinedSlides.map((slide) => (
                <SwiperSlide key={slide.id} className="carousel-slide">
                  <div className="slide-content">
                    {/* Brand Logo */}
                    <div className="brand-logo-section">
                      <div className="brand-logo-container">
                        <img
                          src={slide.brand.logo}
                          alt={slide.brand.name}
                          className="brand-logo"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    
                    {/* Video Content */}
                    <div className="video-container">
                      <video
                        className="slide-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        title={slide.media.alt}
                      >
                        <source src={slide.media.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Celebratory Experience Section */}
      <section className="celebratory-experience-section">
        {/* Horizontal Divider */}
        <div className="section-divider"></div>
        
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column - Title */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="experience-title">
                <span className="title-line">A CELEBRATORY</span>
                <span className="title-line">EXPERIENCE</span>
              </h2>
            </div>
            
            {/* Right Column - Description */}
            <div className="col-lg-6">
              <div className="experience-description">
                <p>
                  Dubbed the Hottest Hotel in Dubai, Indulge Yourself at our Dare-to-be-Different Immersive Playground. Rediscover your Senses with our nonstop entertainment lineup, award-winning dining, top nightlife, industry-leading spa sanctuary, and our 150-metre private beach. Be Seen, Be Snapped, and Come Play at Palm Jumeirah's Most Talked-About Resort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlaytimeCarousel;
