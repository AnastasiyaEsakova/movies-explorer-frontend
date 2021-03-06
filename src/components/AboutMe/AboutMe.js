import React from "react";
import Portfolio from "../Portfolio/Portfolio";
import './AboutMe.css'

function AboutMe() {
  return (
    <section className="about-me">
      <a name="about-me"></a>
      <div className="about-me__container">
        <h3 className="about-me__title">Студент</h3>

        <div className="about-me__info">
          <div className="about-me__description">
            <h4 className="about-me__description-title">Виталий</h4>
            <p className="about-me__description-post">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__description-text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015
            года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <div className="about-me__description-links">
              <a href="#" className="about-me__description-link" target="_blank">Facebook</a>
              <a href="https://github.com/AnastasiyaEsakova" className="about-me__description-link" target="_blank">Github</a>
            </div>
          </div>
          <div className="about-me__photo"></div>
        </div>
        <Portfolio />
      </div>
    </section>

  );
}

export default AboutMe;
