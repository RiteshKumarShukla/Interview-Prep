import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { deleteTask } from "../Redux/action";

const TaskItems = ({ taskData }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()
  const handleDelete = ()=>{
    dispatch(deleteTask(taskData.id))
  }
  const handleEdit = ()=>{
    navigate(`/edit/${taskData.id}`)
    // return <Navigate to={`/edit/${taskData.id}`} />
  }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.2rem",
        paddingBottom: "0.5rem",
        display: "flex",
        flexDirection: "column",
        maxWidth: "380px",
        margin: "auto",
        marginBottom: "1rem",
        justifyContent: "center",
      }}
      data-testid={`task-item-${taskData.id}`}
    >
      <div
        data-testid="task-title"
        style={{ fontSize: "24px", fontWeight: "600" }}
      >{taskData.title}</div>
      <div data-testid="task-status" style={{ fontSize: "18px" }}>{taskData.status? 'True' : 'False'}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button data-testid="edit-task" onClick={handleEdit}>Edit</button>
        <button data-testid="delete-task" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItems;
