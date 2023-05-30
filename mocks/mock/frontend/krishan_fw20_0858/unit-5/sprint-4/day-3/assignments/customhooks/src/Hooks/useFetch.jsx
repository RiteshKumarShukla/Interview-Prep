import React, { useEffect, useState } from 'react'
import axios from "axios"
const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const getPost = async (url)=>{
        setLoading(true)
        try {
            let data = await axios.get(url);
            setData(data.data);
        } catch (error) {
            setError(true)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
     getPost(url)        
    },[url])


  return {loading, error, data};
}

export default useFetch