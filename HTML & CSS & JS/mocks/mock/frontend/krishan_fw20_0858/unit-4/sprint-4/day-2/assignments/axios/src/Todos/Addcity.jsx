import { useState } from "react";

function AddCity({ onAddCity }) {
  const [formState, setFormState] = useState({
    population: "",
    name: "",
    country: ""
  });
  const EventHandler = (e) => {
    const { name, value, type } = e.target;

    const val = type === "number" ? Number(value) : value;

    setFormState({
      ...formState,
      [name]: val
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCity(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={formState.name}
          placeholder="Enter City Name"
          onChange={EventHandler}
        />
      </div>

      <div>
        <input
          type="number"
          onChange={EventHandler}
          value={formState.population}
          placeholder="Enter Population"
          name="population"
        />
      </div>

      <div>
        <input
          type="text"
          onChange={EventHandler}
          value={formState.country}
          name="country"
          placeholder="Enter Country"
        />
      </div>

      <input type="submit" />
    </form>
  );
}
export default AddCity;
