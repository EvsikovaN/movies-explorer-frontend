import "./Login.css";
import { Link } from "react-router-dom";
import { EMAIL_VALID_PATTERN } from "../../utils/constants";
import { useFormWithValidation } from "../../utils/formValidation";

function Login({ handleLogin, isLoginMessage, isLoginError }) {
  const validateInput = useFormWithValidation();

  const { email, password } = validateInput.errors;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = validateInput.values;
    handleLogin(email, password);
    validateInput.resetForm();
  };

  const errorInputClassName = validateInput.isValid
    ? "login__error"
    : "login__error login__error_hidden";

  const errorLoginMessageClassName = !isLoginError
    ? "login__error"
    : "login__error login__error_hidden";

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
              id="email"
              placeholder="Email"
              minLength="5"
              maxLength="30"
              required
              pattern={EMAIL_VALID_PATTERN}
              onChange={validateInput.handleChange}
              value={validateInput?.values?.email || ""}
            />
            <span className={errorInputClassName}>{email}</span>
          </section>
          <section className="login__form-section">
            <span className="login__label">Пароль</span>
            <input
              className="login__input popup__input_type_password"
              type="password"
              name="password"
              id="password"
              placeholder="Пароль"
              minLength="5"
              maxLength="30"
              required
              onChange={validateInput.handleChange}
              value={validateInput?.values?.password || ""}
            />
            <span className={errorInputClassName}>{password}</span>
          </section>
          <span className={errorLoginMessageClassName}>{isLoginMessage}</span>
          <button
            type="submit"
            className="login__save"
            disabled={!validateInput.isValid}
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
