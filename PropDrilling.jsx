//write a react component that receives an object as a prop and displays its prpoerty as list


// parent component
import React from 'react';

const ObjectPropertiesList = ({ object }) => {
  const propertyList = Object.keys(object).map((key) => (
    <li key={key}>
      <strong>{key}: </strong>
      {object[key]}
    </li>
  ));

  return <ul>{propertyList}</ul>;
};

export default ObjectPropertiesList;


// child component
import React from 'react';
import ObjectPropertiesList from './ObjectPropertiesList';

const App = () => {
  const person = {
    name: 'John Doe',
    age: 25,
    occupation: 'Developer',
  };

  return (
    <div>
      <h1>Person Details</h1>
      <ObjectPropertiesList object={person} />
    </div>
  );
};

export default App;

