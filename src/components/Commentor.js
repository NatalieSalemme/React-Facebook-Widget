import React from 'react';
import '../App.js'
import Comment from './Comment';
import PropTypes from 'prop-types';

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
            handleReply={props.handleReply}
          />
        )}
      </ul>

    </div>
  );
}
Commentor.propTypes = {
  commentors: PropTypes.array.isRequired
}
export default Commentor;
