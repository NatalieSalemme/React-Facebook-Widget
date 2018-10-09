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
    userName: "Natalie Salemme",
    commentors: [
      {
      name: 'Pam Beesly',
      comment: 'I love my pens'
    },
    {
      name: 'Jim Halpert',
      comment: 'Blue shirts are my favorite'
    },
      {
        name: 'Angela Kinsey',
        comment: 'I hope my cat is ok'
      }
    ]
  }
}
removeCommentAt = index => {
  this.setState({
    commentors: [
        ...this.state.commentors.slice(0, index),
        ...this.state.commentors.slice(index + 1)
    ]
  });
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
        name: this.state.userName,
        comment: this.state.pendingComment,
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
        newCommentorSubmitHandler={this.newCommentorSubmitHandler}
        removeCommentAt={this.removeCommentAt}/>
    </div>
    );
  }
}

export default App;
