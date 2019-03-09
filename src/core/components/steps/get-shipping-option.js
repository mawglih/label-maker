import React from 'react';
import SelectForm from '../wizard/options-form';

// const Options = [...Array(10)].map((item, ind) => ind + 1);

const GetShippingOptions = ({
  onFormSubmit,
}) => {
  return (
    <div>
      <SelectForm
        optionName="shipping"
        onFormSubmit={onFormSubmit}
        labelName="Enter shipping option"
        step={3}
        nextFrom="/weight"
      />
    </div>
  )
}

export default GetShippingOptions;
