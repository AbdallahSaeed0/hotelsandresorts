import React from 'react';
import { Hero, Footer } from '../../components/layout';
import {
  HeroOffersSection,
  PlaytimeCarousel,
  RoomsSlider,
  EventsSlider,
  PachaSlider,
  CulinarySlider,
  FeaturesSlider,
  HotpressSlider
} from '../../components/sections';
import { SustainableIndulgence } from '../../components/features';
import '../../styles/pages/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <HeroOffersSection />
      <PlaytimeCarousel />
      <RoomsSlider />
      <EventsSlider />
      <PachaSlider />
      <CulinarySlider />
      <FeaturesSlider />
      <SustainableIndulgence />
      <HotpressSlider />
      <Footer />
    </div>
  );
};

export default Home;
