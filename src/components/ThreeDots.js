import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';


class ThreeDots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
    this.showMenu = this.showMenu.bind(this);
  }
  showMenu = e => {
    e.preventDefault();
    this.setState({
      showMenu: !this.state.showMenu
    });
  }
  render() {
      const bookmark = <FontAwesomeIcon icon={faBookmark} />;
  return (
    <div
      className="dots-container" >
      <p >
      </p>
      <p onClick={this.showMenu} className="three-dots-icon">
        ...</p>
      {
        this.state.showMenu ? (
          <div
            ref={(element) => {
              this.dropdownMenu = element;
            }}
            >
            <div className="dots-dd-container">
              <div className="dots-dd-btn">
                <a href="https://www.facebook.com/" className="under-horizontal-bar">
              <span className="bookmark">{bookmark}</span>
                Save post
               </a>
              </div>
              <div className="dots-dd-btn">
                 <a href="https://www.facebook.com/">Edit Post</a>
                </div>
              <div className="dots-dd-btn">
              <a href="https://www.facebook.com/">Change Date</a>
              </div>
              <div className="dots-dd-btn">
               <a href="https://www.facebook.com/">Turn off notifications for this post</a>
              </div>
              <div className="dots-dd-btn">
               <a href="https://www.facebook.com/">Show in Tab</a>
              </div>
              <div className="dots-dd-btn">
              <a href="https://www.facebook.com/" className="under-horizontal-bar">Hide from timeline</a>
              </div>
              <div className="dots-dd-btn">
               <a href="https://www.facebook.com/">Delete</a>
              </div>
              <div className="dots-dd-btn">
               <a href="https://www.facebook.com/">Turn Off Translations</a>
              </div>
            </div>
          </div>
        )
        : (
          null
        )
      }
    </div>

    );
    }
  }

export default ThreeDots;
