import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './routeConstants';
import Home from '../pages/Home';
import Index from '../pages/Index';
// Import other pages when they're created
// import About from '../pages/About';
// import Contact from '../pages/Contact';
// import Rooms from '../pages/Rooms';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home Route */}
      <Route path={ROUTES.HOME} element={<Home />} />
      
      {/* Index Route (if you want to keep it separate) */}
      <Route path="/index" element={<Index />} />
      
      {/* Future Routes - Uncomment when pages are created */}
      {/* <Route path={ROUTES.ABOUT} element={<About />} /> */}
      {/* <Route path={ROUTES.CONTACT} element={<Contact />} /> */}
      {/* <Route path={ROUTES.ROOMS} element={<Rooms />} /> */}
      {/* <Route path={ROUTES.EVENTS} element={<Events />} /> */}
      {/* <Route path={ROUTES.DINE} element={<Dine />} /> */}
      {/* <Route path={ROUTES.RELAX} element={<Relax />} /> */}
      {/* <Route path={ROUTES.MUSIC} element={<Music />} /> */}
      {/* <Route path={ROUTES.SHOP} element={<Shop />} /> */}
      {/* <Route path={ROUTES.BOOKING} element={<Booking />} /> */}
      
      {/* 404 Route - Redirect to home */}
      <Route path={ROUTES.NOT_FOUND} element={<Navigate to={ROUTES.HOME} replace />} />
    </Routes>
  );
};

export default AppRoutes;
