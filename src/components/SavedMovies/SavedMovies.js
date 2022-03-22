import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './SavedMovies.css';

function SavedMovies(props) {
  const isLoading = false

  return (
    <div className="movies">
     <Header>
       <Navigation type="savedMovies" loggedIn={props.loggedIn}/>
     </Header>
     <SearchForm />
     {isLoading ? <Preloader /> : <MoviesCardList type="savedMovies" list={props.movies} /> }
    </div>

  );
}

export default SavedMovies;
