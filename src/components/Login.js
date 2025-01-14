import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../LoginForm.css'; // Adjust the path if necessary

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [error, setError] = useState(null); // For handling error messages

    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = {
            username: formData.username,
            password: formData.password,
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', dataToSend, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Assuming response contains token or success data
            if (response.status === 200) {
                // Store the token in localStorage (or sessionStorage for temporary storage)
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('user_info',  JSON.stringify(response.data.user_info));

                alert("Login successful!");
                // Redirect to home page after successful login
                navigate('/');
            }
        } catch (error) {
            console.error("There was an error logging in the user!", error);
            setError("Login failed. Please check your credentials and try again.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-content">
                {/* Image section in JSX */}
                <div className="login-image">
                    <img src="/su07nq96.png" alt="Login" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Username</label>
                            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <button type="submit">Login</button>

                        {error && <div className="error-message">{error}</div>} {/* Display error message */}

                        <div className="separator">or</div>
                        <div className="signup-link">
                            <Link to="/register">Don't have an account? Sign up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
