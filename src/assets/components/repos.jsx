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
                            <li key={repo.id}>
                                <h2> { repo.name } </h2>
                                <p> { repo.description } </p>

                                { repo.topics && repo.topics.length > 0 && (
                                    <p> 
                                    { repo.topics.map((topic, index) => (
                                        <p> {topic} </p>
                                    ))}
                                    </p>
                                )}

                                <p> { repo.language } </p>
                                <p> <a href= {repo.homepage} >  { repo.homepage } </a> </p>
                                <p> { repo.updated_at }</p>
                                { repo.license && <p> { repo.license.name } </p>}
                            </li>
                        </div>
                    ))}
                </ul>
            </InfiniteScroll>
        </div>
    );
} 

export default Repos