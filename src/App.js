import React, { Component } from 'react';
import ThreeDots from './ThreeDots';
import Username from './Username';
import StatusText from './StatusText';
import StatusPhoto from './components/StatusPhoto';
import LikesBar from './LikesBar';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    commentNumber: 1
  }
}
  render() {
    return (
      <div className="App">
        <div className="row">
        <Username
          avatarName={'Natalie Salemme'}/>
        <ThreeDots />
      </div>
      <StatusText status={'this is my temporary status'}/>
      <StatusPhoto />
      <LikesBar
        commentNumber={this.state.commentNumber}/>
    </div>
    );
  }
}

export default App;
