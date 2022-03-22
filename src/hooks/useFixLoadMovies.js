// import {useState } from 'react';

export function useFixLoadMovies() {
  // const [ moviesList, setMoviesList ] = useState([]);
  // const [ filterMoviesList, setFilterMoviesList ] = useState([]);

  function checkScreenWidth (num) {
    if (num > 1280) return 12
    else if ( num < 1280 && num > 500) return 8
    else return 5
  }

  function checkMoreLoad (num) {
    if (num === 12) return 3
    else if (num === 8) return 2
    else return 5
  }

  function handleLoad (list, number) {
    const arr = []
    list.forEach((item) => {
      if (list.indexOf(item) < number) arr.push(item)
    })
    return arr
  };

  function filterMovies (list, text, isShort) {
    const arr = []
    const regex = new RegExp(text, 'i');
    list.forEach((movie) => {
      if (isShort) {
        if(regex.test(movie.nameRU) && movie.duration < 40) arr.push(movie)
      } else {
        if(regex.test(movie.nameRU)) arr.push(movie)
      }
    })
    return arr
  };


  return { handleLoad, filterMovies, checkScreenWidth, checkMoreLoad};
}
