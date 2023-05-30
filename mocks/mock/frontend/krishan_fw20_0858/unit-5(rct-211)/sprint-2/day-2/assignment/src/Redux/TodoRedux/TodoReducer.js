import {GET_TODO_ERROR,GET_TODO_REQUEST,GET_TODO_SUCCESS,UPDATED_TODOS,DELETED_TODOS} from './Todo.actionTypes'
const initialState = {
  isLoading:false,
  todos:[],
  isError:false
}

const TodoReducer = (state = initialState,{type,payload}) => {
  switch(type){
    case (GET_TODO_REQUEST):{
      return{
        ...state,
        isLoading:true,
      }
    }
    case (GET_TODO_SUCCESS):{
      return {
        ...state,
        todos:[... payload],
        isLoading:false
      }
    }
    case (GET_TODO_ERROR):{
      return{
        ...state,
        isError:true
      }
    }
    case(UPDATED_TODOS):{
      const id = payload.id;
      const upd = state.todos.map((e)=>{
        if(e.id === id){
          return payload
        }
        return e
      });

      return{
        ...state,
        todos:upd
      }
    }
    case(DELETED_TODOS):{
      const Id = payload.id;
      const filteredTodos= state.todos.filter((e)=>{
        return e.id !== Id
      })

      return {
        ...state,
        todos:filteredTodos
      }
    }
    default :return state;
  }
}

export default TodoReducer