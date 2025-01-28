import error from '../../icons/githubGray.svg'
import '../../styles/notFound.css'
import { motion } from "motion/react"

//Componente para cuando la informacion es nula
const ExcededTrys = () => {

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
            <h1> ERROR 403 </h1>
        </div>
        <div className='error-2'>
            <p>You have been searching a lot. The Github API allows 60 searches per hour with the same IP</p>
            <p>Try again later!</p>
        </div>  
    </div>
    );
}

export default ExcededTrys; 