import React, { useState } from "react";

const Toggle = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <div className="toggle">
      <button onClick={handleToggle}>
        {isToggled ? "ON" : "OFF"}
      </button>
      <p>{isToggled ? "Toggle is ON" : "Toggle is OFF"}</p>
    </div>
  );
};

export default Toggle;
