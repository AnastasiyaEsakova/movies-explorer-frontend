import React from "react";
import './MoviesCard.css'

function MoviesCard(props) {

  const handleSetLike = (movie) => {
    props.handleMoviesLike(movie)
    //  e.target.classList.toggle('movies-card__like_active')
  }

  return (
    <div className="movies-card">
     <div className="movies-card__container">
        <a href={props.movie.trailerLink} target="_blank"><img className="movies-card__image" src={`https://api.nomoreparties.co${props.movie.image.url}`} alt={props.movie.nameRU}  height="203px"/></a>
        <div className="movies-card__info">
          <div className="movies-card__description">
            <p className="movies-card__title">{props.movie.nameRU}</p>
            <button className={`movies-card__like ${props.type === 'savedMovies' ? 'movies-card__like_type_own' : ''} ${props.movie?.owner ? 'movies-card__like_active' : ''}`} onClick={handleSetLike(props.movie)}></button>
          </div>
          <p className="movies-card__time">{props.movie.duration}</p>
        </div>
     </div>
    </div>


  );
}

export default MoviesCard;
