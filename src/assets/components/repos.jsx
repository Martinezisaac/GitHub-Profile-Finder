import { useEffect, useState } from 'react';
import '../styles/repos.css'
import license from '../icons/license.svg'
import InfiniteScroll from 'react-infinite-scroll-component';

const Repos = ({ repourl }) => {
    const [reposData, setReposData] = useState([])

    const fetchRepos = async () => { //Obtener los elementos del objeto de los repositorios
        const resultRepos = await fetch(repourl);
        const repos = await resultRepos.json();
        setReposData(repos); //Establecer la informacion en un hook
        return repos; 
    }

    useEffect(() => { //Ejecutar cada vez que se obtiene una url de repositorios
        if(!repourl) return; //Validar si existe una url
        fetchRepos(); //Obtener la informacion estructurada
    }, [repourl])

    return(
        <div className='reposData-wrapper'>
            <InfiniteScroll
                dataLength={reposData.length} //This is important field to render the next data
                next={fetchRepos}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
                pullDownToRefreshThreshold={5}
            >
                <ul>
                    {reposData.map((repo) => (
                        <div className='repos-wrapper'>
                            <div className='reposcontent-wrapper'>
                                <li key={repo.id}>
                                    <a href= {repo.html_url} target = "_blank"> 
                                        <h2 className='repo-name'> { repo.name } </h2> 
                                    </a>
                                    { repo.description && <p id='description'> { repo.description } </p>}

                                    { repo.topics && repo.topics.length > 0 && (
                                            <p> 
                                                <div className='topics-wrapper'>
                                                    { repo.topics.map((topic, index) => (
                                                        <div className='topics-style'>
                                                            <p id='topics'> {topic} </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            
                                            </p>
                                    )}

                                    <p id='repohomepage'> { repo.homepage && (
                                        <a href= { repo.homepage } target='_blank'> Homepage: { repo.homepage } </a>
                                    )}</p>
                                    <p>
                                        {(() => { // Crear una funcion flecha para hacer conversiones de horarios
                                            const date = new Date(repo.updated_at); // Convertir la fecha ISO a un objeto Date
                                            const formattedDate = date.toLocaleDateString("en-US", {
                                            day: "numeric",    // Día como número
                                            month: "long",     // Mes en formato largo (ej. "enero")
                                            year: "numeric",   // Año completo
                                            });
                                            return `Updated on ${formattedDate}`; // Retornar la fecha formateada
                                        })()}
                                    </p>

                                    <div className='repo-sideinfo'>
                                        { repo.language && <p id='repo-language'>{ repo.language }</p>}
                                        { repo.license && (
                                            <div className='license-wrapper'>
                                            <img id='license-image' src = { license } /> 
                                            <p id='license-name'> { repo.license.name } </p>
                                            </div>
                                        )}
                                    </div>

                                    <div className='repo-forked'>
                                        { repo.fork && <p className='repo-forked'>This repository was forked</p>}
                                    </div>

                                </li>
                            </div>
                        <hr></hr>
                        </div>
                    ))}
                </ul>
            </InfiniteScroll>
        </div>
    );
} 

export default Repos

