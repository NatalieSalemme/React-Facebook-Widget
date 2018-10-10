import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faHeart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export const LikesBar = props => {
  let likesList = (props.likeList)
  let loveList = (props.loveList);
  let loveLike = likesList.concat(loveList);
  let firstLikes = loveLike.slice(0, 2).join(', ');
  let likesHover = likesList.map((name) =>
    <li className="likes-name-item" key={name.toString()}>
      {name}
    </li>
  );
  let loveHover = loveList.map((name) =>
  <li className="likes-name-item" key={name.toString()}>
    {name}
  </li>);
  let loveLikeHover = loveLike.map((name) =>
  <li className="likes-name-item" key={name.toString()}>
    {name}
  </li>);
  const thumbsUpIcon = <FontAwesomeIcon icon={faThumbsUp} size="xs"/>
  const heartIcon = <FontAwesomeIcon icon={faHeart} size="xs"/>

  return (
  <div className="likes-bar">
    <div className="likes-icons">
      <div className="tooltip likes-icon-tooltip">
        <span
          className="likes-icon"
            onClick={props.addLike}
            >{ thumbsUpIcon }</span>
        <span className="tooltiptext likes-icon-tooltiptext">
          <ul style={{width: 'auto', fontSize: '6px'}} className="likes-name-container">
            <span
              className="likes-header">Like</span>
            {likesHover}
          </ul>
        </span>
    </div>
    <div className="tooltip likes-icon-tooltip">
      <span
        className="heart-icon"
        onClick={props.addLove}
        >{ heartIcon }</span>
      <span className="tooltiptext likes-icon-tooltiptext">
        <ul style={{width: 'auto', fontSize: '6px'}} className="likes-name-container">
          <span className="likes-header">Love</span>
          {loveHover}
        </ul>
      </span>
  </div>
    </div>
    <div className="tooltip">
      <p className="likes-list">{firstLikes} and {loveLike.length - 2} others</p>
      <span className="tooltiptext" style={{width: 'auto', height: 'auto'}}>
        <ul className="likes-name-container">{loveLikeHover}</ul>
      </span>
    </div>
    <p
      className="status-comments"
      onClick={props.showCommentSection}
      >{props.commentNumber}{props.commentNumber > 1
      || props.commentNumber === 0 ? ' Comments' : ' Comment'}</p>
  </div>
);
}

LikesBar.propTypes = {
  commentNumber: PropTypes.number.isRequired
}
export default LikesBar;
