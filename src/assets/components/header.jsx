import github_logo from '../icons/githubWhite.svg'
import search from '../icons/search.svg'
import overview from '../icons/overview.svg'

const Header = () => {
    return (
        <div className="header"> 
            <div className="header-contanier">
                <div className="logo-container">
                    <img src= { github_logo } />
                    <h1>GitHub Profile Finder</h1>
                </div>
                <div className="search-display">
                    <div className='input-container'>
                        <img src= { search } />
                        <input placeholder='Search Github User'/>
                    </div>
                </div>
                <div className="overview-container">
                    <img src= { overview } />
                    <h3>Oveerview</h3>
                </div>
            </div>
        </div>
    );
}

export default Header;