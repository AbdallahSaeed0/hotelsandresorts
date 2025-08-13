import React from 'react';
import { Navbar } from '../';
import { ExploreButton } from '../../common';
import { FloatingActions, Awards } from '../../features';
import '../../../styles/components/layout/Hero.css';

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <Navbar />

        <div className="hero-content">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="hero-text-container">
                  <div className="hero-headings">
                    <h1 className="hero-title">
                      <span className="stay-text">STAY</span>
                      <span className="play-text">PLAY</span>
                    </h1>
                  </div>

                  <div className="hero-subtitle">
                    <p className="subtitle-text">
                      COME PLAY AT DUBAI'S
                    </p>
                    <p className="subtitle-text">
                      HOTTEST BEACH HOTEL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ExploreButton />
        <FloatingActions />
      </section>
      
      <Awards />
    </>
  );
};

export default Hero;
