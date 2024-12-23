import React from 'react';
import HeroSection from './HeroSection';
import QuotesSection from './QuotesSection';
import TestimonialSection from './TestimonialSection';
import Footer from './Footer';
import '../Home.css';

function Home() {
  return (
    <div>
      <HeroSection />
      <QuotesSection />
      <TestimonialSection />
    </div>
  );
}

export default Home;
