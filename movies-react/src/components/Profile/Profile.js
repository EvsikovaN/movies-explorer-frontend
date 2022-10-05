import "./Profile.css";
import { useState } from "react";
import MainHeader from "../Header/MainHeader/MainHeader";

function Profile() {
  const [isEditInput, setIsEditInput] = useState(true);
  const toggleInput = (e) => {
    e.preventDefault();
    setIsEditInput((state) => !state);
  };

  return (
    <>
      <main>
        <MainHeader />
        <section className="profile">
          <h1 className="profile__title">
            Привет, <span className="profile__name">Виталий!</span>
          </h1>
          <form className="profile__form">
            <section className="profile__form-section">
              <span className="profile__label">Имя</span>
              <input
                type="text"
                className="profile__input"
                name="name"
                minLength="{2}"
                maxLength="{30}"
                required="{true}"
                placeholder="Имя"
                {...(!isEditInput ? {} : { disabled: true })}
              />
            </section>
            <section className="profile__form-section">
              <span className="profile__label">E-mail</span>
              <input
                type="email"
                className="profile__input"
                name="email"
                required="{true}"
                placeholder="pochta@yandex.ru"
                {...(!isEditInput ? {} : { disabled: true })}
              />
            </section>
          </form>

          {isEditInput ? (
            <ul className="profile__navigation">
              <li className="profile__item">
                <button className="profile__edit" onClick={toggleInput}>
                  Редактировать
                </button>
              </li>
              <li className="profile__item">
                <button className="profile__logout">Выйти из аккаунта</button>
              </li>
            </ul>
          ) : (
            <button
              type="submit"
              className="profile__save"
              onClick={toggleInput}
            >
              Сохранить
            </button>
          )}
        </section>
      </main>
    </>
  );
}

export default Profile;
