import React, { useState } from 'react';
import '../styles/header.css'
import github_logo from '../icons/githubWhite.svg'
import search from '../icons/search.svg'

const Header = ( { sendData }) => {
    const [userName, setUserName] = useState('Martinezisaac') //Nombre del usuario de Github
    const [loading, setLoading] = useState(false)
  
    //Funcion para obtener la informacion del usuario de GitHub
    const fetchGitHubUsers = async () => { 
      setLoading(true); //Indicar al usuario que la informacion se esta cargando
      const result = await fetch(`https://api.github.com/users/${userName}`); //Buscar los datos del username indicado
      const data = await result.json(); //Obtener los datos en formato json
      
      if (data) { //Validar si se encontraron datos en la busqueda
        setLoading(false); //Reiniciar el valor porque ya se encontro informacion
        setUserName(''); //Resetear Username 
        sendData(data); //Mandar los datos al componente padre
      } else {
        setLoading(false); //No se encontraron los datos
        return; //Retornar un componente para cuando no se encontraron los datos
      }
      console.log(data); //Imprimir los datos en consola
    }

    //Funcion para el manejo de la busqueda de datos cuando el usuario presiona enter
    const handleEnter = (event) => {
        if (event.key === 'Enter' && userName.trim() !== '') { //Validar si el usuario presiona enter y que la informacion no sea nula
            fetchGitHubUsers(); //Hacer la busqueda
        }
    };

    return (
        <div className="header"> 
            <div className="header-container">
                <div className="logo-container">
                    <img src= { github_logo } />
                    <h1>GitHub Profile Finder</h1>
                </div>
                <div className="search-display">
                    <div className='input-container'>
                        <img src= { search } className='input-icon'/> 
                        <input 
                            placeholder='Search Github User' 
                            className='input-text' 
                            value={ userName } 
                            onKeyDown = { handleEnter } 
                            onChange={ (event) => setUserName(event.target.value) }
                        />                       
                    </div>
                </div>
            </div>
            {loading && <div className="loading-section"><h1>Loading information...</h1></div>}
        </div>
    );
}

export default Header;