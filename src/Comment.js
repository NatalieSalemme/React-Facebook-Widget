import React from 'react';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const Comment = props => {
  const ellipsisIcon = <FontAwesomeIcon icon={faEllipsisH} size="xs"/>
  return (
    <li key={props.key} className="comment-list">
      <div className="comment">
      <span>{props.photo} </span>
      <div className="commentor-and-comment">
      <span className="commentor-name">
        {props.name}
      </span>
      <span className="comment-text"> {props.comment}</span>
    </div>
    <span
      onClick={props.handleRemove}
      className="ellipsis-icon">
      {ellipsisIcon}</span>
    </div>
      <p className="like-reply">Like</p>
      <p className="like-reply">Reply</p>
    </li>
  );
}
export default Comment;
