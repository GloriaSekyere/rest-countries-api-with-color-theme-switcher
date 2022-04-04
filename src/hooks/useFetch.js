import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const controller = new AbortController;
    
    const fetchData = async () => {
      setIsPending(true)
      try {
        let response = await fetch(url, { signal: controller.signal })
        if (response.ok) {
          let data = await response.json()
          setData(data)
          setIsPending(false)
        } 
        else {
          throw new Error("Failed to fetch data")
        }
      } 
      catch (err) {
        setError(err.message)
        setIsPending(false)
      }
    }
    
    fetchData()

    return () => {
      controller.abort()
    }

  }, [url])

  return { data, isPending, error }
}