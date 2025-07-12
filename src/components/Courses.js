import React from 'react';
import '../Courses.css'

const courses = [
  {
    title: 'Python and web development with django',
    description: 'Dive into the world of web development with this comprehensive course on Python and Django. Learn to build dynamic, data-driven websites and powerful backend applications from scratch. Master essential Python programming concepts, Django models, views, templates, and create fully functional web applications by the end of the course.',
    author: 'CodeWithPyOps',
    level: 'Beginner to Advanced',
    duration: '3 Months',
    Lectures: 24,
    price: 9000,
    originalPrice: 10000,
    discount: '10% OFF',
    // featured: true,
    image: '/python-django.png'
  },
  {
    title: 'Python and Web Scraping',
    description: 'Learn how to extract data from websites using Python and web scraping techniques. This course covers the fundamentals of Python, along with powerful libraries like BeautifulSoup, Requests, and Selenium. By the end of this course, you will be able to build your own web scrapers to collect and process data from real-world websites—an essential skill for data analysis, automation, and competitive research.',
    author: 'CodeWithPyOps',
    level: 'Beginner to Advanced',
    duration: '3 Months',
    Lectures: 24,
    price: 10800,
    originalPrice: 12000,
    discount: '10% OFF',
    featured: false,
    image: '/python-scraping.png'
  },
  {
    title: 'DevOps Essentials: From Code to Deployment',
    description: 'Master the fundamentals of DevOps and learn how to streamline software development and deployment processes. This course covers key DevOps tools and practices including Continuous Integration (CI), Continuous Deployment (CD), version control with Git, containerization with Docker, and infrastructure automation with Kubernetes and Jenkins. By the end of this course, you will have the skills to automate workflows, improve collaboration between development and operations teams, and deploy applications faster and more reliably.',
    author: 'CodeWithPyOps',
    level: 'Beginner to Advanced',
    duration: '3 Months',
    Lectures: 24,
    price: 9000,
    originalPrice: 10000,
    discount: '10% OFF',
    // featured: true,
    image: '/Devops.png'
  }
];

export default function Courses() {
  return (
    <div className="courses-container">
      <h2 className="courses-title">Premium Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-image-wrapper">
              <img src={course.image} alt="Course" className="course-image" />
              <span className="course-discount">{course.discount}</span>
              {course.featured && (
                <span className="course-featured">Featured</span>
              )}
            </div>
            <div className="course-content">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <div className="course-details">👨‍💻 {course.author} &nbsp; 🔍 {course.level}</div>
              <div className="course-details">⏱ {course.duration} &nbsp; 📚 {course.Lectures} Lectures</div>
              <div className="course-pricing">
                <span className="course-price">Rs{course.price}</span>
                <span className="course-original-price">Rs{course.originalPrice}</span>
              </div>
              <button className="course-button">View Course</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}