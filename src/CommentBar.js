import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faCamera, faStickyNote, faGlobe } from '@fortawesome/free-solid-svg-icons';

export const CommentBar = props => {
  const smileIcon = <FontAwesomeIcon icon={faSmile} size="xs"/>
  const cameraIcon = <FontAwesomeIcon icon={faCamera} size="xs"/>
  const globeIcon = <FontAwesomeIcon icon={faGlobe} size="xs"/>
  const stickerIcon = <FontAwesomeIcon icon={faStickyNote} size="xs"/>

  return (
    <div className="comment-bar-container">

      <img src={require('./avatar.jpg')} className="avatar-img" alt="avatar"/>
      <form onSubmit={props.newCommentorSubmitHandler}>
      <input
        className="comment-input"
        type="text"
        placeholder="Write a comment..."
        onChange={props.handleNameInput}
        value={props.value}/>
        <button className="comment-submit" type="submit" name="submit" value="submit" >Submit</button>
      </form>
      <div className="comment-emojis">
        <span className="smile-icon">{smileIcon}</span>
        <span className="camera-icon">{cameraIcon}</span>
        <span className="globe-icon">{globeIcon}</span>
        <span className="sticker-icon">{stickerIcon}</span>
      </div>
    </div>
  );
}
export default CommentBar;
