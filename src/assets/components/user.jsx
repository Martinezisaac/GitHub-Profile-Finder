import '../styles/user.css'
import users from '../icons/users.svg'

//Componente para mostrar la informacion del usuario de Github
const User = ( { user } ) => {
    const {
        bio, 
        avatar_url,
        followers,
        following,
        public_repos,
        url,
        name,
        created_at,
        login,
        location, 
        starred_url,
    } = user; 

    const createdDate = new Date(created_at);

    return (
        <div className='content-wrapper'>
            <div className="githubDetails">
                <div className='section-1'>
                    <div className="avatarImage">
                        <img src = { avatar_url } className = "avatar" alt = "user avatar" />
                    </div>

                    <div className="nameLink">
                        <p> { name } </p>
                        <p> { login } </p>
                    </div>

                    <button>
                        <a href = { `https://github.com/${ login }` } target = "_blank">
                            Visit Profile
                        </a> 
                    </button>
                </div>
                <div className='section-2'>
                    <div>
                        <h2>Biography</h2>
                        <p> { bio ? bio : 'This user does not have a Biography...' } </p>
                    </div>
                    
                    <div>
                        <h2>Location</h2>
                        <p> {location ? location : 'This user does not have a location...'} </p>
                    </div>
                    
                    <div>
                        <h2>Public Repos</h2>
                        <p> {public_repos} </p>
                    </div>

                    <div className='socialData'>
                        <div className='followers'> 
                            <img src= { users } />
                            <p> { followers } followers · { following } following</p>
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
