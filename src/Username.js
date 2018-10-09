import React from 'react';
import { UserDropDown } from './UserDropDown';

const Username = props => {

  let todaysDate = new Date;
  let militaryHours = todaysDate.getHours();
  let hours = militaryHours > 12 ? militaryHours - 12 : militaryHours;
  let amOrPM = militaryHours > 12 ? 'pm' : 'am';
  let militaryMinutes = todaysDate.getMinutes();
  let minutes = militaryMinutes < 10 ? '0' + militaryMinutes : militaryMinutes;
  let shortDate = (todaysDate.getMonth() + 1) + '/' + todaysDate.getDate() + '/' +
     todaysDate.getFullYear() + ' ' + hours + ':' + minutes + ' ' +
     amOrPM;

  return (
    <div className="username-container">
      <div className="avatar-container">
      <img
        src={require('./avatar.jpg')}
        className="avatar-img"
        alt="avatar"
        style={{paddingTop: 20}}/>
    </div>
    <div className="username-column">
     <h6 className="username">{props.avatarName}</h6>
      <div className="time-row">
        <div className="time-tooltip">
      <p className="username-time">September 15 at 11:09 AM </p>
      <span className="time-tooltiptext">{shortDate.toString()}</span>
    </div>
      <UserDropDown />
   </div>
   </div>
  </div>
  );
}
export default Username;
