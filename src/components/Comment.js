import React from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faThumbsUp, faCircle, faHeart, faLaughSquint, faSurprise, faSadTear, faAngry } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Comment = props => {
  const ellipsisIcon = <FontAwesomeIcon icon={faEllipsisH} size="xs"/>
  const thumbsUpIcon = <FontAwesomeIcon icon={faThumbsUp} size="xs"/>
  const circleIcon = <FontAwesomeIcon icon={faCircle} size="xs"/>
  const heartIcon = <FontAwesomeIcon icon={faHeart} size="xs"/>
  const laughIcon = <FontAwesomeIcon icon={faLaughSquint} size="xs"/>
  const wowIcon = <FontAwesomeIcon icon={faSurprise} size="xs"/>
  const sadIcon = <FontAwesomeIcon icon={faSadTear} size="xs"/>
  const angryIcon = <FontAwesomeIcon icon={faAngry} size="xs"/>
  return (
    <li className="comment-list">
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
      <span className="tooltiptext emoji-hover">
        <span className="likes-icon">{thumbsUpIcon}</span>
        <span className="heart-icon">{heartIcon}</span>
        <span className="laugh-icon">{laughIcon}</span>
        <span className="wow-icon">{wowIcon}</span>
        <span className="sad-icon">{sadIcon}</span>
        <span className="angry-icon">{angryIcon}</span>
      </span>
    </div>
    <span className="circle-icon">{circleIcon}</span>
      <p
        className="like-reply"
        // onClick={props.handleReply}
        >Reply</p>
    </div>
    </li>
  );
}
Comment.propTypes = {
  photo: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  // handleReply: PropTypes.func.isRequired

}
export default Comment;
