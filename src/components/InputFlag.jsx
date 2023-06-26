import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

function InputFlag({ onChange }) {
  const [label, setLabel] = useState('');
  const options = useMemo(() => countryList().getData(label), []);

  const changeHandler = (selectedOption) => {
    setLabel(selectedOption);
  
    // Llama a la función 'onChange' pasando el valor seleccionado
    onChange(selectedOption.label);
  };

  return (
    <Select 
      options={options} 
      value={label} 
      onChange={changeHandler}
    />
  );
}

export default InputFlag;
