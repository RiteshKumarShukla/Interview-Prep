# Callback Functions in JavaScript

In JavaScript, a callback function is a function that is passed as an argument to another function and is invoked inside that function. Callback functions are widely used in JavaScript to handle asynchronous operations, events, and to achieve functional programming patterns.

## Usage of Callback Functions

Callback functions are used in various scenarios in JavaScript, including:

1. **Asynchronous Operations**: Callback functions are commonly used to handle asynchronous operations such as AJAX requests, timers, and file operations. Instead of blocking the execution, the callback function is executed once the asynchronous operation is completed.

2. **Event Handling**: Callback functions are used to handle events triggered by user actions or system events. For example, you can assign a callback function to the `click` event of a button to perform a specific action when the button is clicked.

3. **Iterations and Array Methods**: Callback functions are used with iteration methods like `forEach`, `map`, `filter`, and `reduce` to perform operations on arrays. The callback function is executed for each element in the array, allowing you to customize the logic.

4. **Modular and Reusable Code**: Callback functions can be used to implement modular and reusable code. By passing different callback functions to a generic function, you can customize its behavior based on the specific logic provided by the callback.

## Example Usage

Here's an example that demonstrates the usage of a callback function:

```javascript
function fetchData(url, callback) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" };
    callback(data);
  }, 2000);
}

function processData(data) {
  console.log("Data:", data);
  // Process the received data
}

// Calling fetchData with processData as the callback function
fetchData("https://api.example.com/data", processData);
```
