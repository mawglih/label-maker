import React from 'react';
import SelectForm from '../wizard/options-form';

const GetWeight = ({
  onFormSubmit,
}) => {
  return (
    <div>
      <SelectForm
        optionName="weight"
        onFormSubmit={onFormSubmit}
        labelName="Enter weight"
        step={4}
        nextFrom="/confirm"
      />
    </div>
  )
}

export default GetWeight
