import { DELETED_TODOS, GET_TODO_ERROR,GET_TODO_REQUEST,GET_TODO_SUCCESS, UPDATED_TODOS} from './Todo.actionTypes'

export const getTodoRequest = () =>{
    return {
        type:GET_TODO_REQUEST
    }
}

export const getTodoSuccess = (payload) =>{
    return {
        type:GET_TODO_SUCCESS,
        payload
    }
}
export const getTodoError = () =>{
return {
    type:GET_TODO_ERROR
}
}

export const updatedTodos = (payload) =>{
    return {
        type:UPDATED_TODOS,
        payload
    }
}
export const deletedTodos = (payload) =>{
    return {
        type:DELETED_TODOS,
        payload
    }
}