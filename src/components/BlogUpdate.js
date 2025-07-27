import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BlogUpdate = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/articles/${slug}`);
        setBlog(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load the blog. Please try again later.');
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:8000/api/articles/${slug}/update/`, blog, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      });
      setMessage('Blog updated successfully');
      setTimeout(() => {
        navigate(`/blog/${slug}`);
      }, 2000);
    } catch (err) {
      setError('Failed to update the blog. Please try again later.');
    }
  };

  if (loading) return <p>Loading blog...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="blog-update">
      <h1>Update Blog</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            name="content"
            value={blog.content}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default BlogUpdate;
