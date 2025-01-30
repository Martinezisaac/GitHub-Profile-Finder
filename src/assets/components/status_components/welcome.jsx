import "../../styles/welcome.css";
import { motion } from "motion/react"
import React, { useState, useEffect } from 'react';

const Welcome = () => {
    const [animateKey, setAnimateKey] = useState(0); //Obtener una llave para ejecutar la animacion de fade

    useEffect(() => { // Reinicia la animación incrementando el key cada que se realice una busqueda
        setAnimateKey((prevKey) => prevKey + 1); //Actualizar la llave
    }, []); // Vuelve a ejecutar cuando el prop 'user' cambia
    
    return (
        <div key={animateKey} className='user-wrapper fade-in'>
            <div className="githubDetails">
                <div className='section-1'>
                    <div className="avatarImage">
                        <motion.img 
                            src = "https://avatars.githubusercontent.com/u/98341452?v=4" 
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
                        Isaac Martinez 
                        </motion.p>

                        <motion.p 
                            id='login'
                            whileHover={{ 
                                scale: 1.05, 
                                transition: { duration: 0.5 }}} >
                        martinezisaac 

                        </motion.p>
                    </div>

                    <button className='visit-profile'>
                        <a href = { `https://github.com/martinezisaac` } target = "_blank">
                            Visit Profile
                        </a> 
                    </button>
                </div>
                <div className='section-2'>
                <div className="info-wrapper">
                <h1> Welcome to the GitHub profile Finder!</h1>
                <p id="homepage-text">
                    <b> 
                        This is a personal project made it by { <a href="https://github.com/martinezisaac" target="_blank"> Isaac Martinez</a>}, with this application, you can easily search for GitHub profiles and explore their public repositories.
                        Simply enter a username in the search bar, and you'll get key information
                    </b>
                    <b>
                        You can also visit the users repositories by clicking on their projects name, if they have a homepage it will be displayed on the cards, so you can visit the final product
                    </b>
                    <b className="last-text">
                        Start now and discover the world of GitHub quickly and effortlessly! 
                    </b>
                </p>
            </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome