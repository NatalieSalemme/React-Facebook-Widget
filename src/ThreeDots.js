import React from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
// library.add(faBookmark);

const ThreeDots = props => {
  const bookmark = <FontAwesomeIcon icon={faBookmark} />;
  return (
    <div>
      <div className="dropdown">
        <button href="#" className="dropbtn">...</button>
        <div className="dropdown-content">
          <a href="#" className="under-horizontal-bar">
            <span className="bookmark">{bookmark}</span>
              Save post
            </a>
          <a href="#">Edit Post</a>
          <a href="#">Change Date</a>
          <a href="#">Turn off notifications for this post</a>
          <a href="#" c>Show in Tab</a>
          <a href="#" className="under-horizontal-bar">Hide from timeline</a>
          <a href="#">Delete</a>
          <a href="#">Turn Off Translations</a>
        </div>
      </div>
    </div>
  )
}
export default ThreeDots;
