import React, { Component } from 'react';
import ThreeDots from './components/ThreeDots';
import Username from './components/Username';
import StatusText from './components/StatusText';
import StatusPhoto from './components/StatusPhoto';
import LikesBar from './components/LikesBar';
import LikeCommentShare from './components/LikeCommentShare';
import CommentSection from './components/CommentSection';
import axios from 'axios';
// import Comment from './Comment';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    selectedFile: null,
    commentNumber: 3,
    pendingComment: "",
    showCommentSection: true,
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
  this.inputCommentRef = React.createRef();
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
// addLike() {
//   let newLike = this.state.likeList.concat(this.state.userName);
//   let popLike = this.state.likeList.slice(0, this.state.likeList.length - 1);
//   this.setState({
//     likeList: this.state.likesList.contains(this.state.username) ? newLike : 'pop'
//   });
// }
addLike() {
  let newLike = this.state.likeList.concat(this.state.userName);
  let popLike = this.state.likeList.slice(0, this.state.likeList.length - 1);
  this.setState({
    likeList: newLike
  });
  }

addLove() {
  let newLove = this.state.loveList.concat(this.state.userName);
  this.setState({
    loveList: newLove
  });
}
showCommentSection = e => {
  e.preventDefault();
  this.setState({
    showCommentSection: !this.state.showCommentSection
  })
}
handleCommentInput = event => {
  this.inputCommentRef.current.focus();
}
// fileSelectedHandler = event => {
//   this.setState({
//     selectedFile: event.target.files[0]
//   })
// }
// fileUploadHandler = () => {
//   axios.post('');
// }

  render() {
    const commentorsList = this.state.commentors.map((commentor) =>
    <div key={commentor.toString}>
      <p>{commentor.name}</p>
    </div>
  );
    return (
      <div className="App">
        <div className="row">
        <Username
          avatarName={this.state.userName}
          avatarImg={this.state.avatar}/>
        <ThreeDots />
      </div>
      {/* <input type="file" onChange={this.fileSelectedHandler}/>
      <button onClick={this.fileUploadHandler}>Upload</button> */}
      <StatusText status={'New favorite dessert alert!'}/>
      <StatusPhoto />
      <LikesBar
        commentNumber={this.state.commentNumber}
        loveList={this.state.loveList}
        likeList={this.state.likeList}
        addLove={this.addLove}
        addLike={this.addLike}
        commentorsList={commentorsList}
        showCommentSection={this.showCommentSection}/>
      <LikeCommentShare
        focusOnInput={this.focusOnInput}
        addLike={this.addLike}
        addLove={this.addLove}
        handleCommentInput={this.handleCommentInput}
        />
        {this.state.showCommentSection ? <CommentSection
          commentors={this.state.commentors}
          handleNameInput={this.handleNameInput}
          value={this.state.pendingComment}
          newCommentorSubmitHandler={this.newCommentorSubmitHandler}
          removeCommentAt={this.removeCommentAt}
          handleReply={this.handleReply}
          inputCommentRef={this.inputCommentRef}

        /> : (null)}

    </div>
    );
  }
}

export default App;
