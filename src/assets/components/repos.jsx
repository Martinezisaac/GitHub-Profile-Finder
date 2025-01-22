import { useEffect, useState } from 'react';
import '../styles/repos.css'
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
                                    <a href= {repo.html_url} target = "_blank"> <h2> { repo.name } </h2> </a>
                                    <p id='description'> { repo.description } </p>

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

                                    <p> { repo.language } </p>
                                    <p> <a href= {repo.homepage} target = "_blank">  { repo.homepage } </a> </p>
                                    <p> { repo.updated_at }</p>
                                    { repo.license && <p> { repo.license.name } </p>}
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

