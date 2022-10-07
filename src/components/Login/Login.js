import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <main>
      <section className="login">
        <header className="login__header">
          <Link to="/" className="login__logo"></Link>
          <h2 className="login__title">Рады видеть!</h2>
        </header>
        <form className="login__form" action="#" method="post">
          <section className="login__form-section">
            <span className="login__label">E-mail</span>
            <input
              className="login__input login__input_type_email"
              type="email"
              name="email"
              placeholder="Email"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="login__error"></span>
          </section>
          <section className="login__form-section">
            <span className="login__label">Пароль</span>
            <input
              className="login__input popup__input_type_password"
              type="password"
              name="password"
              placeholder="Пароль"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="login__error"></span>
          </section>
          <button type="submit" className="login__save">
            Войти
          </button>
          <div className="login__question">
            <p className="login__question-text">
              Еще не зарегистрированы?&nbsp;
            </p>
            <Link to="/signup" className="login__question-link">
              Регистрация
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
