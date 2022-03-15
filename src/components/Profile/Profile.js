import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import './Profile.css'

function Profile() {
  const [isEdit, setisEdit] = React.useState(false);
  const [name, setName] = React.useState("Виталий");
  const [email, setEmail] = React.useState("pochta@yandex.ru");

  const handleClickEditButton = () => {
    setisEdit(true)
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const button = !isEdit ?
    <div className="profile__button-container">
      <button className="profile__button profile__button_type_edit" onClick={handleClickEditButton}>Редактировать</button>
      <button className="profile__button profile__button_type_signout">Выйти из аккаунта</button>
    </div> :
    <div className="profile__button-container profile__button-container_type_edit">
      <button className="profile__button profile__button_type_save">Сохранить</button>
    </div>

  return (
    <div className="profile">
      <Header>
       <Navigation />
     </Header>
      <div className="profile__container">
        <h2 className="profile__title">Привет, Виталий</h2>
        <label className="profile__label">
          Имя
          <input
            type="text"
            className="profile__input"
            value={name || ''}
            onChange={handleChangeName}
            disabled={!isEdit}
          />
        </label>
        <label className="profile__label">
          E-mail
          <input
            type="email"
            className="profile__input"
            value={email || ''}
            onChange={handleChangeEmail}
            disabled={!isEdit}
          />
        </label>
        {button}
      </div>
    </div>

  );
}

export default Profile;
