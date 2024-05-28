import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import './commentSection.css';
import Comment from './Comment';

export default function CommentSection({ propertyId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [commentError, setCommentError] = useState('');

  const token = localStorage.getItem('token');
  const decodedToken = token ? jwtDecode(token) : null;
  const userId = decodedToken ? decodedToken.id : null;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`http://localhost:3001/getCommentsByPublication/${propertyId}`);
        const data = await response.json();
        setComments(data.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    fetchComments();
  }, [propertyId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      window.location.href = '/login';
      return;
    }
    if (!newComment.trim()) {
      setCommentError('El comentario no puede estar vacío.');
      return;
    }
    if (newComment.trim().length < 3) {
      setCommentError('El comentario debe tener al menos 3 caracteres.');
      return;
    }
    if (newComment.length > 50) {
      setCommentError('El comentario no puede tener más de 50 caracteres.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/uploadComment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, publicationId: propertyId, content: newComment.trim() }),
      });

      const data = await response.json();
      if (data.success) {
        setComments([...comments, data.comment]);
        setNewComment('');
        setCommentError('');
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
      {commentError && <div className="comment-error">{commentError}</div>}

      { comments?.length > 0 ?
        <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <Comment
              content={comment.content}
              username={comment.username}
              date={comment.date_created}
            />
          </div>
        ))}
      </div>
      :
      <div className='no-comments'>Esta publicación aún no tiene comentarios</div>
      }

    </div>
  );
}
