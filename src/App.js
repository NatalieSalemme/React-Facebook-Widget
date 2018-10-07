import React, { Component } from 'react';
import ThreeDots from './ThreeDots';
import Username from './Username';



import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
        <Username
          avatarName={'Natalie Salemme'}/>
        <ThreeDots />
      </div>
    </div>
    );
  }
}

export default App;
