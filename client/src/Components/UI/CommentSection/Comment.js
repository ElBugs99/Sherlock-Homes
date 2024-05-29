import React from 'react';
import UserImage from '../UserCard/UserImage';

export default function Comment({
  commentId,
  username,
  content,
  date,
  edited,
  userId,
  currentUserId,
  onEdit,
  onEditSubmit,
  editingCommentId,
  editingContent,
  setEditingContent,
  setEditingCommentId
}) {
  return (
    <div className='comment-container'>
      <div className='comment-content'>
        <div className='comment-header'>
          <div>
            <UserImage size={80} />
          </div>
          <div className='comment-username'>{username}</div>
          <div className='comment-date'>{date}</div>
          {edited && <span className='edited-label'>(editado)</span>}
        </div>
        <div className='comment-text-wrapper'>
          {editingCommentId === commentId ? (
            <form onSubmit={onEditSubmit} className="edit-form">
              <input
                type="text"
                value={editingContent}
                onChange={(e) => setEditingContent(e.target.value)}
                className="comment-input"
              />
              <button type="submit" className="edit-button">Guardar</button>
              <button type="button" className="cancel-button" onClick={() => setEditingCommentId(null)}>Cancelar</button>
            </form>
          ) : (
            <div className='comment-text'>
              {content}
            </div>
          )}
        </div>
      </div>
      {currentUserId && (
        <div className='comment-actions'>
          {currentUserId === userId && editingCommentId !== commentId && (
            <button onClick={() => onEdit(commentId, content)} className="edit-comment-button">
              Editar
            </button>
          )}
        </div>
      )}
    </div>
  );
}
