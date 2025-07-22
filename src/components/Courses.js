
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Courses.css';

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/course/')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div className="courses-container">
      <h2 className="courses-title">Premium Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-image-wrapper">
              <img
                src={course.image} // Make sure your Django API returns full media URL
                alt={course.title}
                className="course-image"
              />
              <span className="course-discount">{course.discount}</span>
              {course.featured && (
                <span className="course-featured">Featured</span>
              )}
            </div>
            <div className="course-content">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <div className="course-details">👨‍💻 {course.author} &nbsp; 🔍 {course.level}</div>
              <div className="course-details">⏱ {course.duration} &nbsp; 📚 {course.lectures} Lectures</div>
              <div className="course-pricing">
                <span className="course-price">Rs{course.price}</span>
                <span className="course-original-price">Rs{course.original_price}</span>
              </div>
              <button className="course-button">
                <Link to={`/courses/${course.slug}`} className="course-link">View Course</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
