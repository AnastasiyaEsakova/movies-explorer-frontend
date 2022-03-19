import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { config } from '../../utils/constants'
import './SavedMovies.css';

function SavedMovies() {
  const isLoading = false

  const savedMoviesList = config.filter(item => item.owner === 0)
  return (
    <div className="movies">
     <Header>
       <Navigation type="savedMovies" isMovieScreen/>
     </Header>
     <SearchForm />
     {isLoading ? <Preloader /> : <MoviesCardList type="savedMovies" list={savedMoviesList} /> }
    </div>

  );
}

export default SavedMovies;
