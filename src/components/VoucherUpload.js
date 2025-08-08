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
      setErrorMessage("Please select a voucher screenshot before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append('voucher', voucherFile);

    try {
      const response = await axios.post('http://localhost:8000/api/payment-voucher/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        },
      });

      setSuccessMessage('Your voucher has been uploaded successfully!');
      setErrorMessage('');
      setVoucherFile(null);
    } catch (error) {
      setErrorMessage('There was an error uploading your voucher. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto 0', padding: 20 }}>
      <h2>Upload Payment Voucher</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: 10 }}>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        <button type="submit" className="btn-checkout">Submit Voucher</button>
      </form>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {/* Payment Info Box */}
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        marginTop: '30px'
      }}>
        <h3 style={{ marginTop: 0 }}>Complete Your Payment</h3>
        <p>
          To proceed with your registration/purchase, please send the required payment to the following <strong>JazzCash</strong> number:
        </p>
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#d9534f' }}>
          0329 4374814
        </p>
        <p>
          After completing the payment, kindly upload a clear screenshot of your payment voucher above using the form.
        </p>
        <p>
          Once we verify your payment, you'll receive a confirmation shortly.
        </p>
      </div>
    </div>
  );
};

export default VoucherUpload;
