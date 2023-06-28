import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TaskItems from "../Components/TaskItems";
import { getTasks } from "../Redux/action";

const Homepage = () => {
  const tasks = useSelector((store)=> store.tasks)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getTasks())
  },[])
  return (
    <div>
      {/* Map through the task lists here using the TaskItems component */}
      {tasks && tasks.map((item,index)=>{
        return <TaskItems taskData = {item} key={index}/>
      })}
    </div>
  );
};

export default Homepage;
