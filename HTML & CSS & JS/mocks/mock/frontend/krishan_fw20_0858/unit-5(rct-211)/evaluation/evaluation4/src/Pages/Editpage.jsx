import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { getTasks, updateTask } from "../Redux/action";

const Editpage = () => {
  const [selectBox , setSelectBox] = useState(true)
  const [inputBox , setInputBox] = useState("");
  const [previousData, setPreviousData] = useState({})
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector(store=>store.tasks)
  const {id} = useParams();


  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(updateTask(id,{title:inputBox,status:selectBox}))
    .then(r=>navigate('/'))
    .catch(e=>console.log(e))
  }
  useEffect(()=>{
    if(previousData?.title === undefined){
      dispatch(getTasks());
      const singleTask = tasks.find((item,index)=>item.id === Number(id));
      setPreviousData(singleTask)
    }
    console.log('first')
  },[previousData])
  return (
    <div>
      <form onSubmit ={handleSubmit}>
        <input data-testid="edit-task-title" onChange={(e)=>setInputBox(e.target.value)} value={previousData?.title}/>
        <select data-testid="edit-select-option" value={previousData?.status ==='true' ? "True" :  'false'} onChange={(e)=> setSelectBox(e.target.value==='true' ? true : false)}>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <button data-testid="edit-update">Update</button>
      </form>
    </div>
  );
};

export default Editpage;
