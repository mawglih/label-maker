import React from 'react';
import { Link } from 'react-router-dom';

const GetWeight = () => {
  return (
    <div>
      <h2>Weight</h2>
      <form>
        <input
          type="number"
        />
      </form>
      <Link to="/confirm">
        <button>Next</button>
      </Link>
    </div>
  )
}

export default GetWeight
