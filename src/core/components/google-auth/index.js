import React, { Component } from 'react';
import { GOOGLE_AUTH } from '../../../constants/ids';
import Image from '../../../images/google3.png';
import './google-auth.css'

class GoogleAuth extends Component {
  state = {
    isSignedIn: null,
  };

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: GOOGLE_AUTH,
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange();
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  onSignin = () => {
    this.auth.signIn();
  }

  onSignOut = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    const {
      isSignedIn
    } = this.state;
    if(isSignedIn === null) {
      return null;
    } else if(isSignedIn) {
      return (
        <button
          className="googleButton"
          onClick={this.onSignOut}  
        >
          <img src={Image} alt="google" />
          Sign Out
        </button>
      )
    } else {
      return(
        <button
          className="googleButton"
          onClick={this.onSignin}
        >
          <img src={Image} alt="google" />
          Sign In
        </button>
      )
    }
  }
  render() {
    return (
      <div>
         {this.renderAuthButton()}
      </div>
     
    );
  }
}

export default GoogleAuth;
