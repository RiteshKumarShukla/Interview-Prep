import "./styles.css";
import { useState } from "react";

const initialStatus = {
  username: "",
  age: "",
  department: "",
  address: "",
  salary: "",
  profile: "",
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
  const {
    username,
    address,
    salary,
    department,
    profile,
    age,
    maritalStatus
  } = formData;

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
          Age:
          <input name="age" type="number" value={age} onChange={handleChange} />
        </label>
        <br />
        <br />

        <label>
          Address:
          <input
            name="address"
            type="text"
            value={address}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>
          Salary:
          <input
            name="salary"
            type="number"
            value={salary}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <label>
          Profile:
          <input
            name="profile"
            type="text"
            value={profile}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <label>
          Department:
          <select value={department} name="department" onChange={handleChange}>
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

      <table>
        <tr>
          <th>Profile Picture</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Department</th>
          <th>Salary</th>
          <th>MaritalStatus</th>
        </tr>

        {users.map((user) => (
          <tr>
            <td>
              <img
                style={{ width: "60px", height: "60px" }}
                src={user.profile}
                alt="pp"
              />
            </td>

            <td>{user.username}</td>

            <td>{user.age}</td>

            <td>{user.address}</td>

            <td>{user.department}</td>
            <td>{user.salary}</td>
            <td>{user.maritalStatus ? "YES" : "NO"}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
