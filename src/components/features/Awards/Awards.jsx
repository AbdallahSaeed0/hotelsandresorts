import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import '../../../styles/components/features/Awards.css';

const Awards = () => {
  const awards = [
    {
      logo: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/25.11.24-FIVE-WEB-PALM-AWARDS-1-1.svg',
      title: "Reader's Choice Award",
      subtitle: "Condé Nast Traveler",
      year: "2021"
    },
    {
      logo: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/25.11.24-FIVE-WEB-PALM-AWARDS-1-1.svg',
      title: "#1 Club in the Middle-East",
      subtitle: "DJ Mag",
      year: "2024"
    },
    {
      logo: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/25.11.24-FIVE-WEB-PALM-AWARDS-1-1.svg',
      title: "Michelin Guide Italian Cuisine",
      subtitle: "MICHELIN",
      year: "2024"
    },
    {
      logo: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/25.11.24-FIVE-WEB-PALM-AWARDS-1-1.svg',
      title: "BBC Awarded Fine Dining Brunch",
      subtitle: "goodfood",
      year: "2021"
    },
    {
      logo: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/25.11.24-FIVE-WEB-PALM-AWARDS-1-1.svg',
      title: "#1 Luxury Beach Spa in the Middle East",
      subtitle: "WORLD LUXURY SPA AWARDS",
      year: "2024"
    },
    {
      logo: 'https://palmjumeirah.fivehotelsandresorts.com/wp-content/uploads/2025/01/25.11.24-FIVE-WEB-PALM-AWARDS-1-1.svg',
      title: "Favourite Asian Restaurant",
      subtitle: "WHAT'S ON",
      year: "2023"
    }
  ];

  // Create marquee content array
  const marqueeContent = Array(30).fill(null).map((_, index) => (
    <React.Fragment key={index}>
      <span className="marquee-text">COME PLAY</span>
      <FaPlay className="marquee-play-icon" />
    </React.Fragment>
  ));

  return (
    <section className="awards-section">
      {/* Top Marquee */}
      <div className="marquee-container">
        <div className="marquee">
          {marqueeContent}
        </div>
      </div>

      {/* Awards Content */}
      <div className="awards-content-wrapper">
        <div className="container py-5">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="awards-swiper"
          >
            {awards.map((award, index) => (
              <SwiperSlide key={index}>
                <div className="award-item text-center">
                  <div className="award-logo mb-3">
                    <img 
                      src={award.logo} 
                      alt={award.subtitle}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="marquee-container">
        <div className="marquee">
          {marqueeContent}
        </div>
      </div>
    </section>
  );
};

export default Awards;
