import React from 'react';
import AddressForm from '../wizard/address-form';

export default function ShipFrom({
  onFormSubmit,
}) {
  return (
    <div>
      <AddressForm
        labelName="Enter the sender's address"
        nextFrom="/options"
        onFormSubmit={onFormSubmit}
        step={2}
      />
    </div>
  )
}