import React from 'react';

const ThreeDots = props => {
  return (
    <div>
      <div className="dropdown">
        <button href="#" className="dropbtn">...</button>
        <div className="dropdown-content">
          <a href="#">Save post</a>
          <a href="#">Edit Post</a>
          <a href="#">Change Date</a>
          <a href="#">Turn off notifications for this post</a>
          <a href="#">Show in Tab</a>
          <a href="#">Hide from timeline</a>
          <a href="#">Delete</a>
          <a href="#">Turn Off Translations</a>
        </div>
      </div>
    </div>
  )
}
export default ThreeDots;
