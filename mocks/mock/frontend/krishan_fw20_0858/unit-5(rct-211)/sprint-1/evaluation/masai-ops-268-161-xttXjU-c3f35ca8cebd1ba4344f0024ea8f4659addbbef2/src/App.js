import { useReducer, useState } from "react";
import "./App.css";
import { UserRow } from "./Component/UserRow";

const initialState = {
  name: "",
  gender: "Male",
  role: "FrontEnd Developer",
  maritalStatus: false,
};

//should have the cases "name", "gender", "role", "maritalStatus", and "reset" along with the default cases
const reducer = (state, action) => {
switch(action.type){
  case 'name':
    return {
      ...state,
      name:action.payload
    
  }
  case 'role':{
    return {
      ...state,
      role:action.payload
    }
  }
  case 'gender':{
    return {
      ...state,
      gender:action.payload
    }
  }
  case 'maritalStatus':{
    return {
      ...state,
      maritalStatus:action.payload
    }
  }
  case 'reset':{
    return {
      ...initialState
    };
  }
  default:return initialState
}
};

function App() {
  // import and use the useReducer hook here, with the reducer function and the initialState.

  //store the data in this object variable when you click on the submit button, to render, the data in the UI.
  const [submittedData, setSubmittedData] = useState([]);

  const [data, dispatch] = useReducer(reducer,initialState)

  const handleName = (e)=>{
    dispatch({type:'name',payload:e.target.value});
    console.log(data)
  }
  const handleRole = (event)=>{
    dispatch({type:'role',payload:event.target.value});
    
    console.log(data)
  }
  const handleGender =(event)=>{
    dispatch({type:'gender',payload:event.target.value})
    console.log(data);
  }
  const handleCheckbox =(e)=>{
    dispatch({type:'maritalStatus',payload:e.target.checked});
    console.log(data)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setSubmittedData([...submittedData,data])
    dispatch({type:'reset'})
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
              <input type="text" name="name" placeholder="Name" onChange={handleName} value ={data.name} />
            </div>
            <div className="gender-wrapper" data-testid="gender-wrapper">
              <label>Gender</label>
              <select name="gender" data-testid="gender-select" onChange={handleGender} value={data.gender}>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Others'>Others</option>
              </select>
            </div>
            <div className="role-wrapper" data-testid="role-wrapper">
              <label>Role</label>
              <select name="role" data-testid="role-select" onChange={handleRole} value ={data.role}>
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
                <input type={"checkbox"} name ='maritalStatus' onChange ={handleCheckbox} checked ={data.maritalStatus}/>
                <label>Married</label>
              </div>
            </div>
            <div>
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </div>

        {/* map through the submittedData and render UserRow component to display the data in tabular format ELSE print "no users found"  in there is no user data */}
        {submittedData.length>1 ? submittedData.map((e)=>(<table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>User</th>
              <th>Gender</th>
              <th>Role</th>
              <th>maritalStatus</th>
            </tr>
          </thead>
          {submittedData.map((u,i)=><UserRow id={i+1} name={u.name} gender={u.gender} role={u.role} maritalStatus={u.maritalStatus}></UserRow>)}
        </table>)) : <div data-testid="no-user-container">no users found</div>}
      </div>
    </div>
  );//evaluation
}

// DO NOT change/modify the exports
export default App;
export {reducer, initialState}
