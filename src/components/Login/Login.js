import "./Login.css";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/formValidation";

function Login({ onLogin, isLoginMessage, isErrorLoginBtn }) {
  const controlInput = useFormWithValidation();
  const { email, password } = controlInput.errors;
  const errorClassName = !controlInput.isValid
    ? "login__error login__error_visible"
    : "login__error";

  const errorClassNameBtn = isErrorLoginBtn
    ? "login__error login__error_visible"
    : "login__error";

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = controlInput.values;
    onLogin(email, password);
    controlInput.resetForm();
  };
  return (
    <main>
      <section className="login">
        <header className="login__header">
          <Link to="/" className="login__logo"></Link>
          <h2 className="login__title">Рады видеть!</h2>
        </header>
        <form
          className="login__form"
          action="#"
          onSubmit={handleSubmit}
          noValidate
        >
          <section className="login__form-section">
            <span className="login__label">E-mail</span>
            <input
              className="login__input login__input_type_email"
              type="email"
              name="email"
              placeholder="Email"
              minLength="5"
              maxLength="40"
              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
              onChange={controlInput.handleChange}
              value={controlInput?.values?.email || ""}
              required
            />
            <span className={errorClassName}>{email}</span>
          </section>
          <section className="login__form-section">
            <span className="login__label">Пароль</span>
            <input
              className="login__input popup__input_type_password"
              type="password"
              name="password"
              placeholder="Пароль"
              minLength="5"
              maxLength="40"
              onChange={controlInput.handleChange}
              value={controlInput?.values?.password || ""}
              required
            />
            <span className={errorClassName}>{password}</span>
          </section>
          <span className={errorClassNameBtn}>{isLoginMessage}</span>
          <button
            type="submit"
            className="login__save"
            disabled={!controlInput.isValid}
          >
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
