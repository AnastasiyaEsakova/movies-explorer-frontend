import React from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  const isLoading = false
  let loader
  if (isLoading) loader = <Preloader />
  return (
    <div className="movies">
     <Header>
       <Navigation savedMovies />
     </Header>
     <SearchForm />
     {loader}
     <MoviesCardList />
    </div>

  );
}

export default SavedMovies;
