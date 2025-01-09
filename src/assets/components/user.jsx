import '../styles/user.css'
import users from '../icons/users.svg'
import { motion } from "motion/react"
import NotFound from './notFound';
import userData from '../customHooks/userData';

//Componente para mostrar la informacion del usuario de Github
const User = ( { user } ) => {
    const data = userData(user); //Mandar el objeto para obtener sus propiedades
    
    const {
        bio, //Biografia del usuario
        avatar_url, //Imagen del usuario en la plataforma
        followers, //Cantidad de seguidores
        following, //Cantidad de personas a las que sigue
        public_repos, //Cantidad de repositorios disponibles
        url, //
        name, //Nombre real del usuario 
        created_at, //Fecha de creacion de la cuenta
        login, //Nombre de usuario en la plataforma
        location, //Localizacion del usuario 
        status, //Si existe una propiedad "status" entonces es porque existe un error (404 - User not found)
    } = data; //Obtener las propiedades del objeto

    const createdDate = new Date(created_at);

    if (status) { //Validar si se ha recibido un status
        return (
            <NotFound /> //Si se recibio un estatus entonces no se encontro al usuario
        );
    }
    
    return (
        <div className='user-wrapper'>
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
                        <p id='name'> { name } </p>
                        <p id='login'> { login } </p>
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
                        <p> { bio }</p>
                    </div>
                    
                    <div>
                        <h2>Location</h2>
                        <p> { location } </p>
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
        </div>
    );
}

export default User;
