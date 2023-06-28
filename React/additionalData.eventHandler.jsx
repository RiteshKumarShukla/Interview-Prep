import React from 'react';

const MyComponent = () => {
  const handleButtonClick = (event, additionalData) => {
    // Event handling logic
    console.log('Button clicked!', additionalData);
  };

  return (
    <button
      onClick={(event) => handleButtonClick(event, 'Additional Data')}
    >
      Click Me
    </button>
  );
};
