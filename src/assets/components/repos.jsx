import { useEffect, useState } from "react";
import "../styles/repos.css";
import license from "../icons/license.svg";
import InfiniteScroll from "react-infinite-scroll-component";
import NotFound from "./status_components/notFound";
import ExcededTrys from "./status_components/excededTrys";

const Repos = ({ repourl }) => {
  const [reposData, setReposData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; //Obtener el token de la API de Github

  const fetchRepos = async () => { //Funcion para buscar los repostiorios de la API de Github
    try {
        const resultRepos = await fetch(`${repourl}?page=${page}&per_page=10`, { //Realizar la busqueda limitando la paginacion a 10 repositorios antes de empezar a buscar mas (esto con el fin de no cargar todos los repositorios de golpe)
          headers: { //Establecer autorizacion para realizar mas de 60 busquedas con la API de Github mediante un Token
            Authorization: `Bearer ${GITHUB_TOKEN}`, //Token personal de Github
          },
        }); //Realizar la busqueda mediante la API de Github y asignar paginacion por cantidad de proyectos (por cada 10 proyectos existe una nueva pagina)
        
        if (resultRepos.status === 401) {  // Verifica si el token ha expirado
          const resultReposWithoutToken = await fetch(`${repourl}?page=${page}&per_page=10`); // Si el token ha expirado, hacer la solicitud sin el token (limitado a 60 peticiones)
          console.log("it dont Works!");
          // Si la solicitud sin token es exitosa, procesa los resultados
          const repos = await resultReposWithoutToken.json();
          handleReposResponse(repos);
    
      } else { //Entonces el token es valido y se procesa la busqueda para obtener la informacion de los repositorios del usuario
          const repos = await resultRepos.json(); //Convertir los resultados en un objeto JSON
          console.log("it Works!");
          handleReposResponse(repos); //Obtener las propiedades del objeto de donde se obtienen los repos
      }
    } catch (error) { //Atrapar el error (el manejo de error tambien fue validado previamente para mostrar un componente de error en especifico)
        setHasMore(false); //Desactiva el scroll infinito en caso de error
    }
  };

  function handleReposResponse(repos) { //Funcion para obtener las propiedades de los repositorios
    if (repos.length === 0) { //Validar la longitud de repositorios
      setHasMore(false); //Entonces ya no existen mas repositorios para mostrar
    }

    setReposData((prevRepos) => [...prevRepos, ...repos]); //Agregar los repositorios al estado actual existente
    setPage((prevPage) => prevPage + 1); //Incrementar la paginacion, solicitando mas repositorios 
  }

  useEffect(() => {
    if (!repourl) return; // Verifica que exista una URL, en caso contrario no realiza la busqueda
    setReposData([]); // Limpia los repositorios al cambiar de URL
    setPage(1); // Reinicia la paginación
    setHasMore(true); // Activar el scroll infinito
    // fetchRepos(); // Carga los primeros repositorios
  }, [repourl]); //Asignar el efecto

  return (
    <div className="reposData-wrapper">
      <InfiniteScroll
        dataLength={reposData.length} //Número actual de elementos
        next={fetchRepos} //Función para buscar mas repositorios
        hasMore={hasMore} // Validar si existen mas repositorios que mostrar
        loader={<div className="infiniteScroll-loader">
            <span className="loader"></span>
        </div>
        } // Muestra un mensaje mientras carga
        endMessage={
          <p className="endMessage">
            {reposData.length > 0 ? (
              <b>You have seen all {reposData.length} public repositories</b>
            ) : (
              null
            )}
            
          </p>
        }
        pullDownToRefreshThreshold={15}
        id="scrollableDiv"
      >
        <ul className="repos-list">
          {reposData.map((repo, index) => (
            <div className="repos-wrapper" key={`${repo.id}-${index}`}>
              <div className="reposcontent-wrapper">
                <li>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <h2 className="repo-name">{repo.name}</h2>
                  </a>
                  {repo.description && <p id="description">{repo.description}</p>}

                  {repo.topics && repo.topics.length > 0 && (
                    <div>
                      <div className="topics-wrapper">
                        {repo.topics.map((topic, index) => (
                          <div className="topics-style" key={index}>
                            <p id="topics">{topic}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <p id="repohomepage">
                    {repo.homepage && (
                      <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                        Homepage: {repo.homepage}
                      </a>
                    )}
                  </p>
                  <p>
                    {(() => {
                      const date = new Date(repo.updated_at);
                      const formattedDate = date.toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      });
                      return `Updated on ${formattedDate}`;
                    })()}
                  </p>

                  <div className="repo-sideinfo">
                    {repo.language && <p id="repo-language">{repo.language}</p>}
                    {repo.license && (
                      <div className="license-wrapper">
                        <img id="license-image" src={license} alt="License" />
                        <p id="license-name">{repo.license.name}</p>
                      </div>
                    )}
                  </div>

                  <div className="repo-forked">
                    {repo.fork && <p className="repo-forked">This repository was forked</p>}
                  </div>
                </li>
              </div>
            </div>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default Repos;