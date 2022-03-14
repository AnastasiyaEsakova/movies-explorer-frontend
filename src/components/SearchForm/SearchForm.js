import React from "react";
import './SearchForm.css';

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__container">
      <form className="search-form__box">
        <div className="search-form__img-search"></div>
        <input type="text" className="search-form__input" placeholder="Фильм" />
        <button className="search-form__button">
          <div className="search-form__button-search"></div>
        </button>
        <div className="search-form__line"></div>
        <label className="search-form__checkbox-container">
          <input className="search-form__checkbox" type="checkbox"/>
          <span className="search-form__span"></span>
          Короткометражки
        </label>
      </form>
      <label className="search-form__checkbox-container search-form__checkbox-container_type_mobile">
          <input className="search-form__checkbox" type="checkbox"/>
          <span className="search-form__span"></span>
          Короткометражки
        </label>
      </div>
    </div>


  );
}

export default SearchForm;
