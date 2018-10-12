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
      <div className="avatar-container">
      <span>{props.avatarImg}</span>
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
// export class LikeCommentShare extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showMenu: false
//     }
//     this.showMenu = this.showMenu.bind(this);
//   }
// showMenu = e => {
//   e.preventDefault();
//   this.setState({
//     showMenu: !this.state.showMenu
//   });
// }
//
//
//   render() {
//   const thumbsUpIcon = <FontAwesomeIcon icon={faThumbsUp} size="lg"/>
//   const commentIcon = <FontAwesomeIcon icon={faCommentAlt} size="lg"/>
//   const shareIcon = <FontAwesomeIcon icon={faShare} size="lg"/>
//   const heartIcon = <FontAwesomeIcon icon={faHeart} size="xs"/>
//   const laughIcon = <FontAwesomeIcon icon={faLaughSquint} size="xs"/>
//   const wowIcon = <FontAwesomeIcon icon={faSurprise} size="xs"/>
//   const sadIcon = <FontAwesomeIcon icon={faSadTear} size="xs"/>
//   const angryIcon = <FontAwesomeIcon icon={faAngry} size="xs"/>
//   const smThumbsUpIcon = <FontAwesomeIcon icon={faThumbsUp} size="xs"/>
//
//
//   return (
//     <div>
//     <div
//       className="like-comment-share-bar" >
//       <p className="likes-icon-container tooltip">
//         <span style={{marginRight: '3px', color: '#3B5998'}}>{thumbsUpIcon}</span>
//         <span
//           onClick={this.props.addLike}
//           >Like</span>
//         <span className="tooltiptext emoji-hover" style={{marginLeft: '30px', height: '20px'}}>
//              <span className="likes-icon" onClick={this.props.addLike}>{smThumbsUpIcon}</span>
//              <span className="heart-icon" onClick={this.props.addLove}>{heartIcon}</span>
//              <span className="laugh-icon">{laughIcon}</span>
//              <span className="wow-icon">{wowIcon}</span>
//              <span className="sad-icon">{sadIcon}</span>
//              <span className="angry-icon">{angryIcon}</span>
//           </span>
//       </p>
//       <p
//         className="comments-icon-container"
//         onClick={this.props.handleCommentInput}
//         // onClick={props.focusOnInput}
//         >
//         <span style={{marginRight: '3px'}}>
//           {commentIcon}
//         </span>
//         <span>Comment</span>
//       </p>
//       <p onClick={this.showMenu} className="tooltip share-icon-container">
//         <span style={{marginRight: '3px', color: '#ed3b68'}}>
//           {shareIcon}
//         </span>Share</p>
//       {
//         this.state.showMenu ? (
//           <div
//             ref={(element) => {
//               this.dropdownMenu = element;
//             }}
//             >
//             <div className="triangle"></div>
//             <div className="share-container">
//
//               <div className="share-dd-btn">
//                 <span>Share Now (Friends)</span>
//               </div>
//               <div className="share-dd-btn">
//                 <span>Share in a Group</span>
//                 </div>
//               <div className="share-dd-btn">
//                 <span>Share...</span>
//               </div>
//               <div className="share-dd-btn">
//                 <span>Send as Message</span>
//               </div>
//               <div className="share-dd-btn">
//                 <span>Share on a friend's timeline</span>
//               </div>
//             </div>
//           </div>
//         )
//         : (
//           null
//         )
//       }
//     </div>
//   </div>
//     );
//     }
//   }
//   // LikeCommentShare.propTypes = {
//   //   focusOnInput: PropTypes.func.isRequired
//   // }
//   export default LikeCommentShare;
//
