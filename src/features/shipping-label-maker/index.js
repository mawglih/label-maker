import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ShipTo from '../../core/components/steps/ship-to';
import ShipFrom from '../../core/components/steps/ship-from';
import GetShippingOptions from '../../core/components/steps/get-shipping-option';
import GetWeight from '../../core/components/steps/get-weight';
import Confirm from '../../core/components/steps/confirm';

class ShippingLabelMaker extends Component {
  state = {
    fromAddress: {},
    toAddress: {},
    weight: 0,
    shippingOptions: 1,
  };
  
  onSubmit1 = (obj) => {
    this.setState({
      fromAddress: obj,
    })
  };
  
  onSubmit2 = (obj) => {
    this.setState({
      toAddress: obj,
    })
  };

  onSubmit3 = (obj) => {
    this.setState({
      weight: obj,
    })
  };

  onSubmit4 = (obj) => {
    this.setState({
      shippingOptions: obj,
    })
  };

  handleNext =(path) => {
    this.props.history.push(path);
  };
  render() {
    return (
        <Switch>
          <Route
            exact
            path='/receiver'
            //render={(props) => <ShipFrom {...props} onFormSubmit={this.onSubmit} />}
            component={() => <ShipFrom onFormSubmit={this.onSubmit2} />}
          />
          <Route
            exact
            path='/options'
            component={GetShippingOptions}
          />
          <Route
            exact
            path='/weight'
            component={GetWeight}
          />
          <Route
            exact
            path='/confirm'
            component={Confirm}
          />
          <Route
            exact
            path='/'
            // render={(props) => <ShipTo {...props} onFormSubmit={this.onSubmit} />}
            component={() => <ShipTo onFormSubmit={this.onSubmit1} />}
            // component={ShipTo}
          />
        </Switch>
    )
  }
}


export default ShippingLabelMaker;