import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTasks } from "../Redux/action";

export const Navbar = () => {
  const tasks = useSelector(store=>store.tasks);
  const [pendingLength, setPendingLength] = useState(0)
  const [completedLength, setCompletedLength] = useState(0)
  const [totalLength, setTotalLength] = useState(0)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(tasks)

  useEffect(()=>{
    dispatch(getTasks())
    const pendingTask = tasks.filter((item,index)=>item.status === false);
    const completedTask = tasks.filter((item,index)=>item.status === true);
    setPendingLength(pendingTask.length);
    setCompletedLength(completedTask.length)
    setTotalLength(tasks.length)
  },[])
  return (
    <div
      style={{
        border: "1px solid black",
        height: "fit-content",
        display: "flex",
        padding: "0.5rem",
      }}
    >
      <div style={{ flex: "1" }}>
        <div>Pending Tasks</div>
        <div data-testid="pending-task-count">{pendingLength}</div>
      </div>
      <div style={{ flex: "1" }}>
        <div>Completed Tasks</div>
        <div data-testid="completed-task-count">{completedLength}</div>
      </div>
      <div style={{ flex: "1" }}>
        <div>Total Tasks</div>
        <div data-testid="total-tasks-count">{totalLength}</div>
      </div>
      <div style={{ display: "flex" }}>
        <button data-testid="add-task" onClick={()=>navigate('/add')}>Add Task</button>
      </div>
    </div>
  );
};
