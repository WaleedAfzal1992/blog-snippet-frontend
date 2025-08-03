// pages/ResetPassword.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = () => {
  const { uid, token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/password-reset-confirm/', {
        uid,
        token,
        new_password: newPassword,
      });
      setStatus('Password reset successful!');
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      setStatus('Reset failed. Try again.');
    }
  };

  return (
    <form onSubmit={handleReset}>
      <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" />
      <button type="submit">Reset Password</button>
      <p>{status}</p>
    </form>
  );
};

export default ResetPassword;
