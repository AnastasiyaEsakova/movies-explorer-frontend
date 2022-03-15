import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard ";
import './MoviesCardList.css'

function MoviesCardList(props) {

  return (
    <section className="movie-card-list">
      <div className="movie-card-list__container">
        { props.list.map((item) => {
          return (
            <MoviesCard type={props.type} movie={item} key={item.nameRU} />
          )
        })}
      </div>
      { props.type === 'movies' ? <button className="movie-card-list__button">Ещё</button> : null }
    </section>

  );
}

export default MoviesCardList;
