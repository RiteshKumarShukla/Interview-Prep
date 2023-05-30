import React from 'react'
import axios from "axios"
import useFetch from '../Hooks/useFetch'
const PostFeed = () => {

    const {loading, error, data} = useFetch("http://localhost:8080/posts")
    if(loading){
        return <div>Loading...</div>
    }
    else if(error){
        return <div>Error...</div>
    }

  return (
    <div>
        {data.map((p)=>(
            <div key={p.id}>{p.post}</div>
        ))}
    </div>
  )
}

export default PostFeed