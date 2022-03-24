import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './Movies.css'

function Movies(props) {

  return (
    <div className="movies">
     <Header>
       <Navigation type="movies" loggedIn={props.loggedIn}/>
     </Header>
     <SearchForm type="movies" handleSearchMovies={props.handleSearchMovies}/>
    {props.error ? <p className="movies__text">{props.error}</p> : null}
    {props.isLoading ? <Preloader /> : <MoviesCardList list={props.movies} type="movies" handleMoviesLike={props.handleMoviesLike}/> }
    </div>

  );
}

export default Movies;
