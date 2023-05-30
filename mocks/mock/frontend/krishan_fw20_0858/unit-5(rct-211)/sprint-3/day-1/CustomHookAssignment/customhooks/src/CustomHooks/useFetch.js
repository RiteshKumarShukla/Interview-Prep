import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(()=>{
        setLoading(true)
        axios.get(url)
        .then(r=>{
            setData(r.data)
            setLoading(false)
        })
        .catch(e=>{
            setLoading(false)
            setError(true)})
    },[url])
  return {loading,error, data}
}

export default useFetch