import React, { useState, useEffect } from 'react';
import '../styles/user.css'
import users from '../icons/users.svg'
import developer from '../icons/developer.svg'
import { motion } from "motion/react"
import NotFound from './status_components/notFound';
import userData from '../customHooks/userData';
import Repos from './repos';

//Componente para mostrar la informacion del usuario de Github
const User = ( { user } ) => {
    const data = userData(user); //Mandar el objeto para obtener sus propiedades
    const [animateKey, setAnimateKey] = useState(0); //Obtener una llave para ejecutar la animacion de fade
    
    const {
        bio, //Biografia del usuario
        avatar_url, //Imagen del usuario en la plataforma
        followers, //Cantidad de seguidores
        following, //Cantidad de personas a las que sigue
        public_repos, //Cantidad de repositorios disponibles
        name, //Nombre real del usuario 
        login, //Nombre de usuario en la plataforma
        location, //Localizacion del usuario 
        status, //Si existe una propiedad "status" entonces es porque existe un error (404 - User not found)
        createdDate, //Fecha de creacion de la cuenta
        repos_url
    } = data; //Obtener las propiedades del objeto

    useEffect(() => { // Reinicia la animación incrementando el key cada que se realice una busqueda
        setAnimateKey((prevKey) => prevKey + 1); //Actualizar la llave
    }, [user]); // Vuelve a ejecutar cuando el prop 'user' cambia

    if (status) { //Validar si se ha recibido un status
        return (
            <NotFound /> //Si se recibio un estatus entonces no se encontro al usuario
        );
    }
    
    return (
        <div key={animateKey} className='user-wrapper fade-in'>
            <div className="githubDetails">
                <div className='section-1'>
                    <div className="avatarImage">
                        <motion.img 
                            src = { avatar_url } 
                            className = "avatar" 
                            alt = "user avatar"
                            whileHover={{ 
                                scale: 1.01, 
                                transition: { duration: 0.3 }}}
                            whileTap={{ 
                                scale: 0.95,
                                transition: { duration: 0.3 },
                                ease: "easeOut" }}
                    />
                    </div>

                    <div className="nameLink">
                        <motion.p 
                            id='name'
                            whileHover={{ 
                                scale: 1.05, 
                                transition: { duration: 0.5 }}} >
                        { name } 
                        </motion.p>

                        <motion.p 
                            id='login'
                            whileHover={{ 
                                scale: 1.05, 
                                transition: { duration: 0.5 }}} >
                        { login } 

                        </motion.p>
                    </div>

                    <button className='visit-profile'>
                        <a href = { `https://github.com/${ login }` } target = "_blank">
                            Visit Profile
                        </a> 
                    </button>
                </div>
                <div className='section-2'>
                    <div>
                        <h2>Bio</h2>
                        <p> { bio ? bio : 'This user does not have a Bio' }</p>
                    </div>
                    
                    <div>
                        <h2>Location</h2>
                        <p> { location ? location : 'This user does not set a location' } </p>
                    </div>
                    
                    <div>
                        <h2>Public Repos</h2>
                        <p> { name } have {public_repos} public repositories </p>
                    </div>

                    <div className='socialData'>
                        <h2> Community </h2>
                        <div className='followers'> 
                            <img src= { users } id='users-icon'/>
                            <p id='community'> { followers } followers · { following } following</p>
                        </div>
                    </div>

                    <div className="joinedDate">
                        <p> User Joined on {" "} { `${ createdDate.getDate() } ${ createdDate.toLocaleString("en-us", { month: "short", }) } ${ createdDate.getFullYear() }` }</p>
                    </div>
                </div>
            </div>
            
            <div className='header-repos'>
                <img id='img-title' src= { developer } />
                <h2 id='repos-title'> { name } public repositories</h2>
            </div>

            <div className='repos'>
                <Repos repourl = { repos_url }/>
            </div>
        </div>

    );
};

export default User;
