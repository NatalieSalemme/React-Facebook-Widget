import React from 'react';

const Username = props => {
  return (
    <div className="username-container">
      <div className="avatar-container">
      <img src={require('./avatar.jpg')} className="avatar-img" alt="avatar"/>
    </div>
    <div className="username-column">
     <h6 className="username">{props.avatarName}</h6>
     <p className="username-time">September 15 at 11:09 AM</p>
   </div>
  </div>
  );
}
export default Username;
