import React from "react";
import './Portfolio.css'

function Portfolio() {
  return (
    <div className="portfolio">
      <p className="portfolio__links-title">Портфолио</p>
          <ul className="portfolio__list">
            <li className="portfolio__item">
              <a href="#" className="portfolio__link">Статичный сайт</a>
              <div className="portfolio__arrow"></div>
            </li>
            <li className="portfolio__item">
              <a href="#" className="portfolio__link">Адаптивный сайт</a>
              <div className="portfolio__arrow"></div>
            </li>
            <li className="portfolio__item">
              <a href="#" className="portfolio__link">Одностраничное приложение</a>
              <div className="portfolio__arrow"></div>
            </li>
          </ul>
    </div>

  );
}

export default Portfolio;
