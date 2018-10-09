import React, { Component } from 'react';
import ThreeDots from './ThreeDots';
import Username from './Username';
import StatusText from './StatusText';
import StatusPhoto from './components/StatusPhoto';
import LikesBar from './LikesBar';
import LikeCommentShare from './LikeCommentShare';
import CommentSection from './CommentSection';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    commentNumber: 2,
    pendingComment: "",
    commentors: [
      {
      name: 'Natalie',
      comment: 'comment from nat'
    },
    {
      name: 'Jim Halpert',
      comment: 'hello from mari'
    },
      {
        name: 'Angela Kindsey',
        comment: 'I love netflix'
      }
    ]
  }
}
handleNameInput = e =>
  this.setState({
    pendingComment: e.target.value
  });
newCommentorSubmitHandler = e => {
  e.preventDefault();
  this.setState({
    commentors: [
          ...this.state.commentors,
      {
        name: this.state.pendingComment,
        comment: this.state.comment
      }
    ],
    pendingComment: ''
  });

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
      <CommentSection
        commentors={this.state.commentors}
      handleNameInput={this.handleNameInput}
      value={this.state.pendingComment}
      newCommentorSubmitHandler={this.newCommentorSubmitHandler}/>
    </div>
    );
  }
}

export default App;
