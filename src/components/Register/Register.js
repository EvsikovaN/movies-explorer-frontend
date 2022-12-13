import "./Register.css";
import { Link } from "react-router-dom";
import {
  EMAIL_VALID_PATTERN,
  USER_NAME_VALID_PATTERN,
} from "../../utils/constants";
import { useFormWithValidation } from "../../utils/formValidation";

function Register({ handleRegister, isRegisterMessage, isRegisterError }) {
  const validateInput = useFormWithValidation();
  
  const { name, email, password } = validateInput.errors;

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = validateInput.values;

    handleRegister(name, email, password);

    validateInput.resetForm();
  };

  const errorClassName = validateInput.isValid
    ? "register__error"
    : "register__error register__error_hidden";

  const errorClassNameBtn = !isRegisterError
    ? "register__error"
    : "register__error register__error_hidden";

  return (
    <main>
      <section className="register">
        <header className="register__header">
          <Link to="/" className="register__logo"></Link>
          <h2 className="register__title">Добро пожаловать!</h2>
        </header>
        <form
          action="#"
          className="register__form"
          onSubmit={handleSubmit}
          noValidate
        >
          <section className="register__form-section">
            <span className="register__label">Имя</span>
            <input
              className="register__input register__input_type_name"
              type="text"
              name="name"
              placeholder="Имя"
              minLength="2"
              maxLength="30"
              required
              pattern={USER_NAME_VALID_PATTERN}
              onChange={validateInput.handleChange}
              value={validateInput?.values?.name || ""}
            />
            <span className={errorClassName}>{name}</span>
          </section>

          <section className="register__form-section">
            <span className="register__label">E-mail</span>
            <input
              className="register__input register__input_type_email"
              type="email"
              name="email"
              placeholder="Email"
              minLength="5"
              maxLength="30"
              required
              pattern={EMAIL_VALID_PATTERN}
              onChange={validateInput.handleChange}
              value={validateInput?.values?.email || ""}
            />
            <span className={errorClassName}>{email}</span>
          </section>

          <section className="register__form-section">
            <span className="register__label">Пароль</span>
            <input
              className="register__input popup__input_type_password"
              type="password"
              name="password"
              placeholder="Пароль"
              minLength="5"
              maxLength="30"
              required
              onChange={validateInput.handleChange}
              value={validateInput?.values?.password || ""}
            />
            <span className={errorClassName}>{password}</span>
          </section>

          <span className={errorClassNameBtn}>{isRegisterMessage}</span>

          <button type="submit" className="register__save" disabled={!validateInput.isValid}>
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
