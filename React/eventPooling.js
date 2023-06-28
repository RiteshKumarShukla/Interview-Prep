// In React, event pooling is a concept that allows the reuse of event objects (also known as synthetic events) to optimize performance.

// When an event occurs, React creates a single event object and passes it to the event handler function. After the event handler function has finished executing, React resets and reuses the event object for the next event. This reuse of event objects is known as event pooling.

// Event pooling helps in reducing the memory usage and overhead associated with creating a new event object for every event. Instead of creating a new event object for each event, React efficiently recycles and reuses the same object.

// From a developer's perspective, event pooling is transparent and doesn't require any additional actions. You can access event properties and methods in the event handler function just like you would with a non-pooled event object.

// It's important to note that event pooling is an internal optimization mechanism in React, and you don't need to worry about it during regular development. React takes care of managing event objects behind the scenes to ensure optimal performance.

import React from 'react';

const Button = () => {
  const handleClick = (event) => {
    // Access event properties
    console.log('Button clicked! Mouse coordinates:', event.clientX, event.clientY);
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
};

export default Button;


// In this example, we have a Button component that renders a button element. When the button is clicked, the handleClick event handler function is executed.

// Inside the handleClick function, we can access the event object provided by React. We can use the event object's properties, such as clientX and clientY, to retrieve the coordinates of the mouse when the button was clicked.

// Under the hood, React reuses the same event object for subsequent clicks, thanks to event pooling. This optimization helps improve performance by reducing the overhead of creating and managing individual event objects for every event occurrence.




