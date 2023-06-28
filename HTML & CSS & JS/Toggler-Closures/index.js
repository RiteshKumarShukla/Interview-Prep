function toggler(...values) {
    let index = 0; // Initialize the index to keep track of the current value
  
    // Return a function that can be used to toggle through the values
    return function() {
      const value = values[index]; // Get the value at the current index
      index = (index + 1) % values.length; // Update the index for the next toggle
  
      return value; // Return the current value
    };
  }
  
  // Create an instance of the toggler with the desired values
  const toggle = toggler(1, 2, 3);
  
  console.log(toggle()); // Output: 1
  console.log(toggle()); // Output: 2
  console.log(toggle()); // Output: 3
  console.log(toggle()); // Output: 1 (It starts over after reaching the end of the values)
  console.log(toggle()); // Output: 2
  // And so on...
  