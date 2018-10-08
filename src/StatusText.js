import React from 'react';
import './App.css';

const StatusText = props =>
  <div className="status-container">
    <p className="status-text">{props.status}</p>
  </div>

export default StatusText;
