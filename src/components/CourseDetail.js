// src/pages/CourseDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CourseDetail.css';

function formatCourseContent(content) {
  if (!content) return null;

  const lines = content.split('\n');
  const output = [];
  let currentSection = null;
  let currentSubsection = null;

  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) return;

    if (!line.startsWith(' ') && !line.startsWith('\t')) {
      currentSection = { title: trimmed, items: [] };
      output.push(currentSection);
      currentSubsection = null;
    } else if ((line.startsWith('    ') || line.startsWith('\t')) && trimmed.endsWith(':')) {
      currentSubsection = { title: trimmed.slice(0, -1), subitems: [] };
      if (currentSection) currentSection.items.push(currentSubsection);
    } else if ((line.startsWith('    ') || line.startsWith('\t')) && currentSubsection) {
      currentSubsection.subitems.push(trimmed);
    } else if ((line.startsWith('    ') || line.startsWith('\t')) && currentSection) {
      currentSection.items.push(trimmed);
    }
  });

  return (
    <div>
      {output.map((section, i) => (
        <div key={i} className="section-block">
          <h4 className="section-title">✅ {section.title}</h4>
          <ul>
            {section.items.map((item, j) =>
              typeof item === 'string' ? (
                <li key={j}>{item}</li>
              ) : (
                <li key={j}>
                  <strong>{item.title}</strong>
                  <ul>
                    {item.subitems.map((sub, k) => <li key={k}>{sub}</li>)}
                  </ul>
                </li>
              )
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/course/${slug}/`)
      .then(res => setCourse(res.data))
      .catch(err => console.error('Error:', err));
  }, [slug]);

  const handleAddToCart = () => {
    if (!course) return;
    
    setIsAddingToCart(true);
    axios.post('http://127.0.0.1:8000/api/cart/', {
      course_id: course.id,
      quantity: 1
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    .then(() => {
      alert('Course added to cart!');
      navigate('/cart');
    })
    .catch(error => {
      console.error('Error adding to cart:', error);
      if (error.response?.status === 401) {
        alert('Please login to add items to cart');
        navigate('/login');
      } else {
        alert('Failed to add course to cart');
      }
    })
    .finally(() => {
      setIsAddingToCart(false);
    });
  };

  if (!course) return <div className="loading">Loading...</div>;

  return (
    <div className="course-detail">
      {/* Header */}
      <div className="course-header">
        <div className="course-info">
          <h1 className="title">{course.title}</h1>
          <p className="subtitle">{course.description?.slice(0, 150)}...</p>
          <div className="ratings">
            <button className="btn-get-started">Get Started</button>
            <span className="stars">⭐ 4.8</span>
            <span className="rating-count">28,487 Ratings</span>
            <span className="students">~{Math.floor(Math.random() * 1000000)} Students</span>
          </div>
        </div>
        <div className="course-image-box">
          <img src={course.image} alt={course.title} />
        </div>
      </div>

      {/* Main Body */}
      <div className="course-body">
        {/* Left – Full Course Content */}
        <div className="course-content-section">
          <h3>Course Content</h3>
          <div className="course-content-structured">
            {formatCourseContent(course.content)}
          </div>
        </div>

        {/* Right – Sidebar */}
        <div className="course-sidebar">
          <div className="price-section">
            <h2>Rs {course.price}</h2>
            <p className="original-price">Rs {course.original_price}</p>
            <p className="discount-note">3 Days Left</p>
          </div>
          <button 
            className="btn-add-to-cart" 
            onClick={handleAddToCart}
            disabled={isAddingToCart}
          >
            {isAddingToCart ? 'Adding...' : 'Add To Cart'}
          </button>
          <button className="btn-buy-now">Buy Now</button>
          <p className="money-back">1-Day Money Back Guarantee</p>
          <div className="course-meta">
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Lectures:</strong> {course.lectures}</p>
            <p><strong>Skill Level:</strong> {course.level}</p>
            <p><strong>Author:</strong> {course.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;