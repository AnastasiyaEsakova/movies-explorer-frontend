import React from "react";
import './Navigation.css'

function Navigation(props) {
  const moviesClass = `navigation__link navigation__link_type_movies ${props.movies ? 'navigation__link_type_checked' : ''}`
  const sevedMoviesClass = `navigation__link navigation__link_type_movies ${props.savedMovies ? 'navigation__link_type_checked' : ''}`

  return (
    <div className="navigation">
      { props.isMainScreen ?
        <nav className="navigation__container">
          <a href="#" className="navigation__link">Регистрация</a>
          <button className="navigation__button">
            <a href="#" className="navigation__button-link navigation__button-link_theme_green">Войти</a>
          </button>
        </nav> :
         <nav className="navigation__container">
          <a href="#" className={moviesClass} >Фильмы</a>
          <a href="#" className={sevedMoviesClass}>Сохранённые фильмы</a>
          <button className="navigation__button">
            <a href="#" className="navigation__button-link navigation__button-link_theme_gray">Аккаунт</a>
          </button>
        </nav>
      }
    </div>

  );
}

export default Navigation;
