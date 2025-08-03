import React from 'react';
import '../PrivacyPolicy.css'; // Use the same styles

const TermsAndConditions = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Terms and Conditions</h1>
      <p className="privacy-updated">Last Updated: July 20, 2025</p>

      <div className="privacy-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using <strong>CodeWithPyOps</strong>, you agree to be bound by these Terms and Conditions. If you do not accept these terms, please do not use our services.
        </p>
      </div>

      <div className="privacy-section">
        <h2>2. Services Offered</h2>
        <p>
          CodeWithPyOps provides digital learning content including courses, tutorials, and downloadable materials. All purchases are final, subject to the refund terms below.
        </p>
      </div>

      <div className="privacy-section">
        <h2>3. User Responsibilities</h2>
        <ul>
          <li>Provide accurate information during registration or purchase.</li>
          <li>Keep your login credentials secure.</li>
          <li>Do not redistribute or resell our content.</li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2>4. Intellectual Property</h2>
        <p>
          All content provided on CodeWithPyOps is protected by copyright and remains the intellectual property of CodeWithPyOps. You may not reproduce or share it without permission.
        </p>
      </div>

      <div className="privacy-section">
        <h2>5. Payment and Pricing</h2>
        <p>
          All pricing is listed in the local currency. Prices and availability are subject to change without notice. Payment must be completed before access to content is granted.
        </p>
      </div>

      <div className="privacy-section">
        <h2>6. Limitation of Liability</h2>
        <p>
          We are not responsible for any indirect, incidental, or consequential damages resulting from the use of our services.
        </p>
      </div>

      <div className="privacy-section">
        <h2>7. Privacy</h2>
        <p>
          Your personal information is governed by our <a href="/privacypolicy">Privacy Policy</a>. By using our platform, you consent to the data practices outlined there.
        </p>
      </div>

      <div className="privacy-section">
        <h2>8. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to CodeWithPyOps for any violation of these terms, without prior notice.
        </p>
      </div>

      <div className="privacy-section">
        <h2>9. Changes to Terms</h2>
        <p>
          We may update these Terms and Conditions periodically. Continued use of the site after such updates signifies your acceptance of the new terms.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
