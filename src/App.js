import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ShippingLabelMaker from './features/shipping-label-maker';
import Header from './core/components/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Fragment>
            <Header />
            <ShippingLabelMaker />
          </Fragment>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
