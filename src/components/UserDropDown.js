import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCaretDown, faGlobe, faUserTimes, faLock } from '@fortawesome/free-solid-svg-icons';


export class UserDropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu = e => {
    e.preventDefault();
    this.setState({
      showMenu: !this.state.showMenu
    });
  }
  render() {
    const usersIcon = <FontAwesomeIcon icon={faUsers} size="xs"/>
    const caretDown = <FontAwesomeIcon icon={faCaretDown} size="xs"/>
    const globeIcon = <FontAwesomeIcon icon={faGlobe} size="xs"/>
    const usersExceptIcon = <FontAwesomeIcon icon={faUserTimes} size="xs"/>
    const lockIcon = <FontAwesomeIcon icon={faLock} size="xs"/>
    return (
      <div>
        <div onClick={this.showMenu}
          className="users-icon-dropdown tooltip">
           <span className="tooltiptext">Your friends</span>
           <span className="users-icon">
             {this.state.showMenu ? <span style={{backgroundColor: '#3B5998', marginLeft: '-1px', padding: '0 1px'}}>{usersIcon}</span> : <span>{usersIcon}</span>}
           </span>
          <span className="caret-down">
          {this.state.showMenu ? <span style={{backgroundColor: '#3B5998'}}>{caretDown}</span> : <span>{caretDown}</span>}
          </span>
        </div>
        {
          this.state.showMenu ? (
            <div
              className="users-icon-menu"
              ref={(element) => {
                this.dropdownMenu = element;
              }}
              >
            <div className="users-icon-container">
                <button className="users-icon-btn">
                  <span>{globeIcon}</span>
                  Public
                </button>
                <button className="users-icon-btn">
                  <span>{usersIcon}</span>
                    Friends</button>
                <button className="users-icon-btn">
                  <span>{usersExceptIcon}</span>
                  Friends except...</button>
                <button className="users-icon-btn">
                  <span>{lockIcon}</span>
                  Only me</button>
                <button className="users-icon-btn">More...</button>
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

export default UserDropDown;
