import React from "react";
import './SearchForm.css';

function SearchForm(props) {
  const [movie, setMovie] = React.useState("");
  const [isShort, setIsShort] = React.useState(false);

  const handleChangeMovie = (e) => {
    setMovie(e.target.value)
  }
  const handleChangeCheckbox = () => {
    setIsShort(!isShort);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSearchMovies(movie, isShort)
    setMovie('')
    setIsShort(false)
  }

  return (
    <div className="search-form">
      <div className="search-form__container">
      <form className="search-form__box" onSubmit={handleSubmit}>
        <div className="search-form__img-search"></div>
        <input type="text" className="search-form__input" placeholder="Фильм" required value={movie || ''} onChange={handleChangeMovie}/>
        <button className="search-form__button">
          <div className="search-form__button-search"></div>
        </button>
        <div className="search-form__line"></div>
        <label className="search-form__checkbox-container">
          <input className="search-form__checkbox" type="checkbox" value={isShort || false} onChange={handleChangeCheckbox}/>
          <span className="search-form__span"></span>
          Короткометражки
        </label>
      </form>
      <label className="search-form__checkbox-container search-form__checkbox-container_type_mobile">
          <input className="search-form__checkbox" type="checkbox" value={isShort || false} onChange={handleChangeCheckbox}/>
          <span className="search-form__span"></span>
          Короткометражки
        </label>
      </div>
    </div>


  );
}

export default SearchForm;
