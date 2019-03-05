import React, { Component } from 'react';
import ShippingLabelMaker from './features/shipping-label-maker';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShippingLabelMaker />
      </div>
    );
  }
}

export default App;
