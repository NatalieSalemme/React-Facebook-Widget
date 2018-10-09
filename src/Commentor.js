import React from 'react';
import './App.js'

const Commentor = props => {
  return (
    <div>
      <ul>
        {props.commentors.map((commentor, index) =>
          <li key={index}>
            <span>photo here </span>
            <span>{commentor.name}</span>
            <span> {commentor.comment}</span>
            <button>Like</button>
            <button>Reply</button>

          </li>
        )}
      </ul>

    </div>
  );
}
export default Commentor;
