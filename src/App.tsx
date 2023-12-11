// src/components/LandingPage.tsx
import React from 'react';

import ServicesSection from './components/ServicesSection';
import Header from './components/Header';
import AdultPlans from './components/plans/AdultPlans';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import KidPlans from './components/plans/KidPlans';
import Contact from './components/contact/Contact';
import AboutUs from './components/AboutUs';
const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100" >
      <Header />
      <MainSection/>
      <AdultPlans />
      <KidPlans />
      <ServicesSection />
      <Contact/>
      <AboutUs/>
      {/* <MenuSection /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;