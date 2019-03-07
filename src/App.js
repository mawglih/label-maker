import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ShippingLabelMaker from './features/shipping-label-maker';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <ShippingLabelMaker />
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
