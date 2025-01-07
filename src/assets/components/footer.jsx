import '../styles/footer.css'
import github_logo from '../icons/githubGray.svg'

const Footer = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer-content">
            <div className='derechos-reservados'>
                <div className='content-wrapper'>
                    <img src= { github_logo } />
                    <p> © { currentYear } GitHub Profile Finder. Inc </p>  
                </div>
            </div>
            <div className='personal-rights'>
                <p>
                    This is a personal project made it by { ' ' }
                    <a href= { `https://github.com/Martinezisaac` }>
                    Isaac Martinez
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Footer;