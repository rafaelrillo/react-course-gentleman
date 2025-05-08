import { useFetch } from './hooks'
import './App.css'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

interface User {
  id: number;
  name: string;
  lastname: string;
}

type Data = User[]

function App() {

  const { data, error, loading } = useFetch<Data>(API_URL)

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>Hubo un error: {error.message}</div>
  }

  return (
    <div>{data?.map((user) => {
      return <p>{user.name}</p>
    })}</div>
  )
}

export default App