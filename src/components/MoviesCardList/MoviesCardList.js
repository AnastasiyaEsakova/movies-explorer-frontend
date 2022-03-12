import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard ";

function MoviesCardList() {
  return (
    <section className="movie-card-list">
      <div className="movie-card-list__container">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <button className="movie-card-list__button">Ещё</button>
    </section>

  );
}

export default MoviesCardList;
