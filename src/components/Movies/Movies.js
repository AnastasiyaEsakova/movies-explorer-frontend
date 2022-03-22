import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
  return (
    <div className="movies">
     <Header>
       <Navigation type="movies" loggedIn={props.loggedIn}/>
     </Header>
     <SearchForm handleSearchMovies={props.handleSearchMovies}/>
     {props.isLoading ? <Preloader /> : props.list?.length !==0 ? <MoviesCardList list={props.movies} type="movies" handleMoviesLike={props.handleMoviesLike}/> :
     <p>Ничего не найдено</p> }
     <p>{props.error}</p>
    </div>

  );
}

export default Movies;
