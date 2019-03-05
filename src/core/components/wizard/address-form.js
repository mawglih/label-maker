import React, { Component } from 'react'
import ShippingLabelMaker from '../../../features/shipping-label-maker';

class AddressForm extends Component {
  state = {
    name: '',
    street: '',
    city: '',
    area: '',
    zip: '',
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit = e => {
    e.preventDefault();
    const newAddress = {
      name: this.state.name,
      street: this.state.street,
      city: this.state.city,
      area: this.state.area,
      zip: this.state.zip,
    }
    console.log(newAddress);
  }
  
  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
        >
            <label>
              {'Name'}
                <input
                type="text"
                name="name"
                className="input"
                placeholder="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              {'Street'}
                <input
                type="text"
                name="street"
                className="input"
                placeholder="street"
                value={this.state.street}
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              {'City'}
                <input
                type="text"
                name="city"
                className="input"
                placeholder="city"
                value={this.state.city}
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              {'State'}
                <input
                type="text"
                name="area"
                className="input"
                placeholder="state"
                value={this.state.area}
                onChange={this.handleChange}
              />
            </label>
            <label>
              {'Zip'}
                <input
                type="text"
                name="zip"
                className="input"
                placeholder="zip"
                value={this.state.zip}
                onChange={this.handleChange}
                required
              />
            </label>
            <button
              type="submit"
            >
              {'Next'}
            </button>
          </form>
      </div>
    );
  }
}

export default AddressForm;