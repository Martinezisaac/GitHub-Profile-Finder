
//Custom hook para devolver la informacion del usuario
const userData = (sendUserData) => {
    const {
        bio, //Biografia del usuario
        avatar_url, //Imagen del usuario en la plataforma
        followers, //Cantidad de seguidores
        following, //Cantidad de personas a las que sigue
        public_repos, //Cantidad de repositorios disponibles
        name, //Nombre real del usuario 
        created_at, //Fecha de creacion de la cuenta
        login, //Nombre de usuario en la plataforma
        location, //Localizacion del usuario 
        status, //Si existe una propiedad "status" entonces es porque existe un error (404 - User not found)
        repos_url, //Informacion de los repositorios
        documentation_url //URL de la documentacion, entonces el usuario intento bucar mas de 60 usuarios desde la misma IP en menos de una hora
    } = sendUserData; //Obtener las propiedades del objeto

    const createdDate = new Date(created_at); //Obtener fecha de creacion de la cuenta de Github

    return { //Devolver las propiedades del objeto
        bio, 
        avatar_url,
        followers,
        following,
        public_repos,
        name,
        created_at,
        login,
        location,
        createdDate,
        status,
        repos_url,
        documentation_url
    }
}

export default userData