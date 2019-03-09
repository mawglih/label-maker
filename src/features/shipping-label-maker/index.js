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
  

  onSubmit = (obj, step) => {
    switch(step) {
      case 1:
        this.setState({
          fromAddress: obj,
        });
        break;
      case 2:
        this.setState({
          toAddress: obj,
        });
        break;
      case 3:
        this.setState({
          weight: obj,
        });
        break;
      case 4:
        this.setState({
          shippingOptions: obj,
        });
        break;
      default:
        return this.state;
    }
  };

  render() {
    return (
        <Switch>
          <Route
            exact
            path='/receiver'
            render={(props) => <ShipFrom {...props} onFormSubmit={this.onSubmit} />}
          />
          <Route
            exact
            path='/options'
            render={(props) => <GetShippingOptions {...props} onFormSubmit={this.onSubmit} />}
          />
          <Route
            exact
            path='/weight'
            render={(props) => <GetWeight {...props} onFormSubmit={this.onSubmit} />}
          />
          <Route
            exact
            path='/confirm'
            render={(props) => <Confirm {...props} 
              from={this.state.fromAddress}
              to={this.state.toAddress}
              weight={this.state.weight}
              options={this.state.shippingOptions}
            />}
          />
          <Route
            exact
            path='/'
            render={(props) => <ShipTo {...props} onFormSubmit={this.onSubmit} />}
          />
        </Switch>
    )
  }
}


export default ShippingLabelMaker;