import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../blogdetail.css";
import { FaRegCopy } from "react-icons/fa"; // Import copy icon

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate hook for navigation
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isSuperUser, setIsSuperUser] = useState(false);
  const [isStaffMember, setIsStaffMember] = useState(false);

  useEffect(() => {
    const fetchUserRole = () => {
      const userInfo = JSON.parse(localStorage.getItem("user_info"));
      if (userInfo) {
        setIsSuperUser(userInfo.is_superuser);
        setIsStaffMember(userInfo.is_staff);
      }
    };

    fetchUserRole();
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/articles/${id}`);
        setBlog(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load the blog. Please try again later.");
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (confirmDelete) {
      const token = localStorage.getItem("access_token"); // Assuming JWT is stored in localStorage
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/articles/${id}/delete/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert(response.data.message);
        navigate("/blog-list"); // Redirect to the homepage or another page after deletion
      } catch (error) {
        alert("Failed to delete blog: " + error.response.data.error);
      }
    }
  };

  if (loading) return <p>Loading blog...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="blog-detail">
        <h1>{blog.title}</h1>
        <ReactMarkdown
          children={blog.content}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              const codeContent = String(children).replace(/\n$/, "");

              return !inline && match ? (
                <div style={{ position: "relative" }}>
                  <FaRegCopy
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "10px",
                      color: "white",
                      fontSize: "18px",
                      cursor: "pointer",
                      zIndex: 10,
                    }}
                    title="Copy"
                    onClick={() => copyToClipboard(codeContent)}
                  />
                  <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {codeContent}
                  </SyntaxHighlighter>
                </div>
              ) : (
                <code {...props}>{children}</code>
              );
            },
          }}
        />
        {(isSuperUser || isStaffMember) && (
          <div className="blog-actions">
            <Link to={`/blog/${id}/update`} className="button-updated">
              Update
            </Link>
            <button onClick={handleDelete} className="button-delete">
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
