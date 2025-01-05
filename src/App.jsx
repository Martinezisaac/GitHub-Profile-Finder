import { use, useEffect, useState } from 'react'
import './App.css'
import User from './assets/components/user'

function App() {
  const [userName, setUserName] = useState("Martinezisaac")
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  //Funcion para obtener la informacion del usuario de GitHub
  async function fetchGitHubUsers() { 
    setLoading(true);
    const result = await fetch(`https://api.github.com/users/${userName}`); //Buscar los datos del username indicado
    const data = await result.json(); //Obtener los datos
    

    if (data) { //Validar si existen datos
      setUserData(data); //Obtener la informacion del usuario
      setLoading(false); //Reiniciar el valor
      setUserName(''); //Reiniciar los valores
    }
    console.log(data); //Imprimir los datos en consola
  }

  //Funcion para el manejo de las entradas
  function handleSubmit() {
    fetchGitHubUsers(); //Cargar los datos con 
  } 

  //Realizar la busqueda
  useEffect(() => {
    fetchGitHubUsers();
  }, [])

  if (loading) {
    return <h1>Loading information</h1>
  }

  return (
    <div className='github-profile-container'>
       <div className = "input-wrapper"> 
        <input 
          name = "input-wrapper"
          type = "text"
          placeholder = "Insert a GitHub user"
          value = { userName }
          onChange = { (event) => setUserName(event.target.value)}
          />
        <button onClick={ handleSubmit }>Search</button>
      </div>
      { userData !== null ? <User user = { userData } /> : null }
    </div>
  );
}

export default App
