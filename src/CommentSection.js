import React from 'react';
import './App.css';
import Commentor from './Commentor';

export const CommentSection = props => {
  return (
    <div className="comment-section">
      <Commentor
          comments={'coming from comment section'}/>
    </div>
  );
}
export default CommentSection;
