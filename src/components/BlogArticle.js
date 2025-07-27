import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../styles.css';

const CreateArticle = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [isSuperUser, setIsSuperUser] = useState(null);
  const [isStaffMember, setIsStaffMember] = useState(null);

  React.useEffect(() => {
    const fetchUserRole = () => {
      const userInfo = JSON.parse(localStorage.getItem('user_info'));
      if (userInfo) {
        setIsSuperUser(userInfo.is_superuser);
        setIsStaffMember(userInfo.is_staff);
      }
    };
    fetchUserRole();
  }, []);

  if (isSuperUser === null || isStaffMember === null) {
    return <p>Loading...</p>;
  }

  if (!isSuperUser && !isStaffMember) {
    return <Navigate to="/" />;
  }

  const handleBold = () => {
    const textarea = document.getElementById('content');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.slice(start, end);

    if (selectedText.trim()) {
      const updatedContent =
        content.slice(0, start) + `**${selectedText}**` + content.slice(end);
      setContent(updatedContent);
    }
  };

  const handleBullets = () => {
    const textarea = document.getElementById('content');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.slice(start, end);

    if (selectedText.trim()) {
      const bulletText = selectedText
        .split('\n')
        .map((line) => `- ${line}`)
        .join('\n');
      const updatedContent =
        content.slice(0, start) + bulletText + content.slice(end);
      setContent(updatedContent);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const article = { title, slug, content };

    fetch('http://127.0.0.1:8000/api/articles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Article created:', data);
      })
      .catch((error) => console.error('Error creating article:', error));
  };

  return (
    <div>
      <h1>Create a New Article</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Slug:</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your article here..."
          />
        </div>
        <div className="toolbar">
          <button type="button" onClick={handleBold}>
            Bold
          </button>
          <button type="button" onClick={handleBullets}>
            Bullets
          </button>
        </div>
        <button type="submit">Create Article</button>
      </form>
    </div>
  );
};

export default CreateArticle;
