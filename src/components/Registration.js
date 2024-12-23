import React, { useState } from 'react';
import axios from 'axios';
import '../Registration_and_Login.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

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
