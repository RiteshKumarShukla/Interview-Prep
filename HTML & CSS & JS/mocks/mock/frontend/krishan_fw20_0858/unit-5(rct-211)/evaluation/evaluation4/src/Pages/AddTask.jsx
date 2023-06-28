import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTasks } from "../Redux/action";

const AddTask = () => {
  const [taskDetails , setTaskDetails] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleChange = (e)=>{
    setTaskDetails(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(addTasks({status:false,title:taskDetails}))
    .then(r=>navigate('/'))
    .catch(e=>console.log(e))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-testid="add-task-input-box" onChange={handleChange} placeholder="add task here" />
        <button data-testid="add-task-button">Add task</button>
      </form>
    </div>
  );
};

export default AddTask;
