import error from '../../icons/githubGray.svg'
import '../../styles/notFound.css'
import { motion } from "motion/react"

//Componente para cuando la informacion es nula
const NotFound = () => {

    return (
    <div className="notFound-wrapper">
        <div className='error-1'>
            <motion.img 
                src= { error } id='error-icon'
                whileHover={{ 
                    scale: 1.01, 
                    transition: { duration: 0.3 }}}
                whileTap={{ 
                    scale: 0.95,
                    transition: { duration: 0.3 },
                    ease: "easeOut" }}
            />
            <h1> ERROR 404 </h1>
        </div>
        <div className='error-2'>
            <p>The user you try to find does not exist...</p>
            <p>Try finding a new user</p>
        </div>  
    </div>
    );
}

export default NotFound; 