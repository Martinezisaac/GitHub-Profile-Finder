import '../styles/footer.css'
import github_logo from '../icons/githubGray.svg'

const Footer = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer-content">
            <div className='footer-wrapper'>
                <div className='content-one'>
                    <img src= { github_logo } className='github-logo' />
                    <p> © { currentYear } GitHub Profile Finder. Inc </p> 
                </div>
                <div className='content-two'>
                    <p>
                        This is a personal project made it by { ' ' }
                        <a href= { `https://github.com/Martinezisaac` }>
                        Isaac Martinez
                        </a>
                    </p> 
                </div>               
            </div>               
        </div>
    );
}

export default Footer;