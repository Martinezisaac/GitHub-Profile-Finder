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
        <div className='user-wrapper'>
            <div className="githubDetails">
                <div className='section-1'>
                    <div className="avatarImage">
                        <img src = { avatar_url } className = "avatar" alt = "user avatar" />
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
                        <p> { bio ? bio : '...' } </p>
                    </div>
                    
                    <div>
                        <h2>Location</h2>
                        <p> {location ? location : '...'} </p>
                    </div>
                    
                    <div>
                        <h2>Public Repos</h2>
                        <p> {public_repos} </p>
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
