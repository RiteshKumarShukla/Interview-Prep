import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState('');

  // useEffect hook to save and load data from localStorage
  useEffect(() => {
    // Load data from localStorage when the component mounts
    const savedData = localStorage.getItem('myData');
    if (savedData) {
      setData(savedData);
    }
  }, []);

  // Handler function to update and save data
  const handleDataChange = (event) => {
    const newData = event.target.value;
    setData(newData);
    localStorage.setItem('myData', newData);
  };

  return (
    <div>
      <input type="text" value={data} onChange={handleDataChange} />
      <p>Data: {data}</p>
    </div>
  );
};
