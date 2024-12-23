import React from 'react';
import '../Home.css';

function Card({ text, author }) {
  return (
    <div className="card">
      <p>"{text}"</p>
      <p>- {author}</p>
    </div>
  );
}

export default Card;
