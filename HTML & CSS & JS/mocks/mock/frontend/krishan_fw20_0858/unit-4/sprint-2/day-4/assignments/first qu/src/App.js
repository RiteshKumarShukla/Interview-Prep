import "./styles.css";
import { useState } from "react";

const initialStatus = {
  username: "",
  gender: "",
  role: "",
  maritalStatus: false
};

export default function App() {
  const [formData, setFormData] = useState(initialStatus);
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([...users, formData]);
  };

  const handleChange = (e) => {
    const { type, checked, value, name } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: inputValue });
  };
  const { username, gender, role, maritalStatus } = formData;

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            placeholder="Enter Your Name"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>
          Gender:
          <select value={gender} name="gender" onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </label>
        <br />
        <br />

        <label>
          Role:
          <select value={role} name="role" onChange={handleChange}>
            <option value="sr. dev">Senior Developer</option>
            <option value="jr. dev">Junior Developer</option>
          </select>
        </label>
        <br />
        <br />

        <label>
          Marital Status:{" "}
          <input
            type="checkbox"
            name="maritalStatus"
            checked={maritalStatus}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <input type="submit" />
      </form>
      <br />
      <br />

      {users.map((user) => (
        <li key={user.username}> {user.username}</li>
      ))}
    </div>
  );
}
