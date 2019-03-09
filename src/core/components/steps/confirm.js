import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../item';

const Confirm = ({
  from,
  to,
  weight,
  options,
}) => {
  
  return (
    <div>
      <h1>Shipping label</h1>
      <h2>Recepient</h2>
      <Item desc={to} />
      <h2>Sender</h2>
      <Item desc={from} />
      <h2>Weight</h2>
      <h3>{weight}</h3>
      <h2>Shipping options</h2>
      <h3>{options}</h3>
      <Link to='/'>
        <button
          className="button"
        >
          Confirm
        </button>
      </Link>
    </div>
  )
}

export default Confirm;
