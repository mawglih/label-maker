import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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


  componentDidMount() {
    console.log(this.props.nextFrom);
  }

  handleChange = e => {
    // console.log(e.target.value);
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
    console.log(this.props.nextFrom);
    this.props.onFormSubmit(newAddress);
    this.handleNext(this.props.nextFrom);
  };

  handleNext = (el) => {
    const { history } = this.props;
    console.log("next: ", el);
    history.push(el);
  };

  
  render() {
    const {
      nextForm,
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
              {/* <Link to={nextForm}> */}
              <button
                type="submit"
                className="button"
              >
              {'Next'}
      
              </button>
              {/* </Link> */}
          </form>
      </div>
    );
  }
}

export default withRouter(AddressForm);