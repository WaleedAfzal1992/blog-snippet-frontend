import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  // Check if the user is logged in by checking for a token in localStorage
  const isAuthenticated = localStorage.getItem('access_token');

  const handleLogout = () => {
    localStorage.removeItem('access_token'); // Remove the token
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/blog-list">Blog</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        {isAuthenticated && (
          <>
            <li>
              <Link to="/blog" className="button-link">
                Create
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="button-link">
                Logout
              </button>
            </li>
          </>
        )}
        {!isAuthenticated && (
          <>
            <li>
              <Link to="/login" className="button-link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="button-link">
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
