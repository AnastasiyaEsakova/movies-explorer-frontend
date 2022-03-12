import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import './App.css'


function App() {
  return (
    <div className="page">
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
        </Route>
        <Route path="/signin"></Route>
        <Route path="/signup"></Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
