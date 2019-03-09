import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './addressForm.css';

class AddressForm extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.nextForm);
    this.state = {
      name: '',
      street: '',
      city: '',
      area: '',
      zip: '',
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit = e => {
    e.preventDefault();
    const {
      history,
      nextFrom,
      onFormSubmit,
      step,
    } = this.props;
    const newAddress = {
      name: this.state.name,
      street: this.state.street,
      city: this.state.city,
      area: this.state.area,
      zip: this.state.zip,
    }
    onFormSubmit(newAddress, step);
    history.push(nextFrom);
  };
  
  render() {
    const {
      labelName,
    } = this.props;
    return (
      <div className="container">
        <h2>{labelName}</h2>
        <form
          onSubmit={(e) => this.handleSubmit(e)}
          className="form"
        >
            <label>
              {'Name'}
            </label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            <label>
              {'Street'}
            </label>
              <input
                type="text"
                name="street"
                className="input"
                placeholder="street"
                value={this.state.street}
                onChange={this.handleChange}
                required
              />
            <label>
              {'City'}
            </label>
              <input
                type="text"
                name="city"
                className="input"
                placeholder="city"
                value={this.state.city}
                onChange={this.handleChange}
                required
              />
            <label>
              {'State'}
            </label>
              <input
                type="text"
                name="area"
                className="input"
                placeholder="state"
                value={this.state.area}
                onChange={this.handleChange}
              />
            <label>
              {'Zip'}
            </label>
              <input
                type="text"
                name="zip"
                className="input"
                placeholder="zip"
                value={this.state.zip}
                onChange={this.handleChange}
                required
              />
              <button
                type="submit"
                className="button"
              >
              {'Next'}
      
              </button>
          </form>
      </div>
    );
  }
}

export default withRouter(AddressForm);