import React, { Component } from 'react';
import ThreeDots from './ThreeDots';
import Username from './Username';
import StatusText from './StatusText';
import StatusPhoto from './components/StatusPhoto';
import LikesBar from './LikesBar';
import LikeCommentShare from './LikeCommentShare';
import CommentSection from './CommentSection';
import CommentBar from './CommentBar';
import Commentor from './Commentor';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    commentNumber: 2,
    commentors: [
      {
      name: 'Natalie',
      comment: 'comment from nat'
    },
    {
      name: 'Marisol',
      comment: 'hello from mari'
    },
      {
        name: 'Hope',
        comment: 'I love netflix'
      }
    ]
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
      <LikeCommentShare />
      {/* <CommentSection /> */}
      {/* <CommentBar /> */}
      <Commentor commentors={this.state.commentors}/>
    </div>
    );
  }
}

export default App;
