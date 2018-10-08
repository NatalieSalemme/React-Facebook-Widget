import React from 'react';

export const LikesBar = props => {
  const likesList = ['Aria Montgomery', 'Spencer Hastings', 'Emily Fields',
  'Hanna Marin', 'Alison DiLaurentis', 'Mona Vanderwaal', 'Ezra Fitz'];
  let firstLikes = likesList.slice(0, 2).join(', ');
  let likesHover = likesList.map((name) =>
    <li className="likes-name-item" key={name.toString()}>
      {name}
    </li>
  );
  return (
  <div className="likes-bar">
    <div className="tooltip">
      <p className="likes-list">{firstLikes} and {likesList.length - 2} others</p>
      <span className="tooltiptext" style={{width: 'auto', height: 'auto'}}>
        <ul className="likes-name-container">{likesHover}</ul>
      </span>
    </div>
    <p className="status-comments">{props.commentNumber}{props.commentNumber > 1 ? ' Comments' : ' Comment'}</p>
  </div>
);
}
export default LikesBar;
