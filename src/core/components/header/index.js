import React, { Component } from 'react';
import Image from '../../../images/google3.png';
import './header.css';

class Header extends Component {

  render() {
    const {
      auth,
      onSignOut,
      onSignin,
    } = this.props;
    return (
      <div className="header">
        { auth ? (
        <button
          className="googleButton"
          onClick={onSignOut}  
        >
          <img src={Image} alt="google" />
          Sign Out
        </button>
        ) : (
        <button
          className="googleButton"
          onClick={onSignin}
        >
          <img src={Image} alt="google" />
          Sign In
        </button>
       )}
      </div>
    );
  }
}
export default Header

