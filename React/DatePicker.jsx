import React, { useState } from 'react';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div>
      <h2>Select a Date</h2>
      <input type="date" value={selectedDate} onChange={handleDateChange} />
      {selectedDate && <p>Selected Date: {selectedDate}</p>}
    </div>
  );
};

export default DatePicker;
