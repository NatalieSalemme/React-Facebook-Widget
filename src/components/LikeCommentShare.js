import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faShare, faEllipsisH, faThumbsUp, faCircle, faHeart, faLaughSquint, faSurprise, faSadTear, faAngry } from '@fortawesome/free-solid-svg-icons';
// import PropTypes from 'prop-types';

export class LikeCommentShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true
    }
    this.showMenu = this.showMenu.bind(this);
  }
showMenu = e => {
  e.preventDefault();
  this.setState({
    showMenu: !this.state.showMenu
  });
}


  render() {
  const thumbsUpIcon = <FontAwesomeIcon icon={faThumbsUp} size="lg"/>
  const commentIcon = <FontAwesomeIcon icon={faCommentAlt} size="lg"/>
  const shareIcon = <FontAwesomeIcon icon={faShare} size="lg"/>
  const heartIcon = <FontAwesomeIcon icon={faHeart} size="xs"/>
  const laughIcon = <FontAwesomeIcon icon={faLaughSquint} size="xs"/>
  const wowIcon = <FontAwesomeIcon icon={faSurprise} size="xs"/>
  const sadIcon = <FontAwesomeIcon icon={faSadTear} size="xs"/>
  const angryIcon = <FontAwesomeIcon icon={faAngry} size="xs"/>
  const smThumbsUpIcon = <FontAwesomeIcon icon={faThumbsUp} size="xs"/>


  return (
    <div>
    <div
      className="like-comment-share-bar" >
      <p className="likes-icon-container tooltip">
        <span style={{marginRight: '3px', color: '#3B5998'}}>{thumbsUpIcon}</span>
        <span
          // onClick={props.addLike}
          >Like</span>
        <span className="tooltiptext emoji-hover" style={{marginLeft: '30px', height: '20px'}}>
             <span className="likes-icon">{smThumbsUpIcon}</span>
             <span className="heart-icon">{heartIcon}</span>
             <span className="laugh-icon">{laughIcon}</span>
             <span className="wow-icon">{wowIcon}</span>
             <span className="sad-icon">{sadIcon}</span>
             <span className="angry-icon">{angryIcon}</span>
          </span>
      </p>
      <p
        className="comments-icon-container"
        // onClick={props.focusOnInput}
        >
        <span style={{marginRight: '3px'}}>
          {commentIcon}
        </span>
        <span>Comment</span>
      </p>
      <p onClick={this.showMenu} className="tooltip share-icon-container">
        <span style={{marginRight: '3px', color: '#ed3b68'}}>
          {shareIcon}
        </span>Share</p>
      {
        this.state.showMenu ? (
          <div
            ref={(element) => {
              this.dropdownMenu = element;
            }}
            >
          <div className="share-container">
              <div className="share-dd-btn">
                <span>Share Now (Friends)</span>
              </div>
              <div className="share-dd-btn">
                <span>Share in a Group</span>
                </div>
              <div className="share-dd-btn">
                <span>Share...</span>
              </div>
              <div className="share-dd-btn">
                <span>Send as Message</span>
              </div>
              <div className="share-dd-btn">
                <span>Share on a friend's timeline</span>
              </div>
            </div>
          </div>
        )
        : (
          null
        )
      }

    </div>
  </div>
    );
    }
  }
  // LikeCommentShare.propTypes = {
  //   focusOnInput: PropTypes.func.isRequired
  // }
  export default LikeCommentShare;

  //
  //
  // export class UserDropDown extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       showMenu: false
  //     };
  //     this.showMenu = this.showMenu.bind(this);
  //   }
  //
  //   showMenu = e => {
  //     e.preventDefault();
  //     this.setState({
  //       showMenu: !this.state.showMenu
  //     });
  //   }
  //   render() {
  //     const usersIcon = <FontAwesomeIcon icon={faUsers} size="xs"/>
  //     const caretDown = <FontAwesomeIcon icon={faCaretDown} size="xs"/>
  //     const globeIcon = <FontAwesomeIcon icon={faGlobe} size="xs"/>
  //     const usersExceptIcon = <FontAwesomeIcon icon={faUserTimes} size="xs"/>
  //     const lockIcon = <FontAwesomeIcon icon={faLock} size="xs"/>
  //     return (
  //       <div>
  //         <div onClick={this.showMenu}
  //           className="users-icon-dropdown tooltip">
  //            <span className="tooltiptext">Your friends</span>
  //            <span className="users-icon">
  //              {this.state.showMenu ? <span style={{backgroundColor: '#3B5998', marginLeft: '-1px', padding: '0 1px', color: 'white'}}>{usersIcon}</span> : <span>{usersIcon}</span>}
  //            </span>
  //           <span className="caret-down">
  //           {this.state.showMenu ? <span style={{backgroundColor: '#3B5998', color: 'white'}}>{caretDown}</span> : <span>{caretDown}</span>}
  //           </span>
  //         </div>
          // {
          //   this.state.showMenu ? (
          //     <div
          //       className="users-icon-menu"
          //       ref={(element) => {
          //         this.dropdownMenu = element;
          //       }}
          //       >
          //     <div className="users-icon-container">
          //       <p className="users-dropdown-see">Who should see this?</p>
          //         <div className="users-icon-btn">
          //           <span className="users-dropdown-icon">{globeIcon}</span>
          //             Public
          //             <br />
          //             <span className="users-dropdown-subtext">Anyone on or off Facebook</span>
          //         </div>
          //         <div className="users-icon-btn">
          //           <span className="users-dropdown-icon">{usersIcon}</span>
          //             Friends
          //             <br />
          //             <div className="users-dropdown-subtext">Your friends on Facebook</div>
          //           </div>
          //         <div className="users-icon-btn">
          //           <span className="users-dropdown-icon">{usersExceptIcon}</span>
          //           Friends except...
          //           <br />
          //           <div className="users-dropdown-subtext">Don't show to some friends</div>
          //         </div>
          //         <div className="users-icon-btn">
          //           <span className="users-dropdown-icon">{lockIcon}</span>
          //           Only me
          //           <br />
          //           <span className="users-dropdown-subtext">Only me</span>
          //         </div>
          //           <p className="users-dropdown-more">
          //             <span style={{marginLeft: '2px', paddingRight: '3px'}}>{caretDown}</span>
          //             More...
          //           </p>
          //       </div>
          //     </div>
          //   )
          //   : (
          //     null
          //   )
          // }
  //     </div>
  //     );
  //   }
  // }
