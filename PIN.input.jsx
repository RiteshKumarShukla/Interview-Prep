import React, { useState, useRef } from "react";

function PinInput() {
  const [pin, setPin] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);

  const inputStyle = {
    width: "40px",
    height: "40px",
    margin: "5px",
    padding: "5px",
    fontSize: "20px",
    textAlign: "center",
  };

  function handlePinChange(event, index) {
    const newPin = [...pin];
    newPin[index] = event.target.value;
    setPin(newPin);

    if (event.target.value && index < 3) {
      inputsRef.current[index + 1].focus();
    }
  }

  function handleKeyDown(event, index) {
    if (event.key === "Backspace" && !pin[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  }

  return (
    <div className="pin-input">
      <form>
        <input
          style={inputStyle}
          type="text"
          maxLength="1"
          value={pin[0]}
          onChange={(event) => handlePinChange(event, 0)}
          onKeyDown={(event) => handleKeyDown(event, 0)}
          ref={(el) => (inputsRef.current[0] = el)}
        />
        <input
          style={inputStyle}
          type="text"
          maxLength="1"
          value={pin[1]}
          onChange={(event) => handlePinChange(event, 1)}
          onKeyDown={(event) => handleKeyDown(event, 1)}
          ref={(el) => (inputsRef.current[1] = el)}
        />
        <input
          style={inputStyle}
          type="text"
          maxLength="1"
          value={pin[2]}
          onChange={(event) => handlePinChange(event, 2)}
          onKeyDown={(event) => handleKeyDown(event, 2)}
          ref={(el) => (inputsRef.current[2] = el)}
        />
        <input
          style={inputStyle}
          type="text"
          maxLength="1"
          value={pin[3]}
          onChange={(event) => handlePinChange(event, 3)}
          onKeyDown={(event) => handleKeyDown(event, 3)}
          ref={(el) => (inputsRef.current[3] = el)}
        />
      </form>
    </div>
  );
}

export default PinInput;
