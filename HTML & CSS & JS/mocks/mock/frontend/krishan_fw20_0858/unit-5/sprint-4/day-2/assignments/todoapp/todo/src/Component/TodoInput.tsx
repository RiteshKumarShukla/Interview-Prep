import React, { ChangeEvent, FormEvent,useState } from 'react'
import { setConstantValue } from 'typescript'



const TodoInput = (props:{addFun:Function}) => {
    const {addFun} = props

    const [value, setValue] = useState<string>("")
    const handleChange =(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        addFun(value)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type = 'submit'>Add</button>
    </form>
  )
}

export default TodoInput