import React from 'react';

const Item = ({
  desc,
}) => {
  return (
    <div>
      <p>Name: {desc.name}</p>
      <p>Street: {desc.street}</p>
      <p>City:{desc.city}</p>
      <p>State: {desc.area}</p>
      <p>Zip: {desc.zip}</p>
    </div>
  )
}

export default Item;
