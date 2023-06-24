import React, { useState } from "react";

const Slider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="slider">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="slider-input"
      />
      <p>Value: {value}</p>
    </div>
  );
};

export default Slider;


