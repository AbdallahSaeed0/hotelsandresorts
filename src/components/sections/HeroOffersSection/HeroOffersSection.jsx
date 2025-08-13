import React from 'react';
import '../../../styles/components/sections/HeroOffersSection.css';

const HeroOffersSection = () => {
  const offers = [
    {
      id: 1,
      title: "PAY 3 STAY 4 OFFER",
      image: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2025/06/FB-WEB-1.jpg.webp",
      alt: "Pay 3 Stay 4 Offer at FIVE Palm Jumeirah"
    },
    {
      id: 2,
      title: "ALL-INCLUSIVE OFFER",
      image: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2025/06/FB-WEB-1.jpg.webp",
      alt: "All-Inclusive Offer at FIVE Palm Jumeirah"
    },
    {
      id: 3,
      title: "FREE HALF BOARD OFFER",
      image: "https://palmjumeirah.fivehotelsandresorts.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2025/06/FB-WEB-1.jpg.webp",
      alt: "Free Half Board Offer at FIVE Palm Jumeirah"
    }
  ];

  const handleOfferClick = (offerId) => {
    console.log(`Offer clicked: ${offerId}`);
    // Add your offer click handler here
  };

  return (
    <section className="hero-offers-section pt-4 pt-lg-0">
      {/* Animated Gradient Background */}
      <div className="gradient-background"></div>
      
      {/* Hero Content with Offers Inside */}
      <div className="hero-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 text-center">
              <h1 className="hero-heading">
                <span className="heading-line-1">DUBAI'S HOTTEST</span>
                <span className="heading-line-2">BEACH HOTEL</span>
              </h1>
              <p className="hero-description">
                Experience luxury and comfort in the heart of Dubai's most vibrant destination.
              </p>
              <p className="hero-description">
              Stunning spa. Our unashamedly luxurious resort has it all!
              </p>
              <p className="hero-subline">
                <strong>Enjoy complimentary group yoga with all room bookings.</strong>
              </p>
            </div>
          </div>
          
          {/* Offers Section Inside Hero Content */}
          <div className="offers-section">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="offers-title">ROOM OFFERS AT FIVE</h2>
              </div>
            </div>
            
            <div className="row px-3">
              {offers.map((offer) => (
                <div key={offer.id} className="col-lg-4 col-md-6 col-12 mb-4">
                  <div 
                    className="offer-card"
                    onClick={() => handleOfferClick(offer.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleOfferClick(offer.id);
                      }
                    }}
                    aria-label={`View ${offer.title}`}
                  >
                    <div className="offer-image-container">
                      <img 
                        src={offer.image} 
                        alt={offer.alt}
                        className="offer-image"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="offer-caption">{offer.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroOffersSection;
