import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers} from '@fortawesome/free-solid-svg-icons';

const Username = props => {
  const usersIcon = <FontAwesomeIcon icon={faUsers} />
  return (
    <div className="username-container">
      <div className="avatar-container">
      <img src={require('./avatar.jpg')} className="avatar-img" alt="avatar"/>
    </div>
    <div className="username-column">
     <h6 className="username">{props.avatarName}</h6>
     <p className="username-time">September 15 at 11:09 AM
       <span className="users-icon">{usersIcon}</span></p>
   </div>
  </div>
  );
}
export default Username;
