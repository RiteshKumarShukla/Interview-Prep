import React, { useState } from "react";

const DragAndDrop = () => {
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const element = document.getElementById(data);
    event.target.appendChild(element);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="drag-and-drop">
      <div
        className={`dropzone ${dragging ? "dragging" : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p>Drag and drop here</p>
      </div>
      <div
        className="draggable"
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        id="dragElement"
      >
        Drag me
      </div>
    </div>
  );
};

export default DragAndDrop;
