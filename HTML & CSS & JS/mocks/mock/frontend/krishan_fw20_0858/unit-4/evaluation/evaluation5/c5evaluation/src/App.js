import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "gender":
      return { ...state, gender: action.payload };
    case "role":
      return { ...state, role: action.payload };
    case "maritalStatus":
      return { ...state, maritalStatus: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const nameAction = (value)=>{
  return {
    type : 'name',
    payload : value
  }
}
const roleAction = (value)=>{
  return {
    type : 'role',
    payload : value
  }
}

const maritalStatusAction = (value)=>{
  return {
    type : 'maritalStatus',
    payload : value
  }
}
const resetAction ={type:'reset'}

const genderAction = (value)=>{
  return {
    type : 'gender',
    payload : value
  }
}

function App() {
 
  const [state,dispatch] = useReducer(reducer,initialState)
  const [data,setData] = useState([]);

  const handleSubmit = (event)=>{
    event.preventDefault()
    setData([...data,state])
    dispatch(resetAction) 
  }
  
 
  return (
    <div className="App">
      <div>
        <h1>User Form</h1>
        <h3>useReducer</h3>
        <div className="form-wrapper" data-testid="form-wrapper">
          <form data-testid="form-element" onSubmit={handleSubmit}>
            <div className="name-wrapper" data-testid="name-wrapper">
              <label>Name</label>
              {/* keep an input tag with name attribute as "name" type as "text" and placeholder as "Name" */}
              <input type="text" name="name" placeholder="Name" value={state.name} onChange={(e)=>dispatch(nameAction(e.target.value))}/>
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select name="gender" data-testid="gender-select" onChange={(e)=>dispatch(genderAction(e.target.value))}>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Prefer Not to Say'>Prefer Not to Say</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select name="role" data-testid="role-select" onChange={(e)=>dispatch(roleAction(e.target.value))}>
                <option>FrontEnd Developer</option>
                <option>BackEnd Developer</option>
                <option>FullStack Developer</option>
              </select>
            </div>
            <div
              className="marital-status-wrapper"
              data-testid="marital-status-wrapper"
            >
              <legend>Martial Status</legend>
              <div>
                {/* keep an input tag with type as "checkbox" and name as "maritalStatus" */}
                <input type={"checkbox"}  onChange={(e)=>dispatch(maritalStatusAction(e.target.value ))} name='maritalStatus' />
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>

        {/* map through the userdata and render UserRow component to display the data in tabular format */}
        {/* print "no users found"  in there is no user data */}
        {data.length===0?<h2 data-testid="no-user-container">no users found</h2>:
          <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>User</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Marital Status</th>
            </tr>
          </thead>
          {data.map((users,ind)=><UserRow key={ind} id={ind+1} name={users.name} role={users.role} gender={users.gender} maritalStatus={users.maritalStatus?'married':'unmarried'} />)}
        </table>
}
      </div>
    </div>
  );
}

export default App;
