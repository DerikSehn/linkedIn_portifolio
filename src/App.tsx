// src/components/LandingPage.tsx
import React from 'react';
import Header from './components/Header';
import Timeline from './components/timeline/Timeline';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Chat from './components/chat/Chat';
// ..
AOS.init();


/* import ServicesSection from './components/ServicesSection';
import Header from './components/Header';
import AdultPlans from './components/AdultPlans';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import KidPlans from './components/KidPlans';
import Contact from './components/contact/Contact';
import AboutUs from './components/AboutUs'; */

const LandingPage: React.FC = () => {

 
  return (<>
        <Header/>
        <Timeline/>
        <Chat />
  </>
  );
};

export default LandingPage;