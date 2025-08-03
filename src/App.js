import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogArticle from './components/BlogArticle';
import BlogList from './components/BlogList';
import BlogDetail from "./components/BlogDetail";
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import Contactus from './components/Contactus';
import BlogUpdate from './components/BlogUpdate';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import PrivacyPolicy from './components/PrivacyPolicy';
import CartPage from './components/CartPage';
import DevopsSolutions from './components/DevOpsSolutions';
import DataExtraction from './components/DataExtraction';
import WebDevelopment from './components/WebDevelopment';
import Passwordresetlink from './components/passwordresetlink';
import PasswordResetPage from './components/PasswordResetPage'
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <Router>
            <NavbarWrapper />
            <div className="content-wrapper">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact-us" element={<Contactus />} />
                    <Route path="/blog/:id/update" element={<BlogUpdate />} />
                    <Route path="/blog/" element={<BlogArticle />} />
                    <Route path="/blog-list" element={<BlogList />} />
                    <Route path="/blog/:slug" element={<BlogDetail />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/courses/:slug" element={<CourseDetail />} />
                    <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                    <Route path="/password-reset-link" element={<Passwordresetlink />} />
                    <Route path="/reset-password/:uid/:token" element={<PasswordResetPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/devops-solution" element={<DevopsSolutions />} />
                    <Route path="/data-extraction" element={<DataExtraction />} />
                    <Route path="/web-development" element={<WebDevelopment />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
            <Footer /> {/* Always render the Footer */}
        </Router>
    );
};

// NavbarWrapper component that conditionally renders the Navbar based on the route
const NavbarWrapper = () => {
    

    // Don't show Navbar on login or register page
    

    return <Navbar />; // Render Navbar for other pages
};

export default App;
