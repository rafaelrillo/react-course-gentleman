import { useEffect, useState } from 'react'
import './App.css'

const API_URL = 'https://pokeapi.co/api/v2/pokemon'



function App() {
  const [data, setData] = useState<[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async (url: string): Promise<void> => {
      setLoading(true)
      try {
        const response = await fetch(url)
        const data = await response.json();

        if(!response.ok) {
          throw new Error('no funciona')
        }

        console.log(data)
        setData(data)

      } catch (err) {
      
        console.log(err)
        setError(err as string)
      
      } finally {
        setLoading(false)
      }
    }

    fetchData(API_URL)
  }, [])

  if(loading) {
    return <div>Cargando...</div>
  }

  if(error) {
    return <div>Hubo un error</div>
  }

  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  )
}

export default App