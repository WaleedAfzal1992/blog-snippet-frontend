import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const isAuthenticated = localStorage.getItem('access_token');

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
      
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link></li>
          <li><Link to="/blog-list" onClick={() => setMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          <li className="cart-icon">
          <Link to="/cart" onClick={() => setMenuOpen(false)}>🛒</Link>
          </li>

          {isAuthenticated ? (
            <>
              <li><Link to="/blog" className="button-link" onClick={() => setMenuOpen(false)}>Create</Link></li>
              <li><button onClick={() => { handleLogout(); setMenuOpen(false); }} className="button-link">Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="button-link" onClick={() => setMenuOpen(false)}>Login</Link></li>
              <li><Link to="/register" className="button-link" onClick={() => setMenuOpen(false)}>Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
