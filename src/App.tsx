// src/components/LandingPage.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

/* import ServicesSection from './components/ServicesSection';
import Header from './components/Header';
import AdultPlans from './components/AdultPlans';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import KidPlans from './components/KidPlans';
import Contact from './components/contact/Contact';
import AboutUs from './components/AboutUs'; */

const LandingPage: React.FC = () => {
  const onSlideChange = (...evt) => {
    console.log(evt)
  }
  return (<>
        <Header/>
        <Hero SwiperProps={{onSlideChange}}/>
      
  </>
  );
};

export default LandingPage;