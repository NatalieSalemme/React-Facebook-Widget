import React from 'react';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faThumbsUp, faCircle } from '@fortawesome/free-solid-svg-icons';

const Comment = props => {
  const ellipsisIcon = <FontAwesomeIcon icon={faEllipsisH} size="xs"/>
  const thumbsUpIcon = <FontAwesomeIcon icon={faThumbsUp} size="xs"/>
  const circleIcon = <FontAwesomeIcon icon={faCircle} size="xs"/>
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
    <div className="tooltip">
    <span
      onClick={props.handleRemove}
      className="ellipsis-icon">
      {ellipsisIcon}</span>
      <span className="tooltiptext small-popup">Remove this</span>
    </div>
    </div>
    <div className="like-reply-container">
      <div className="tooltip">
      <p className="like-reply">Like</p>
      <span className="tooltiptext">Like</span>
    </div>
    <span className="circle-icon">{circleIcon}</span>
    <div className="tooltip">
      <p className="like-reply">Reply</p>
      <span className="tooltiptext">Reply</span>
    </div>
    </div>
    </li>
  );
}
export default Comment;
