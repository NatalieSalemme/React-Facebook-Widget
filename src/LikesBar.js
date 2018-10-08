import React from 'react';

export const LikesBar = props => {
  return (
  <div className="likes-bar">
    <p>Likes bar</p>
    <p>{props.commentNumber}{props.commentNumber > 1 ? ' Comments' : ' Comment'}</p>
  </div>
);
}
export default LikesBar;
