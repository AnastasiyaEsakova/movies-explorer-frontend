import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import auth from "../../utils/Auth";
import { useFixLoadMovies } from "../../hooks/useFixLoadMovies";

import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import './App.css'


function App() {
  const history = useHistory();
  const { filterMovies, findSaveMovie } = useFixLoadMovies();

  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [error, setError] = React.useState('')

  const ls = window.localStorage

//изменение профиля
function handleUpdateUser(userInfo) {
  mainApi.setProfileInfo(userInfo)
    .then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => {
      setError(err)
        const timerId = setTimeout(() => {
          setError(null)
          clearTimeout(timerId);
        }, 3000);
    });
}

function filterMoviesList (nameList) {
  const mainList = JSON.parse(ls.getItem(`${nameList}`))
  try {
    const list = filterMovies(mainList, nameList);
    findSaveMovie(list, savedMovies, currentUser.data._id);
    if (nameList === 'movies') setMovies(list);
    else setSavedMovies(list);
    if (list.length === 0) setError('Ничего не найдено')
  } catch (err) {
    setError(err.messsage)
  }

}

// запросы для фильмов
function handleSearchMovies (type) {
  setError(null)
  if (ls.getItem("movies")) {
    filterMoviesList(type)
    return
  }
  setIsLoading(true)
  moviesApi.getMovies()
    .then((res) => {
      ls.setItem("movies", JSON.stringify(res))
      filterMoviesList(type)
    })
    .catch((err) => {
      setError(`Во время запроса произошла ошибка. Возможно, проблема с соединением или
      сервер недоступен. Подождите немного и попробуйте ещё раз`)
    })
    .finally(() => {
      setIsLoading(false)
    })
}

function handleSearchSavedMovies (type) {
  setError(null)
  setIsLoading(true)
  try {
    filterMoviesList(type)
  } catch (err) {
    setError(err.message)
  } finally {
    setIsLoading(false)
  }
}

const handleMoviesLike = (movie) => {
  const isSaved = movie?.owner === currentUser.data._id;
  if (isSaved) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        movie.owner = null
        setSavedMovies((prevMovies) =>
          prevMovies.filter((m) => (m._id !== movie._id))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    mainApi.saveMovie(movie)
      .then((newMovie) => {
        movie.owner = currentUser.data._id
        movie._id = newMovie._id;
        const arr = savedMovies.map(i => i)
        arr.push(newMovie)
        setSavedMovies(arr)
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// авторизация
  function handleRegisterSubmit(password, email, name) {
    auth.register(password, email, name)
      .then((res) => {
        if (res.data) {
          history.push("/signin");
        }
      })
      .catch((err) => {
        setError(err)
        const timerId = setTimeout(() => {
          setError(null)
          clearTimeout(timerId);
        }, 3000);
      });
  }

  function handleLoginSubmit(password, email) {
    auth
      .authorize(password, email)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true)
          history.push("/movies");
        }
      })
      .catch((err) => {
        setError(err)
        const timerId = setTimeout(() => {
          setError(null)
          clearTimeout(timerId);
        }, 3000);
      });
  }

  function signOut() {
    auth.signout()
      .then(() => {
        history.push("/signin");
        setLoggedIn(false);
        localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
      })
  }

// получение данных при первом открытии страницы
function getContent () {
  if (localStorage.getItem("token")) {
    setLoggedIn(true);
    history.push("/movies");
    Promise.all([mainApi.getSavedMovies(), mainApi.getProfileInfo()])
    .then((res) => {
      setSavedMovies(res[0]);
      setCurrentUser(res[1]);
      ls.setItem("savedMovies", JSON.stringify(res[0]))
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

React.useEffect(() => {
  getContent();
}, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            movies={movies}
            handleMoviesLike={handleMoviesLike}
            error={error}
            isLoading={isLoading}
            handleSearchMovies={handleSearchMovies}
            component={Movies}
          >
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            movies={savedMovies}
            handleMoviesLike={handleMoviesLike}
            error={error}
            isLoading={isLoading}
            handleSearchMovies={handleSearchSavedMovies}
            component={SavedMovies}
          >
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute
           path="/profile"
           handleUpdateUser={handleUpdateUser}
           signOut={signOut}
           loggedIn={loggedIn}
           error={error}
           component={Profile}
          />
          <Route path="/signin">
            <Login handleLoginSubmit={handleLoginSubmit}  error={error}/>
          </Route>
          <Route path="/signup">
            <Register handleRegisterSubmit={handleRegisterSubmit}  error={error}/>
          </Route>
          <Route exact path="/">
            <Main loggedIn={loggedIn} />
            <Footer />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
