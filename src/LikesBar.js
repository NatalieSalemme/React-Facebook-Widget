import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faHeart } from '@fortawesome/free-solid-svg-icons';

export const LikesBar = props => {
  const likesList = ['Michael Scott', 'Dwight Schrute', 'Kelly Kapoor', 'Andy Bernard',
  'Ryan Howard', 'Kevin Malone', 'Phyllis Vance', 'Oscar Martinez', 'Erin Hannon',
  'Toby Flenderson', 'Stanley Hudson', 'Creed Bratton', 'Meredith Palmer', 'Darryl Philbin'];
  let firstLikes = likesList.slice(0, 2).join(', ');
  let likesHover = likesList.map((name) =>
    <li className="likes-name-item" key={name.toString()}>
      {name}
    </li>
  );
  const thumbsUpIcon = <FontAwesomeIcon icon={faThumbsUp} size="xs"/>
  const heartIcon = <FontAwesomeIcon icon={faHeart} size="xs"/>
  return (
  <div className="likes-bar">
    <div className="likes-icons">
      <div className="tooltip likes-icon-tooltip">
        <span className="likes-icon">{ thumbsUpIcon }</span>
        <span className="tooltiptext likes-icon-tooltiptext">
          <ul style={{width: 'auto', fontSize: '6px'}} className="likes-name-container">
            <span className="likes-header">Like</span>
            {likesHover}
          </ul>
        </span>
    </div>
    <div className="tooltip likes-icon-tooltip">
      <span className="heart-icon">{ heartIcon }</span>
      <span className="tooltiptext likes-icon-tooltiptext">
        <ul style={{width: 'auto', fontSize: '6px'}} className="likes-name-container">
          <span className="likes-header">Love</span>
          {likesHover}
        </ul>
      </span>
  </div>
    </div>
    <div className="tooltip">
      <p className="likes-list">{firstLikes} and {likesList.length - 2} others</p>
      <span className="tooltiptext" style={{width: 'auto', height: 'auto'}}>
        <ul className="likes-name-container">{likesHover}</ul>
      </span>
    </div>
    <p className="status-comments">{props.commentNumber}{props.commentNumber > 1
      || props.commentNumber == 0 ? ' Comments' : ' Comment'}</p>
  </div>
);
}
export default LikesBar;
