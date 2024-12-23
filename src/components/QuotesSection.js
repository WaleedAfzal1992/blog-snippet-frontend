import React from 'react';
import Card from './Card';
//import '../Home.css';
import '../qoute.css';

function QuotesSection() {
  return (
    <div className="quotes-section">
      <Card
        text="The best way to predict the future is to invent it."
        author="Alan Kay"
      />
      <Card
        text="Your time is limited, so don’t waste it living someone else’s life."
        author="Steve Jobs"
      />
      <Card
        text="Success is not final, failure is not fatal: It is the courage to continue that counts."
        author="Winston Churchill"
      />
    </div>
  );
}

export default QuotesSection;
