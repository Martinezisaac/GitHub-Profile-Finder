import { useEffect, useState } from "react";
import "../styles/repos.css";
import license from "../icons/license.svg";
import InfiniteScroll from "react-infinite-scroll-component";

const Repos = ({ repourl }) => {
  const [reposData, setReposData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchRepos = async () => {
    try {
      const resultRepos = await fetch(`${repourl}?page=${page}&per_page=10`); //Realizar la busqueda mediante la API de Github y asignar paginacion por cantidad de proyectos (por cada 10 proyectos existe una nueva pagina)
      const repos = await resultRepos.json(); //Convertir los resultados en un objeto JSON

      if (repos.length === 0) { //Validar la longitud de repositorios
        setHasMore(false); //Entonces ya no existen mas repositorios para mostrar
        return;
      }

      setReposData((prevRepos) => [...prevRepos, ...repos]); //Agregar los repositorios al estado actual existente

      // Incrementa el número de página para la próxima llamada
      setPage((prevPage) => prevPage + 1); //Incrementar la paginacion
    } catch (error) { //Atrapar el error (el manejo de error tambien fue validado previamente para mostrar un componente de error en especifico)
      console.error("Error fetching repositories:", error); //Entonces existe un error 
      setHasMore(false); //Desactiva el scroll infinito en caso de error
    }
  };

  // Cada vez que la URL cambia se ejecuta el useEffect para asignar paginacion y realizar la busqueda de nuevos repositorios
  useEffect(() => {
    if (!repourl) return; // Verifica que exista una URL, en caso contrario no realiza la busqueda
    setReposData([]); // Limpia los repositorios al cambiar de URL
    setPage(1); // Reinicia la paginación
    setHasMore(true); // Activar el scroll infinito
    fetchRepos(); // Carga los primeros repositorios
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
            <b>Yay! You have seen it all</b>
          </p>
        }
        pullDownToRefreshThreshold={5}
      >
        <ul>
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
              <hr></hr>
            </div>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default Repos;
