import React from "react";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import './AuthForm.css';

function AuthForm(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { handleChange, errors, isValid, resetForm, setIsValid} = useFormAndValidation()

  React.useEffect(() => {
    setIsValid(true);
  }, []);

  const handleChangeName = (e) => {
    setName(e.target.value);
    handleChange(e);
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    handleChange(e);
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    handleChange(e);
  }


  return (
    <div className="auth">
      <form
        className="auth__form"
        // onSubmit={props.handleSubmit}
        name={props.name}
      >
        <label className={`auth__title ${props.title.length === 3 ? '' : 'auth__title_disable'}`} htmlFor="name">{props.title[2]}</label>
        <input
          id="name"
          className={`auth__input ${props.title.length === 3 ? '' : 'auth__input_disable'}`}
          name="name"
          type="text"
          onChange={handleChangeName}
          value={name || ""}
          minLength="2"
          required
        />
        <span
        className={`auth__error ${
          errors.name ? "auth__error_visible" : "" }`}
        id="name-error"
      >
        {errors.name}
      </span>
        <label className="auth__title" htmlFor="email">{props.title[0]}</label>
        <input
          id="email"
          className="auth__input"
          name="email"
          type="email"
          onChange={handleChangeEmail}
          value={email || ""}
          minLength="2"
          required
        />
        <span
        className={`auth__error ${
          errors.email ? "auth__error_visible" : "" }`}
        id="email-error"
      >
        {errors.email}
      </span>
        <label className="auth__title" htmlFor="password">{props.title[1]}</label>
        <input
          id="password"
          className="auth__input"
          name="password"
          type="password"
          onChange={handleChangePassword}
          value={password || ""}
          minLength="7"
          required
        />
        <span
        className={`auth__error ${
          errors.password ? "auth__error_visible" : "" }`}
        id="password-error"
      >
        {errors.password}
      </span>
        <button className="auth__button">{props.buttonText}</button>
        {props.children}
      </form>
    </div>
  );
}

export default AuthForm;
