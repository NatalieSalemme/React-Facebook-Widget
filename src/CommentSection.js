import React from 'react';
import './App.css';
import Commentor from './Commentor';
import CommentBar from './CommentBar';

export const CommentSection = props => {
  return (
    <div className="comment-section">
      <Commentor
        commentors={props.commentors}
        removeCommentAt={props.removeCommentAt}/>
      <CommentBar
        handleNameInput={props.handleNameInput}
        value={props.value}
        newCommentorSubmitHandler={props.newCommentorSubmitHandler}
        />
    </div>
  );
}
export default CommentSection;
