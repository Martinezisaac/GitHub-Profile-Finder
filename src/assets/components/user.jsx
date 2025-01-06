import '../styles/user.css'

//Componente para mostrar la informacion del usuario de Github
const User = ( { user } ) => {
    const {
        avatar_url,
        followers,
        following,
        public_repos,
        url,
        name,
        created_at,
        login,
        starred_url,
    } = user; 

    const createdDate = new Date(created_at);

    return (
        <div className="githubDetails">
            <div className="avatarImage">
                <img src = { avatar_url } className = "avatar" alt = "user avatar" />
            </div>
            <div className="nameLink">
                <a href = { `https://github.com/${ login }` }> {name || login} </a>
            </div>
            <div className="userName">
                <p> Nombre de usuario: { login } </p>
            </div>
            <div className="joinedDate">
                <p> User Joined on {" "} { `${ createdDate.getDate() } ${ createdDate.toLocaleString("en-us", { month: "short", }) } ${ createdDate.getFullYear() }` }</p>
            </div>
            <div>
                <p>Public Repos</p>
                <p> {public_repos} </p>
            </div>
            <div>
                <p>Followers</p>
                <p> {followers} </p>
            </div>
            <div>
                <p>Following</p>
                <p> {following} </p>
            </div>
            <div>
                <p>Starred URL</p>
                <p> {starred_url} </p>
            </div>
            <div>
                <p>Gist</p>
                <button href={ starred_url }>Hola</button>
            </div>
        </div>
    );
}

export default User;
