import React, { Component } from 'react';
import ThreeDots from './ThreeDots';
import Username from './Username';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Username />
        <ThreeDots />
            <FontAwesomeIcon icon="far fa-bookmark" />
      </div>
    );
  }
}

export default App;
