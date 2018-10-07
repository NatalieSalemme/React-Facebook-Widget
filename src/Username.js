import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCaretDown } from '@fortawesome/free-solid-svg-icons';


const Username = props => {
  const usersIcon = <FontAwesomeIcon icon={faUsers} size="xs"/>
  const caretDown = <FontAwesomeIcon icon={faCaretDown} size="xs"/>
  let todaysDate = new Date;
  let militaryHours = todaysDate.getHours();
  let hours = militaryHours > 12 ? militaryHours - 12 : militaryHours;
  let amOrPM = militaryHours > 12 ? 'pm' : 'am';
  let shortDate = (todaysDate.getMonth() + 1) + '/' + todaysDate.getDate() + '/' +
     todaysDate.getFullYear() + ' ' + hours + ':' + todaysDate.getMinutes() + amOrPM;

  return (
    <div className="username-container">
      <div className="avatar-container">
      <img src={require('./avatar.jpg')} className="avatar-img" alt="avatar"/>
    </div>
    <div className="username-column">
     <h6 className="username">{props.avatarName}</h6>
      <div className="time-row">
        <div className="time-tooltip">
      <p className="username-time">September 15 at 11:09 AM </p>
      <span className="time-tooltiptext">{shortDate.toString()}</span>
    </div>
      <div className="users-icon-dropdown tooltip">
        <span className="tooltiptext">Your friends</span>
      <span className="users-icon">{usersIcon}</span>
      <span className="caret-down">{caretDown}</span>
      </div>


   </div>
   </div>
  </div>
  );
}
export default Username;
