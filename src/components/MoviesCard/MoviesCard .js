import React from "react";
import './MoviesCard.css'

function MoviesCard(props) {

  return (
    <div className="movies-card">
     <div className="movies-card__container">
        <img className="movies-card__image" src={props.movie.image} />
        <div className="movies-card__info">
          <div className="movies-card__description">
            <p className="movies-card__title">{props.movie.nameRU}</p>
            <button className={`movies-card__like ${props.type === 'savedMovies' ? 'movies-card__like_type_own' : ''} ${props.movie.owner === 0 ? 'movies-card__like_active' : ''}`}></button>
          </div>
          <p className="movies-card__time">{props.movie.duration}</p>
        </div>
     </div>
    </div>

  );
}

export default MoviesCard;
