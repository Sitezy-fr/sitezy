import React from 'react';
import '../App.scss';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ReviewsSummary from '../components/ReviewsSummary';
import Presentation from '../components/Presentation';
import ProgressBarSection from '../components/Together';
import CarouselPremium from '../components/CarouselPremium';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Hausse from '../components/Hausse';
import Last from '../components/Last';
import Team from '../components/Team';
import Footer from '../components/Footer';


const Sitezy = () => {
  
  return (
    <div id="sitezy">

        <Navbar />

        <Header />

        <ReviewsSummary />

        <Presentation />

        <ProgressBarSection />

        <CarouselPremium />

        <Pricing />

        <Testimonials />

        <Hausse />

        <Last />
        
        <Team />

        <Footer />

    </div>
  );
};

export default Sitezy;
  