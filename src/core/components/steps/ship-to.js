import React from 'react';
import AddressForm from '../wizard/address-form';

export default function ShipTo({
  onFormSubmit,
}) {
  return (
    <div>
      <AddressForm
        labelName="Enter the receiver's address"
        nextFrom="/receiver"
        onFormSubmit={onFormSubmit}
        step={1}
      />
    </div>
  )
}
