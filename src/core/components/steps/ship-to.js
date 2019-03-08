import React from 'react';
import AddressForm from '../wizard/address-form';

export default function ShipTo({
  onFormSubmit,
  handleNext,
}) {
  return (
    <div>
      <AddressForm
        labelName="Enter the receiver's address"
        address  
        nextFrom="/receiver"
        onFormSubmit={onFormSubmit}
        handleNext={handleNext}
        step={1}
      />
    </div>
  )
}
