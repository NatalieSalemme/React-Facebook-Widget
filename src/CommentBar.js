import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faCamera, faStickyNote, faGlobe } from '@fortawesome/free-solid-svg-icons';

export const CommentBar = () => {
  const smileIcon = <FontAwesomeIcon icon={faSmile} size="xs"/>
  const cameraIcon = <FontAwesomeIcon icon={faCamera} size="xs"/>
  const globeIcon = <FontAwesomeIcon icon={faGlobe} size="xs"/>
  const stickerIcon = <FontAwesomeIcon icon={faStickyNote} size="xs"/>

  return (
    <div className="comment-bar-container">
      <img src={require('./avatar.jpg')} className="avatar-img" alt="avatar"/>
      <input className="comment-input" type="text" placeholder="Write a comment..."/>
      <div className="comment-emojis">
        <span>{smileIcon}</span>
        <span>{cameraIcon}</span>
        <span>{stickerIcon}</span>
        <span>{globeIcon}</span>
      </div>
    </div>
  );
}
export default CommentBar;
