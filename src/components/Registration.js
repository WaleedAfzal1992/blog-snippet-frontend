import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Registration_and_Login.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phonenumber: '',
        password: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const dataToSend = {
            First_name: formData.firstName,
            Last_name: formData.lastName,
            name: formData.username,
            Email: formData.email,
            phone_number: formData.phonenumber,
            password: formData.password,
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', dataToSend, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert("Registration successful!");
            // Redirect or further actions on success
            navigate('/login');
        } catch (error) {
            console.error("There was an error registering the user!", error);
            alert("Registration failed.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div>
                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Phone Number</label>
                <input type="tel" name="phonenumber" value={formData.phonenumber} onChange={handleChange} required pattern="[0-9]{11}" 
        placeholder="e.g. 03001234567" />
             </div>   
            <div>
                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
