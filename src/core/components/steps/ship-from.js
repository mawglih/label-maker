import React from 'react';
import AddressForm from '../wizard/address-form';

export default function ShipFrom({
  onFormSubmit,
  handleNext,
}) {
  return (
    <div>
      <AddressForm
        labelName="Enter the sender's address"
        address
        nextFrom="/options"
        onFormSubmit={onFormSubmit}
        handleNext={handleNext}
      />
    </div>
  )
}