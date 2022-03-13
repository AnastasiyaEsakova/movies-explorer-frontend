import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'

function Navigation(props) {
  const moviesClass = `navigation__link navigation__link_type_movies ${props.movies ? 'navigation__link_type_checked' : ''}`
  const sevedMoviesClass = `navigation__link navigation__link_type_movies ${props.savedMovies ? 'navigation__link_type_checked' : ''}`

  return (
    <div className="navigation">
      { props.isMainScreen ?
        <nav className="navigation__container">
          <Link to="/signup" className="navigation__link">Регистрация</Link>
          <button className="navigation__button">
            <Link to="/signin" className="navigation__button-link navigation__button-link_theme_green">Войти</Link>
          </button>
        </nav> :
         <nav className="navigation__container">
         <Link to="/movies" className={moviesClass} >Фильмы</Link>
         <Link to="/saved-movies" className={sevedMoviesClass}>Сохранённые фильмы</Link>
         <button className="navigation__button">
           <Link to="/profile" className="navigation__button-link navigation__button-link_theme_gray">Аккаунт</Link>
         </button>
       </nav>
      }
    </div>

  );
}

export default Navigation;
