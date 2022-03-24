import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard ";
import { useFixLoadMovies } from "../../hooks/useFixLoadMovies";
import './MoviesCardList.css'

function MoviesCardList(props) {
  const [newMovies, setNewMovies] = React.useState([]);
  const [counter, setCounter] = React.useState(null);
  const { handleLoad, checkScreenWidth, moviesNumber, moviesNumberMore } = useFixLoadMovies();

  React.useEffect(() => {
    const handleResize = (e) => {
      setCounter(null)
      checkScreenWidth(e.target.innerWidth)
    }

    checkScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (!counter) setCounter(moviesNumber)
    const list = handleLoad(props.list, counter);
    setNewMovies(list)
   }, [props.list, moviesNumber, counter]);


  const handleLoadMoreMovies = () => {
    setCounter(counter + moviesNumberMore)
  }


  return (
    <section className="movie-card-list">
      <div className="movie-card-list__container">
        { newMovies.map((movie) => {
          return (
            <MoviesCard type={props.type} movie={movie} key={movie.nameRU} handleMoviesLike={props.handleMoviesLike}/>
          )
        })}
      </div>
      { (props.list.length === newMovies.length ) ?  null : <button className="movie-card-list__button" onClick={handleLoadMoreMovies}>Ещё</button>}
    </section>

  );
}

export default MoviesCardList;
