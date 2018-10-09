import React from 'react';
import './App.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Comment from './Comment';

const Commentor = props => {
  return (
    <div>
      <ul>
        {props.commentors.map((commentor, index) =>
          <Comment
            key={index}
            name={commentor.name}
            comment={commentor.comment}
            photo={commentor.photo}
            handleRemove={() => props.removeCommentAt(index)}
            />
        )}
      </ul>

    </div>
  );
}
export default Commentor;
