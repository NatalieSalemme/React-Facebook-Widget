import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

const StatusText = props =>
  <div className="status-container">
    <p className="status-text">{props.status}</p>
  </div>

StatusText.propTypes = {
  status: PropTypes.string.isRequired
}
export default StatusText;
