import React from 'react';
import '../PrivacyPolicy.css'; // Reuse same styles

const RefundPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Refund Policy</h1>
      <p className="privacy-updated">Last Updated: July 20, 2025</p>

      <div className="privacy-section">
        <h2>1. Refund Eligibility</h2>
        <p>
          If you're not satisfied with your purchase, you may request a refund within <strong>2 days</strong> of your purchase date.
        </p>
      </div>

      <div className="privacy-section">
        <h2>2. Deduction</h2>
        <p>
          A <strong>20% deduction</strong> will be applied to cover transaction and processing charges. The remaining amount will be refunded to your original payment method.
        </p>
      </div>

      <div className="privacy-section">
        <h2>3. After 2 Days</h2>
        <p>
          No refunds will be issued after the 2-day period under any circumstances.
        </p>
      </div>

      <div className="privacy-section">
        <h2>4. Request Process</h2>
        <p>
          To request a refund, please contact us via our <a href="/contact-us">Contact Us</a> page with your order details.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
