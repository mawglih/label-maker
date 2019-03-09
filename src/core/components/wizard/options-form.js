import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './addressForm.css';

class SelectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
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
    const {
      name
    } = this.state;
    onFormSubmit(name, step);
    history.push(nextFrom);
  };
  
  render() {
    const {
      labelName,
      optionName,
    } = this.props;
    return (
      <div className="container">
        <h2>{labelName}</h2>
        <form
          onSubmit={(e) => this.handleSubmit(e)}
          className="form"
        >
            <label>
              {optionName}
            </label>
            <input
              type="number"
              name="name"
              className="input"
              placeholder={optionName}
              value={this.state.name}
              onChange={this.handleChange}
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

export default withRouter(SelectForm);