import React from 'react';
import { Link } from 'react-router-dom';

const GetShippingOptions = () => {
  return (
    <div>
      <h2>Options</h2>
      <form>
        <input
          type="number"
        />
        <Link to="/weight">
          <button>Next</button>
        </Link>
      </form>
    </div>
  )
}

export default GetShippingOptions;