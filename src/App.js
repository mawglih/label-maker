import React, { Component, Fragment } from 'react';
import { GOOGLE_AUTH } from './constants/ids';
import { BrowserRouter } from 'react-router-dom';
import ShippingLabelMaker from './features/shipping-label-maker';
import Header from './core/components/header';
import './App.css';

class App extends Component {
  state = {
    isSignedIn : null,
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
  };

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignin = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  render() {
    const {
      isSignedIn,
    } = 
    this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Header
              auth={isSignedIn}
              onSignOut={this.onSignOut}
              onSignin={this.onSignin}
            />
            { isSignedIn ? (
              <Fragment>
                <ShippingLabelMaker />
              </Fragment>
            ) : (
              <div className="container">
                <h1>Please sign in to get started</h1>
              </div>
            )}
          </Fragment>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
