import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prevProgress) => prevProgress + 10);
  };

  return (
    <div className="progress-bar">
      <div
        className="progress"
        style={{ width: `${progress}%`, backgroundColor: "green", height: "20px" }}
      ></div>
      <button onClick={increaseProgress}>Increase Progress</button>
    </div>
  );
};

export default ProgressBar;
