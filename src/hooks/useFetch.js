import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true)

    const fetchData = async () => {
      try {
        let response = await fetch(url)
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

  }, [url])

  return { data, isPending, error }
}