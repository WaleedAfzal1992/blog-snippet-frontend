// src/components/BlogList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../bloglist.css';
import Footer from './Footer';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blog articles from the API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/articles/");
        setBlogs(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load blogs. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading blogs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="blog-list">
      <h1>Blog Articles</h1>
      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id} className="blog-item">
              <h2>{blog.title}</h2>
              <p>{blog.content.substring(0, 100)}...</p>
              <div className="buttons">
              <a href={`/blog/${blog.id}`} className="read-more">
                Read More
              </a>
              </div>
            </li>
          ))}
        </ul>
      )}
      
    </div>
    
  );
};

export default BlogList;
