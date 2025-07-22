import React from 'react';
import HeroSection from './HeroSection';
import QuotesSection from './QuotesSection';
import TestimonialSection from './TestimonialSection';
import Services from './Services';
import Footer from './Footer';
import '../Home.css';

function Home() {
  return (
    <div>
      <HeroSection />
      <QuotesSection />
      <Services />
      <TestimonialSection />
    </div>
  );
}

export default Home;
