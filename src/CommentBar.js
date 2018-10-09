import React from 'react';
import './App.css';
export const CommentBar = () => {
  return (
    <div className="comment-bar-container">
      <img src={require('./avatar.jpg')} className="avatar-img" alt="avatar"/>
      <input className="comment-input" type="text" placeholder="Write a comment..."/>
    </div>
  );
}
export default CommentBar;
