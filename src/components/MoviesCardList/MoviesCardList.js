import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard ";
import { useFixLoadMovies } from "../../hooks/useFixLoadMovies";
import './MoviesCardList.css'

function MoviesCardList(props) {
  const [newMovies, setNewMovies] = React.useState([]);
  // const [screenWidth, setScreenWidth] = React.useState(null);
  const [moviesNumber, setMoviesNumber] = React.useState(null);
  const [moviesNumberMore, setMoviesNumberMore] = React.useState(null);
  const { handleLoad, checkScreenWidth, checkMoreLoad } = useFixLoadMovies();

  React.useEffect(() => {
    const handleResize = (e) => {
      setMoviesNumber(checkScreenWidth(e.target.innerWidth))
    }

    setMoviesNumber(checkScreenWidth(window.innerWidth))
    setMoviesNumberMore(checkMoreLoad(moviesNumber))
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    const list = handleLoad(props.list, moviesNumber);
    setNewMovies(list)
  }, [props.list, moviesNumber]);

  const handleLoadMoreMovies = () => {
    setNewMovies(handleLoad(props.list, moviesNumber + moviesNumberMore))
  }


  return (
    <section className="movie-card-list">
      <div className="movie-card-list__container">
        { newMovies.map((movie) => {
          return (
            <MoviesCard type={props.type} movie={movie} key={movie.id} handleMoviesLike={props.handleMoviesLike}/>
          )
        })}
      </div>
      { props.type === 'movies' || props.list?.length === newMovies?.length ? <button className="movie-card-list__button" onClick={handleLoadMoreMovies}>Ещё</button> : null }
    </section>

  );
}

export default MoviesCardList;
