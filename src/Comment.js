import React from 'react';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const Comment = props => {
  const ellipsisIcon = <FontAwesomeIcon icon={faEllipsisH} size="xs"/>
  return (
    <li key={props.key}>
      <span>photo here </span>
      <span>{props.name}</span>
      <span> {props.comment}</span>
      <span
        onClick={props.handleRemove}
        className="ellipsis-icon">
        {ellipsisIcon}</span>
      <p className="like-reply">Like</p>
      <p className="like-reply">Reply</p>
    </li>
  );
}
export default Comment;
