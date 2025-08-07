// src/components/VoucherUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const VoucherUpload = () => {
  const [voucherFile, setVoucherFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e) => {
    setVoucherFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!voucherFile) {
      setErrorMessage("Please select a file before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append('voucher', voucherFile);

    try {
      const response = await axios.post('http://localhost:8000/api/payment-voucher/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccessMessage('Voucher uploaded successfully!');
      setErrorMessage('');
      setVoucherFile(null);
    } catch (error) {
      setErrorMessage('Failed to upload voucher.');
      setSuccessMessage('');
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Upload Payment Voucher</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        <button type="submit">Upload</button>
      </form>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default VoucherUpload;
