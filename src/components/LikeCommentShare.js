import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faCommentAlt, faShare } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types';

export const LikeCommentShare = props => {
  const thumbsUpIcon = <FontAwesomeIcon icon={faThumbsUp} size="lg"/>
  const commentIcon = <FontAwesomeIcon icon={faCommentAlt} size="lg"/>
  const shareIcon = <FontAwesomeIcon icon={faShare} size="lg"/>
  return (
  <div className="like-comment-share-bar">
    <p className="likes-icon-container"><span className="likes-icon" style={{marginRight: '3px'}}>
      {thumbsUpIcon}
      </span>Like
    </p>
    <p
      className="comments-icon-container"
      // onClick={props.focusOnInput}
      >
      <span style={{marginRight: '3px'}}>
        {commentIcon}
      </span>Comment
    </p>
    <p className="share-icon-container"><span style={{marginRight: '3px', color: '#ed3b68'}}>{shareIcon}</span>Share</p>
  </div>
  );
}
// LikeCommentShare.propTypes = {
//   focusOnInput: PropTypes.func.isRequired
// }
export default LikeCommentShare;
