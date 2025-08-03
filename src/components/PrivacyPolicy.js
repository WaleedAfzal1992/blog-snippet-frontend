import React from 'react';
import '../PrivacyPolicy.css'; // Create this file for styles

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-updated">Last Updated: july 20, 2025</p>

      <div className="privacy-section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to <strong>CodeWithPyOps</strong>. Your privacy is important to us, and we are dedicated to safeguarding your personal information. This Privacy Policy explains how we collect, use, and protect your data when you interact with our services.
        </p>
      </div>

      <div className="privacy-section">
        <h2>2. Information We Collect</h2>
        <p>We may gather the following types of information:</p>
        <ul>
          <li><strong>Personal Information:</strong> Your name, email address, payment details, and any other details you provide during registration or purchase.</li>
          <li><strong>Usage Data:</strong> Details about your interactions with our website, including your IP address, browser type, pages visited, and session duration.</li>
          <li><strong>Cookies:</strong> Cookies help us personalize your experience, analyze site performance, and remember preferences. You can adjust cookie settings in your browser.</li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2>3. How We Use Your Information</h2>
        <h3>Your data helps us:</h3>
        <ul>
          <li>Deliver and enhance our courses and services.</li>
          <li>Process transactions and manage orders.</li>
          <li>Send updates, newsletters, and promotions (you may unsubscribe anytime).</li>
          <li>Analyze website traffic to improve user experience.</li>
          <li>Enforce our Terms and Conditions..</li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2>4. Data Security Measures:</h2>
        <p>We employ robust security practices to prevent unauthorized access, alteration, or disclosure of your personal information. This includes secure servers, encrypted payment processing, and routine security checks.</p>
      </div>

      <div className="privacy-section">
        <h2>5. Sharing Your Information:</h2>
        <h3>We do not sell or rent your personal data. However, we may share it with:</h3>
        <ul>
          <li>Payment processors to complete transactions.</li>
          <li>Trusted service providers assisting with website operations.</li>
          <li>Legal authorities if required by law.</li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2>6. Your Rights:</h2>
        <ul>
          <li>Access and review your personal data.</li>
          <li>Request corrections to inaccurate information.</li>
          <li>Ask for deletion of your data (where legally permissible).</li>
          <li>Opt out of marketing communications.</li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2>7. Policy Updates:</h2>
        <p>We may revise this Privacy Policy occasionally. Any changes will be posted here with the latest revision date. Check back periodically for updates.</p>
      </div>

      <div className="privacy-section">
        <h2>8. Contact Us:</h2>
        <p>For questions or concerns regarding this policy, please contact us via our <a href="/contact-us">Contact Us</a> page with your order details.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
