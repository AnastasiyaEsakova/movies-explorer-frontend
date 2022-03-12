import React from "react";
import './MoviesCard.css'

function MoviesCard() {
  return (
    <div className="movies-card">
     <div className="movies-card__container">
        <div className="movies-card__image"></div>
        <div className="movies-card__info">
          <div className="movies-card__description">
            <p className="movies-card__title">33 слова о дизайне</p>
            <button className="movies-card__like movies-card__like_active"></button>
          </div>
          <p className="movies-card__time">1ч 47м</p>
        </div>
     </div>
    </div>

  );
}

export default MoviesCard;
