import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './Profile.css'

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isEdit, setisEdit] = React.useState(false);
  const [name, setName] = React.useState("Виталий");
  const [email, setEmail] = React.useState("pochta@yandex.ru");

  React.useEffect(() => {
    setName(currentUser.data?.name || '');
    setEmail(currentUser.data?.email || '');
    setisEdit(false)
  }, [currentUser])

  const handleChangeName = (e) => {
    if (e.target.value !== currentUser.data.name) setisEdit(true)
    setName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    if (e.target.value !== currentUser.data.email) setisEdit(true)
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEdit) return
    props.handleUpdateUser({name, email})
  }

  const button = !isEdit ?
    <div className="profile__button-container">
      <button className="profile__button profile__button_type_edit">Редактировать</button>
      <button className="profile__button profile__button_type_signout" onClick={props.signOut}>Выйти из аккаунта</button>
    </div> :
    <div className="profile__button-container profile__button-container_type_edit">
      <button className="profile__button profile__button_type_save">Сохранить</button>
    </div>

  return (
    <div className="profile">
      <Header>
       <Navigation loggedIn={props.loggedIn}/>
     </Header>
      <form className="profile__container" onSubmit={handleSubmit}>
        <h2 className="profile__title">Привет, Виталий</h2>
        <label className="profile__label">
          Имя
          <input
            type="text"
            className="profile__input"
            value={name || ''}
            onChange={handleChangeName}
          />
        </label>
        <label className="profile__label">
          E-mail
          <input
            type="email"
            className="profile__input"
            value={email || ''}
            onChange={handleChangeEmail}
          />
        </label>
        {button}
      </form>
    </div>

  );
}

export default Profile;
