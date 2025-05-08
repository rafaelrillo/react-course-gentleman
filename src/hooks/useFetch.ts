import { useEffect, useState } from "react";

type Data<T> = T | null;
type ErrorType = Error | null

interface Params<T> {
  data: Data<T>;
  loading: boolean;
  error: ErrorType;
}

export const useFetch = <T>(url: string):Params<T> => {
  const [data, setData] = useState<Data<T>>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorType>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (url: string) => {
      setLoading(true)
      try {
        setLoading(true)
        const response = await fetch(url, controller);

        if(!response.ok) {
          throw new Error('hubo un error')
        }
        
        const jsonData: T = await response.json();
        setData(jsonData)
        setError(null)
      } catch(err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData(url);

    return () => {
      controller.abort();
    }

  }, [url])

  return {data, loading, error}

}
