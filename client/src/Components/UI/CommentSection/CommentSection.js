import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import './commentSection.css';
import Comment from './Comment';

export default function CommentSection({ propertyId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [commentError, setCommentError] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingContent, setEditingContent] = useState('');

  const token = localStorage.getItem('token');
  const decodedToken = token ? jwtDecode(token) : null;
  const userId = decodedToken ? decodedToken.id : null;

  //TODO add comment deleted and edited confirmation message

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

  const handleEditComment = (commentId, content) => {
    setEditingCommentId(commentId);
    setEditingContent(content);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!editingContent.trim()) {
      setCommentError('El comentario no puede estar vacío.');
      return;
    }
    if (editingContent.trim().length < 3) {
      setCommentError('El comentario debe tener al menos 3 caracteres.');
      return;
    }
    if (editingContent.length > 50) {
      setCommentError('El comentario no puede tener más de 50 caracteres.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/updateComment/${editingCommentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: editingContent.trim(), edited: true }),
      });

      const data = await response.json();
      if (data.success) {
        const updatedComments = comments.map((comment) =>
          comment.comment_id === editingCommentId
            ? { ...comment, content: editingContent.trim(), edited: true }
            : comment
        );
        setComments(updatedComments);
        setEditingCommentId(null);
        setEditingContent('');
        setCommentError('');
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      const response = await fetch(`http://localhost:3001/deleteComment/${commentId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (data.success) {
        const updatedComments = comments.filter(comment => comment.comment_id !== commentId);
        setComments(updatedComments);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
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
          {commentError && <div className="comment-error">{commentError}</div>}
          <button type="submit" className="submit-button">Publicar</button>
        </div>
      </form>

      {comments?.length > 0 ? (
        <div className="comments-list">
          {comments.map((comment) => (
            <Comment
              key={comment.comment_id}
              commentId={comment.comment_id}
              username={comment.username}
              content={comment.content}
              date={comment.date_created}
              edited={comment.edited}
              userId={comment.user_id}
              currentUserId={userId}
              onEdit={handleEditComment}
              onEditSubmit={handleEditSubmit}
              onDelete={handleDeleteComment}
              editingCommentId={editingCommentId}
              editingContent={editingContent}
              setEditingContent={setEditingContent}
              setEditingCommentId={setEditingCommentId}
            />
          ))}
        </div>
      ) : (
        <div className='no-comments'>Esta publicación aún no tiene comentarios</div>
      )}
    </div>
  );
}
