import "./Profile.css";
import MainHeader from "../Header/MainHeader/MainHeader";
import {
  EMAIL_VALID_PATTERN,
  USER_NAME_VALID_PATTERN,
  SUCCESS_MESSAGE_USER_FORM,
} from "../../utils/constants";
import { useState, useContext } from "react";
import { useFormWithValidation } from "../../utils/formValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onUpdateUser, onSignOut, isProfileMessage }) {
  const currentUser = useContext(CurrentUserContext);

  const validateInput = useFormWithValidation();

  const { nameError, emailError } = validateInput.errors;

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email } = validateInput.values;

    if (!name) {
      onUpdateUser(currentUser.name, email);
    } else if (!email) {
      onUpdateUser(name, currentUser.email);
    } else {
      onUpdateUser(name, email);
    }

    setTimeout(() => setIsEditInput((state) => !state), 1000);

    validateInput.resetForm();
  };

  const errorClassName = validateInput.isValid
    ? "profile__error"
    : "profile__error profile__error_hidden";

  const classNameMessageBtn = isProfileMessage
    ? "profile__button-msg"
    : "profile__button-msg profile__button-msg_hidden";

  const [isEditInput, setIsEditInput] = useState(true);

  const toggleInput = (e) => {
    e.preventDefault();

    setIsEditInput((state) => !state);
  };

  let disableCurrentUser =
    (typeof validateInput?.values?.email === "undefined" &&
      currentUser.email === validateInput?.values?.email) ||
    (typeof validateInput?.values?.email === "undefined" &&
      currentUser.name === validateInput?.values?.name);

  return (
    <>
      <MainHeader />
      <main>
        <section className="profile">
          <h1 className="profile__title">Привет, {currentUser.name}</h1>
          <form className="profile__form" onSubmit={handleSubmit} noValidate>
            <section className="profile__form-section">
              <span className="profile__label">Имя</span>
              <input
                className="profile__input"
                type="text"
                name="name"
                placeholder={currentUser.name}
                minLength="2"
                maxLength="30"
                required
                pattern={USER_NAME_VALID_PATTERN}
                onChange={validateInput.handleChange}
                value={validateInput?.values?.name ?? currentUser.name}
                {...(!isEditInput ? {} : { disabled: true })}
              />
            </section>

            <span className={errorClassName}>{nameError}</span>

            <section className="profile__form-section">
              <span className="profile__label">E-mail</span>
              <input
                className="profile__input"
                type="email"
                name="email"
                placeholder={currentUser.email}
                minLength="5"
                maxLength="30"
                required
                pattern={EMAIL_VALID_PATTERN}
                onChange={validateInput.handleChange}
                value={validateInput?.values?.email ?? currentUser.email}
                {...(!isEditInput ? {} : { disabled: true })}
              />
            </section>
            
            <span className={errorClassName}>{emailError}</span>

            {isEditInput ? (
              <ul className="profile__navigation">
                <li className="profile__item">
                  <button className="profile__edit" onClick={toggleInput}>
                    Редактировать
                  </button>
                </li>
                <li className="profile__item">
                  <button className="profile__logout" onClick={onSignOut}>
                    Выйти из аккаунта
                  </button>
                </li>
              </ul>
            ) : (
              <>
                <span className={classNameMessageBtn}>
                  {SUCCESS_MESSAGE_USER_FORM}
                </span>
                <button
                  type="submit"
                  className="profile__save"
                  disabled={disableCurrentUser || !validateInput.isValid}
                >
                  Сохранить
                </button>
              </>
            )}
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;
