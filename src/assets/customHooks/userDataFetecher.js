import { useState } from 'react';

//Este custom hook unicamente realiza la busqueda del usuario mediante la API de githu
const userDataFetcher = (sendData) => {

    const [userName, setUserName] = useState('') //Nombre del usuario de Github
    const [loading, setLoading] = useState(false)
    
    //Funcion para obtener la informacion del usuario de GitHub
    const fetchGitHubUsers = async () => { 
        setLoading(true);
        const result = await fetch(`https://api.github.com/users/${userName}`); //Buscar los datos del username indicado
        const data = await result.json(); //Obtener los datos en formato json
        
        if (data) { //Validar si se encontraron los datos del usuario en la busqueda
            setLoading(false); //Indicar al usuario que la informacion se esta cargando
            setUserName(''); //Resetear Username 
            sendData(data); //Mandar los datos al componente padre
        } else { //Entonces no se encontro al usuario
            setLoading(false); //No se encontraron los datos
            sendData(data) //Mandar los datos al componente padre
            return; //No retornar nada
        }
        console.log(data); //Imprimir los datos en consola
    }

    //Funcion para el manejo de la busqueda de datos cuando el usuario presiona enter
    const handleEnter = (event) => {
        if (event.key === 'Enter' && userName.trim() !== '') { //Validar si el usuario presiona enter y que la informacion no sea nula
            fetchGitHubUsers(); //Hacer la busqueda
        }
    };

    return { //Devolver las propiedades necesarias para realizar la busqueda
        setUserName, //Establecer el nombre del usuario en el input de busqueda en header
        userName, //Nombre del usuario a buscar
        loading, //Estado booleando de cargar
        handleEnter, //Estado booleando sobre si el usuario presiono enter
        fetchGitHubUsers, //Buscar el userName proporcionado
    }
}

export default userDataFetcher

