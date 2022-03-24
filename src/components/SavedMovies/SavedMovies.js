import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './SavedMovies.css';

function SavedMovies(props) {

  return (
    <div className="saved-movies">
      <Header>
        <Navigation type="savedMovies" loggedIn={props.loggedIn}/>
      </Header>
      <SearchForm type="savedMovies" handleSearchMovies={props.handleSearchMovies}/>
      {props.error ? <p className="saved-movies__text">{props.error}</p> : null}
      {props.isLoading ? <Preloader /> : <MoviesCardList type="savedMovies" list={props.movies}  handleMoviesLike={props.handleMoviesLike} /> }
    </div>

  );
}

export default SavedMovies;
