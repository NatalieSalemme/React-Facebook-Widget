import React from 'react';

export const LikesBar = props => {
  const likesList = ['Aria Montgomery', 'Spencer Hastings', 'Emily Fields',
  'Hanna Marin', 'Alison DiLaurentis', 'Mona Vanderwaal', 'Exra Fitz'];
  let firstLikes = likesList.slice(0, 2).join(', ');
  return (
  <div className="likes-bar">
    <p>{firstLikes} and {likesList.length - 2} others</p>
    <p>{props.commentNumber}{props.commentNumber > 1 ? ' Comments' : ' Comment'}</p>
  </div>
);
}
export default LikesBar;
