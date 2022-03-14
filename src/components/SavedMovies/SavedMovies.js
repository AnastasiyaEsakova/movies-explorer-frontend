import React from "react";
import './SavedMovies.css';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { config } from '../../utils/constants'

function SavedMovies() {
  const isLoading = false
  let loader
  if (isLoading) loader = <Preloader />

  const savedMoviesList = config.filter(item => item.owner === 0)
  return (
    <div className="movies">
     <Header>
       <Navigation type="savedMovies" />
     </Header>
     <SearchForm />
     {loader}
     <MoviesCardList type="savedMovies" list={savedMoviesList} />
    </div>

  );
}

export default SavedMovies;
