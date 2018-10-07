import React from 'react';

const Username = props => {
  return (
    <div className="username-container">
      <img src={require('./avatar.jpg')} className="avatar-img" />
     <h6 className="username">{props.avatarName}</h6>
     <p className="username-time">September 15 at 11:09 AM</p>
  </div>
  );
}
export default Username;
