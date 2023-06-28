# Redux

Redux is a predictable state container for JavaScript applications, commonly used with libraries like React. It follows a specific structure and pattern for managing application state.

## Key Elements

### Store

The store holds the complete state of the application. It is created using the `createStore()` function from the Redux library. The store is responsible for dispatching actions, managing reducers, and notifying subscribers of state changes.

### Actions

Actions are plain JavaScript objects that represent an intention to change the state. They are dispatched to the store using the `dispatch()` method. Actions typically have a `type` property indicating the type of action being performed and additional data as needed.

### Reducers

Reducers are pure functions that specify how the application's state should change in response to actions. They take the current state and an action as input and produce a new state based on that action. Reducers should never mutate the state directly; instead, they create and return a new state object.

### Dispatching Actions

Actions are dispatched using the `dispatch()` method provided by the store. This triggers the reducer functions to calculate the new state based on the action type and data.

### Subscribers

Components or parts of the application can subscribe to changes in the Redux store. They can register themselves as subscribers to receive notifications whenever the state changes. This is typically done using the `connect()` function provided by libraries like `react-redux` for React applications.

### Selectors

Selectors are functions that extract specific data from the Redux store. They allow components to access and retrieve only the relevant data they need from the state.

## Example Code

```javascript
import { createStore } from 'redux';

// Define initial state
const initialState = {
  counter: 0,
};

// Define reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

// Create Redux store with the reducer
const store = createStore(counterReducer);

// Dispatch actions
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });

// Subscribe to state changes
store.subscribe(() => {
  const state = store.getState();
  console.log('Current counter value:', state.counter);
});
