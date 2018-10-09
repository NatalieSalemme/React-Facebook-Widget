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
    avatar: '',
    commentors: [
      {
      name: 'Pam Beesly',
      comment: "You'll have to share your recipe!",
      photo: <img
        className="avatar-img"
        src={require('./pam.jpg')}/>
    },
    {
      name: 'Jim Halpert',
      comment: "I'll take this status as an announcement that you'll be bringing this to work tomorrow",
      photo: <img
        className="avatar-img"
        src={require('./jim.png')} />
    },
      {
        name: 'Angela Martin',
        comment: 'Just know that this CANNOT and WILL NOT be part of tomorrows party. Clear?',
        photo: <img
          className="avatar-img"
          src={require('./angela.jpg')}/>
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
        photo: this.state.avatar,
        name: this.state.userName,
        comment: this.state.pendingComment,
      }
    ],
    pendingComment: ''
  });
}
componentDidMount() {
  this.setState({
    avatar: <img
      className="avatar-img"
      src="http://i67.tinypic.com/f1fx1u.jpg"/>
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
      <StatusText status={'New favorite dessert alert!'}/>
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
