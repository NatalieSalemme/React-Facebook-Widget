import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers} from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Username = props => {
  const usersIcon = <FontAwesomeIcon icon={faUsers} size="xs"/>
  const caretDown = <FontAwesomeIcon icon={faCaretDown} size="xs"/>
  return (
    <div className="username-container">
      <div className="avatar-container">
      <img src={require('./avatar.jpg')} className="avatar-img" alt="avatar"/>
    </div>
    <div className="username-column">
     <h6 className="username">{props.avatarName}</h6>
      <div className="time-row">
      <p className="username-time">September 15 at 11:09 AM </p>
       <div className="users-icon-dropdown">
       <span className="users-icon">{usersIcon}</span>
       <span className="caret-down">{caretDown}</span>
     </div>
   </div>
   </div>
  </div>
  );
}
export default Username;
