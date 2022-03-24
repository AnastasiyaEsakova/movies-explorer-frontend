import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './MoviesCard.css'

function MoviesCard(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const url = props.type === 'savedMovies' ? `${props.movie.image}` : `https://api.nomoreparties.co${props.movie.image.url}`

  function handleSetLike () {
    props.handleMoviesLike(props.movie)
  }

  let hours = 0
  function convertDuration (num) {
    if (num > 60) {
      hours++
      num = num - 60
      convertDuration(num)
    }
    return num
  }
  let minutes = convertDuration(props.movie.duration)
  const stringDuration = () => {
    if (hours === 0) return`${minutes}м` ;
    else return `${hours}ч ${minutes}м`;

  }

  return (
    <div className="movies-card">
     <div className="movies-card__container">
        <a href={props.movie.trailerLink} target="_blank"><img className="movies-card__image" src={url} alt={props.movie.nameRU}  height="203px"/></a>
        <div className="movies-card__info">
          <div className="movies-card__description">
            <p className="movies-card__title">{props.movie.nameRU}</p>
            <button className={`movies-card__like ${props.type === 'savedMovies' ? 'movies-card__like_type_own' : ''} ${props.movie?.owner === currentUser.data._id ? 'movies-card__like_active' : ''}`} onClick={handleSetLike}></button>
          </div>
          <p className="movies-card__time">{stringDuration()}</p>
        </div>
     </div>
    </div>


  );
}

export default MoviesCard;
