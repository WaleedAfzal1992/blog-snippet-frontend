import React, { useState, useEffect } from 'react';
//import '../Home.css';
import '../hero.css';

function HeroSection() {
  const words = ["Python", "Web Development", "Scrapy", "DevOps"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isWordComplete, setIsWordComplete] = useState(false);

  useEffect(() => {
    let intervalId;

    if (currentLetterIndex < words[currentWordIndex].length) {
      intervalId = setInterval(() => {
        setCurrentText(prevText => prevText + words[currentWordIndex][currentLetterIndex]);
        setCurrentLetterIndex(prevIndex => prevIndex + 1);
      }, 150);
    } else {
      setIsWordComplete(true);
      const timeoutId = setTimeout(() => {
        setCurrentLetterIndex(0);
        setCurrentText('');
        setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
        setIsWordComplete(false);
      }, 1500);

      return () => clearTimeout(timeoutId);
    }

    return () => clearInterval(intervalId);
  }, [currentLetterIndex, currentWordIndex, words]);

  return (
    <div className="hero-section">
      <div className="text-section">
        <h1>CodeWithPyOps</h1>
        <p className="subheading">
          <span className="learn-text">Learn </span>
          <span className="dynamic-text">{currentText}</span>
        </p>
        <p className="description">
          Confused on which course to take? I have got you covered. Browse
          courses and find out the best course for you. It's free! Code With PyOps is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.
        </p>
        
      </div>
      <div className="image-section">
        <img
          src="/Pytho.jpg" // Replace with actual image URL
          alt="CodeWithUs"
        />
      </div>
    </div>
  );
}

export default HeroSection;
