import React from 'react';
import { FaGithub, FaXTwitter, FaYoutube, FaFacebookF } from 'react-icons/fa6';
import '../Home.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        <div className="footer-column">
          <h4>Main</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Work With Us</a></li>
            <li><a href="#">My Gear</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Learn</h4>
          <ul>
            <li><a href="/courses">Courses</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Notes</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="/privacypolicy">Privacy</a></li>
            <li><a href="#">Refund</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Social</h4>
          <ul>
            <li><a href="https://github.com/pyopstech"><FaGithub className="footer-icon" /> GitHub</a></li>
            <li><a href="#"><FaXTwitter className="footer-icon" /> Twitter (X)</a></li>
            <li><a href="https://www.youtube.com/@PyOps-tech"><FaYoutube className="footer-icon youtube" /> YouTube</a></li>
            <li><a href="https://web.facebook.com/pyopsdev"><FaFacebookF className="footer-icon facebook" /> Facebook</a></li>
          </ul>
        </div>

      </div>
      <p className='wright'>&copy; 2025 <strong>CodeWithPyOps</strong>. Powered by <strong>CodeWithPyOps</strong>.</p>
    </footer>
    
  );
}

export default Footer;
