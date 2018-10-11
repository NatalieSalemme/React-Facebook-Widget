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
             {this.state.showMenu ? <span style={{backgroundColor: '#3B5998', marginLeft: '-1px', padding: '0 1px', color: 'white'}}>{usersIcon}</span> : <span>{usersIcon}</span>}
           </span>
          <span className="caret-down">
          {this.state.showMenu ? <span style={{backgroundColor: '#3B5998', color: 'white'}}>{caretDown}</span> : <span>{caretDown}</span>}
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
              <p className="users-dropdown-see">Who should see this?</p>
                <div className="users-icon-btn">
                  <span className="users-dropdown-icon">{globeIcon}</span>
                    Public
                    <br />
                    <span className="users-dropdown-subtext">Anyone on or off Facebook</span>
                </div>
                <div className="users-icon-btn">
                  <span className="users-dropdown-icon">{usersIcon}</span>
                    Friends
                    <br />
                    <div className="users-dropdown-subtext">Your friends on Facebook</div>
                  </div>
                <div className="users-icon-btn">
                  <span className="users-dropdown-icon">{usersExceptIcon}</span>
                  Friends except...
                  <br />
                  <div className="users-dropdown-subtext">Don't show to some friends</div>
                </div>
                <div className="users-icon-btn">
                  <span className="users-dropdown-icon">{lockIcon}</span>
                  Only me
                  <br />
                  <span className="users-dropdown-subtext">Only me</span>
                </div>
                  <p className="users-dropdown-more">
                    <span style={{marginLeft: '2px', paddingRight: '3px'}}>{caretDown}</span>
                    More...
                  </p>
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
