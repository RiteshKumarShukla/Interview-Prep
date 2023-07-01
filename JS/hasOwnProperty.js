// ## Checking if an Object has a Property in JavaScript

// To check if an object has a property in JavaScript, you can use the `hasOwnProperty()` method or the `in` operator. Here's an example demonstrating both approaches:


const person = {
  name: 'John',
  age: 25,
};

// Using hasOwnProperty()
if (person.hasOwnProperty('name')) {
  console.log('The object has the property "name"');
} else {
  console.log('The object does not have the property "name"');
}

// Using the in operator
if ('age' in person) {
  console.log('The object has the property "age"');
} else {
  console.log('The object does not have the property "age"');
}
