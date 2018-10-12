import React from 'react';
import { UserDropDown } from './UserDropDown';
import '../App.css';
import PropTypes from 'prop-types';

const Username = props => {


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
          <div className="avatar-container avatar-hover">

          <span
            className="avatar-img">
            {props.avatarImg}</span>
          <span className="avatar-hover-text">
            <img src={require('../galaxy.jpg')}
                  className="profile-hover-img"
                  alt="guatemala"/>


              <img src={require('../avatar.jpg')}
                    className="profile-hover-avatar"
                    alt="avatar" />
          </span>
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


//
// const ThreeDots = props => {
//   const bookmark = <FontAwesomeIcon icon={faBookmark} />;
//   return (
//     <div className="dots-container">
//       <div className="dropdown">
//         <button href="https://www.facebook.com/" className="dropbtn">...</button>
//         <div className="dropdown-content">
//           <a href="https://www.facebook.com/" className="under-horizontal-bar">
//             <span className="bookmark">{bookmark}</span>
//               Save post
//             </a>
//           <a href="https://www.facebook.com/">Edit Post</a>
//           <a href="https://www.facebook.com/">Change Date</a>
//           <a href="https://www.facebook.com/">Turn off notifications for this post</a>
//           <a href="https://www.facebook.com/">Show in Tab</a>
//           <a href="https://www.facebook.com/" className="under-horizontal-bar">Hide from timeline</a>
//           <a href="https://www.facebook.com/">Delete</a>
//           <a href="https://www.facebook.com/">Turn Off Translations</a>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default ThreeDots;
