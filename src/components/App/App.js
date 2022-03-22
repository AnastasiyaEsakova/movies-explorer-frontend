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
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [register, setRegister] = React.useState(false);
  const [error, setError] = React.useState('')

  const history = useHistory();
  const { filterMovies } = useFixLoadMovies();

//изменение профиля
function handleUpdateUser(userInfo) {
  mainApi.setProfileInfo(userInfo)
    .then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => {
      console.log(err);
    });
}


// запросы для фильмов
function handleSearchMovies (text, isShort) {
  setIsLoading(true)
  moviesApi.getMovies()
    .then((res) => {
      const list = filterMovies(res, text, isShort);
      setMovies(list);
    })
    .catch((err) => {
      // setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      setError(err.message)
    })
    .finally(() => {
      setIsLoading(false)
    })
}
// function loadMoreMovies () {

// }

function handleMoviesLike(movie) {
  const isSaved = movie?.owner.some((i) => i === currentUser.data._id);
  if (isSaved) {
    mainApi.deleteMovie(movie._id)
      .then((res) => {
        // setCards((prevCards) =>
        //   prevCards.map((c) => (c._id === card._id ? newCard : c))
        // );
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    mainApi.saveMovie(movie)
      .then((res) => {
        setMovies((prevMovies) =>
          prevMovies.map((m) => (m._id === movie._id ? newMovie : c))
        );
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
          handleInfoTooltipOpen(true);
          history.push("/sign-in");
        }
      })
      .catch((err) => {
        handleInfoTooltipOpen(false);
        console.log(err.message);
      });
  }
  function handleLoginSubmit(password, email) {
    auth
      .authorize(password, email)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true)
          history.push("/");
        }
      })
      .catch((err) => {
        handleInfoTooltipOpen(false);
        console.log(err);
      });
  }

  function signOut() {
    history.push("/signin");
    setLoggedIn(false);
    localStorage.removeItem("token");
  }

  React.useEffect(() => {
    function handleTokenCheck() {
      if (localStorage.getItem("token")) {
        mainApi.getProfileInfo()
          .then((res) => {
            if (res) {
              setLoggedIn(true);
              // setCurrentUser(res);
              history.push("/");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }

    handleTokenCheck();
    getContent();
  }, [loggedIn, history]);


// получение данных при первом открытии страницы
function getContent () {
  Promise.all([mainApi.getSavedMovies(), mainApi.getProfileInfo()])
    .then((res) => {
      // setMovies(res[0]);
      setSavedMovies(res[0]);
      setCurrentUser(res[1]);
    })
    .catch((err) => {
      console.log(err);
    });
}

React.useEffect(() => {
  getContent();
}, []);

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
            component={SavedMovies}
          >
            <Footer />
          </ProtectedRoute>
          {/* <Route path="/movies">
            <Movies movies={movies} handleMoviesLike={handleMoviesLike}/>
            <Footer />
          </Route> */}
          {/* <Route path="/saved-movies">
            <SavedMovies movies={savedMovies} />
            <Footer />
          </Route> */}
          <Route path="/profile">
            <Profile handleUpdateUser={handleUpdateUser} signOut={signOut} loggedIn={loggedIn}/>
          </Route>
          <Route path="/signin">
            <Login handleLoginSubmit={handleLoginSubmit} />
          </Route>
          <Route path="/signup">
            <Register handleRegisterSubmit={handleRegisterSubmit} />
          </Route>
          {/* <ProtectedRoute
            path="/"
            component={Main}
            loggedIn={loggedIn}
          >
            <Footer />
          </ProtectedRoute> */}
          <Route path="/">
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
