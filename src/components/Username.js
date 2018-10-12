import React from 'react';
import { UserDropDown } from './UserDropDown';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHome } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Username = props => {

  const graduationIcon = <FontAwesomeIcon icon={faGraduationCap} size="md"/>
  const homeIcon = <FontAwesomeIcon icon={faHome} size="md"/>
   let todaysDate = new Date();
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
          <div className="avatar-hover">

          <span
            className="avatar-img">
            {props.avatarImg}</span>
          <div className="avatar-hover-text">
            <img src={require('../galaxy.jpg')}
                  className="profile-hover-img"
                  alt="galaxy"
            />


              <img src={require('../avatar.jpg')}
                    className="profile-hover-avatar"
                    alt="avatar" />
              <p className="avatar-name-hover">{props.avatarName}</p>
              <div className="avatar-hover-info">
                <div className="avatar-info-section">
                <span>{graduationIcon} Studied Psychology at <a href="#">San Diego State University</a></span>
                <br />
                <span>Attended from 2012 to 2016</span>
                </div>
                <br />
                <div className="avatar-info-section">
                <span>{homeIcon} Lives in <a href="#">San Diego, CA</a></span>
              </div>
              </div>
          </div>
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
Username.propTypes = {
  avatarName: PropTypes.string.isRequired
}
export default Username;
