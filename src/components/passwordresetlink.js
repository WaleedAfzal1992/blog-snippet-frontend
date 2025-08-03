// pages/ForgotPassword.jsx
import React, { useState } from 'react';
import axios from 'axios';
import '../ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/password-reset/', {
        email,
        frontend_base_url: 'http://localhost:3000',
      });
      setStatus('Check your email for a reset link.');
    } catch (error) {
      setStatus('Error sending reset email.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
      <button type="submit">Send Reset Link</button>
      <p>{status}</p>
    </form>
  );
};

export default ForgotPassword;
