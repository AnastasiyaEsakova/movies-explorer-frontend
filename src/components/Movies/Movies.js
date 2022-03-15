import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { config } from '../../utils/constants'

function Movies() {
  const isLoading = false

  return (
    <div className="movies">
     <Header>
       <Navigation type="movies" isMovieScreen/>
     </Header>
     <SearchForm />
     {isLoading ? <Preloader /> :  <MoviesCardList list={config} type="movies"/> }
    </div>

  );
}

export default Movies;
