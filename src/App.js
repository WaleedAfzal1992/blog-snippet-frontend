import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import BlogArticle from './components/BlogArticle';
import BlogList from './components/BlogList';
import BlogDetail from "./components/BlogDetail";
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import Contactus from './components/Contactus';
import BlogUpdate from './components/BlogUpdate';
import Footer from './components/Footer'; // Import Footer

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
                    <Route path="/blog/:id" element={<BlogDetail />} />
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
    const location = useLocation();

    // Don't show Navbar on login or register page
    

    return <Navbar />; // Render Navbar for other pages
};

export default App;
