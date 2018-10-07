import React, { Component } from 'react';
import ThreeDots from './ThreeDots';
import Username from './Username';
import StatusText from './StatusText';


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
      <StatusText status={'this is my temporary status'}/>
    </div>
    );
  }
}

export default App;
