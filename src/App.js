import React, { Component } from 'react';
import ThreeDots from './components/ThreeDots';
import Username from './components/Username';
import StatusText from './components/StatusText';
import StatusPhoto from './components/StatusPhoto';
import LikesBar from './components/LikesBar';
import LikeCommentShare from './components/LikeCommentShare';
import CommentSection from './components/CommentSection';
// import Comment from './Comment';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    commentNumber: 3,
    pendingComment: "",
    userName: "Natalie Salemme",
    likeList: ['Ryan Howard', 'Kevin Malone', 'Phyllis Vance', 'Oscar Martinez', 'Erin Hannon',
    'Toby Flenderson', 'Stanley Hudson', 'Creed Bratton', 'Meredith Palmer', 'Darryl Philbin'],
    loveList: ['Michael Scott', 'Dwight Schrute', 'Kelly Kapoor', 'Andy Bernard'],
    avatar: <img
      className="avatar-img"
      src={require('./avatar.jpg')}
      alt="Current user avatar"/>,
    commentors: [
      {
      name: 'Pam Beesly',
      comment: "You'll have to share your recipe!",
      photo: <img
        className="avatar-img"
        src={require('./pam.jpg')}
        alt="Pam Beesly avatar"/>
    },
    {
      name: 'Jim Halpert',
      comment: "I'll take this status as an announcement that you'll be bringing this to work tomorrow",
      photo: <img
        className="avatar-img"
        src={require('./jim.png')}
        alt="Jim Halpert avatar"/>
    },
      {
        name: 'Angela Martin',
        comment: 'Just know that this CANNOT and WILL NOT be part of tomorrows party. Clear?',
        photo: <img
          className="avatar-img"
          src={require('./angela.jpg')}
          alt="Angela Martin avatar"/>
      }
    ]
  }
  this.addLike = this.addLike.bind(this);
  this.addLove = this.addLove.bind(this);
}
removeCommentAt = index => {
  this.setState({
    commentNumber: this.state.commentNumber - 1,
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
    commentNumber: this.state.commentNumber + 1,
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
addLike() {
  let newLike = this.state.likeList.concat('Natalie Salemme');
  this.setState({
    likeList: newLike
  });
}

addLove() {
  let newLove = this.state.loveList.concat('Natalie Salemme');
  this.setState({
    loveList: newLove
  });
}

// handleReply = () => {
//  return <Comment />
// }
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
        commentNumber={this.state.commentNumber}
        loveList={this.state.loveList}
        likeList={this.state.likeList}
        addLove={this.addLove}
        addLike={this.addLike}/>
      <LikeCommentShare
        focusOnInput={this.focusOnInput}
        addLike={this.addLike}
        />
      <CommentSection
        commentors={this.state.commentors}
        handleNameInput={this.handleNameInput}
        value={this.state.pendingComment}
        newCommentorSubmitHandler={this.newCommentorSubmitHandler}
        removeCommentAt={this.removeCommentAt}
        handleReply={this.handleReply}/>
    </div>
    );
  }
}

export default App;
