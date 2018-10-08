import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';










export class UserDropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.showMenu.bind(this);
  }
  showMenu(event) {
    event.preventDefault();
    console.log('clicked showed menu');
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  closeMenu(event) {
    if(!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }
  render() {
    const usersIcon = <FontAwesomeIcon icon={faUsers} size="xs"/>
    const caretDown = <FontAwesomeIcon icon={faCaretDown} size="xs"/>
    return (
      <div>
        <div className="users-icon-dropdown tooltip" onClick={this.showMenu}>
         <span className="tooltiptext">Your friends</span>
       <span className="users-icon">{usersIcon}</span>
       <span className="caret-down">{caretDown}</span>
       </div>
    </div>

    );
  }
}
export default UserDropDown;

// export class UserDropDown extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dropdownOpen: false
//     }
//     this.toggle = this.toggle.bind(this);
//   }
// toggle() {
//   this.setState(prevState => ({
//     dropdownOpen: !prevState.dropdownOpen
//   }));
// }
//   render() {
//     return (
//       <button onClick={this.toggle}>Dropdown</button>
//       if(this.state.dropDownOpen) {
//         console.log('its open');
//       } else {
//         console.log('its closed');
//       }
//     )
//   }
//
// }
// export default UserDropDown;
