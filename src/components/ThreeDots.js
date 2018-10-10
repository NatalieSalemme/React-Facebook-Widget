import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';


const ThreeDots = props => {
  const bookmark = <FontAwesomeIcon icon={faBookmark} />;
  return (
    <div className="dots-container">
      <div className="dropdown">
        <button href="https://www.facebook.com/" className="dropbtn">...</button>
        <div className="dropdown-content">
          <a href="https://www.facebook.com/" className="under-horizontal-bar">
            <span className="bookmark">{bookmark}</span>
              Save post
            </a>
          <a href="https://www.facebook.com/">Edit Post</a>
          <a href="https://www.facebook.com/">Change Date</a>
          <a href="https://www.facebook.com/">Turn off notifications for this post</a>
          <a href="https://www.facebook.com/">Show in Tab</a>
          <a href="https://www.facebook.com/" className="under-horizontal-bar">Hide from timeline</a>
          <a href="https://www.facebook.com/">Delete</a>
          <a href="https://www.facebook.com/">Turn Off Translations</a>
        </div>
      </div>
    </div>
  )
}
export default ThreeDots;
