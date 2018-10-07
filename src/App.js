import React, { Component } from 'react';
import ThreeDots from './ThreeDots';
import Username from './Username';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Username />
        <ThreeDots />
      </div>
    );
  }
}

export default App;
