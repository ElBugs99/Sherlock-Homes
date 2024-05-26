// CommentSection.js
import React, { useState, useEffect } from 'react';
import './commentSection.css';

export default function CommentSection({ propertyId }) {
  const [comments, setComments] = useState();
  const [newComment, setNewComment] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  /* useEffect(() => {
    // Fetch comments from the server when the component mounts
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:3001/comments/${propertyId}`);
        const data = await response.json();
        setComments(data.comments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    fetchComments();
  }, [propertyId]); */

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const response = await fetch(`http://localhost:3001/comments/${propertyId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newComment }),
      });

      const data = await response.json();
      if (data.success) {
        setComments([...comments, data.comment]);
        setNewComment('');
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div className="comment-section">

      <form onSubmit={handleCommentSubmit} className="comment-form">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe un comentario..."
          className={`comment-input ${inputFocused ? 'focused' : ''}`}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
        <div className='submit-container'>
            <button type="submit" className="submit-button">Publicar</button>
        </div>
      </form>

      { comments ?
        <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment.text}
          </div>
        ))}
      </div>
      :
      <div className='no-comments'>Esta publicación aún no tiene comentarios</div>
      }

    </div>
  );
}
