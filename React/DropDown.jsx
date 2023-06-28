import React, { useState } from 'react';

const Dropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <select value={selectedOption} onChange={(e) => handleSelect(e.target.value)}>
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const App = () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (option) => {
    console.log('Selected option:', option);
  };

  return (
    <div>
      <h1>Dropdown Component Example</h1>
      <Dropdown options={options} onSelect={handleSelect} />
    </div>
  );
};

export default App;
