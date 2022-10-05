import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <main>
      <section className="register">
        <header className="register__header">
          <Link to="/" className="register__logo"></Link>
          <h2 className="register__title">Добро пожаловать!</h2>
        </header>
        <form className="register__form" action="#" method="post">
          <section className="register__form-section">
            <span className="register__label">Имя</span>
            <input
              className="register__input register__input_type_name"
              type="text"
              name="name"
              minLength="2"
              maxLength="40"
              placeholder="Имя"
              required
            />
            <span className="register__error"></span>
          </section>
          <section className="register__form-section">
            <span className="register__label">E-mail</span>
            <input
              className="register__input register__input_type_email"
              type="email"
              name="email"
              placeholder="Email"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="register__error"></span>
          </section>
          <section className="register__form-section">
            <span className="register__label">Пароль</span>
            <input
              className="register__input popup__input_type_password"
              type="password"
              name="password"
              placeholder="Пароль"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="register__error">Что-то пошло не так...</span>
          </section>
          <button type="submit" className="register__save">
            Зарегистрироваться
          </button>
          <div className="register__question">
            <p className="register__question-text">
              Уже зарегистрированы?&nbsp;
            </p>
            <Link to="/signin" className="register__question-link">
              Войти
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Register;
