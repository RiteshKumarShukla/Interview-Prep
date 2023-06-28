import React, { useState } from 'react';

const FormAutocomplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Simulating API call to fetch suggestions
    const fetchedSuggestions = fetchSuggestions(value);
    setSuggestions(fetchedSuggestions);
  };

  const handleSelectSuggestion = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  const fetchSuggestions = (query) => {
    // Simulating API call to fetch suggestions based on the query
    const suggestions = [
      'Apple',
      'Banana',
      'Cherry',
      'Date',
      'Elderberry',
      'Fig',
      'Grape',
      'Honeydew',
      'Lemon',
      'Mango',
    ];

    return suggestions.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  };

  return (
    <div>
      <h2>Form Autocomplete</h2>
      <input type="text" value={inputValue} onChange={handleChange} />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSelectSuggestion(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormAutocomplete;
