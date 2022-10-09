import "./Register.css";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../utils/formValidation";

function Register({ onRegister, isErrorRegisterBtn, isRegisterMessage }) {
  const controlInput = useFormWithValidation();
  const { name, email, password } = controlInput.errors;

  const errorClassName = !controlInput.isValid
    ? "register__error register__error_visible"
    : "register__error";

  const errorClassNameBtn = isErrorRegisterBtn
    ? "register__error register__error_visible"
    : "register__error";

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = controlInput.values;
    onRegister(name, email, password);
    controlInput.resetForm();
  };

  return (
    <main>
      <section className="register">
        <header className="register__header">
          <Link to="/" className="register__logo"></Link>
          <h2 className="register__title">Добро пожаловать!</h2>
        </header>
        <form
          className="register__form"
          action="#"
          onSubmit={handleSubmit}
          noValidate
        >
          <section className="register__form-section">
            <span className="register__label">Имя</span>
            <input
              className="register__input register__input_type_name"
              type="text"
              name="name"
              minLength="2"
              maxLength="40"
              placeholder="Имя"
              pattern="[A-Za-zА-Яа-яЁё\s-]+"
              onChange={controlInput.handleChange}
              value={controlInput?.values?.name || ""}
              required
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
              maxLength="40"
              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
              onChange={controlInput.handleChange}
              value={controlInput?.values?.email || ""}
              required
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
              maxLength="40"
              onChange={controlInput.handleChange}
              value={controlInput?.values?.password || ""}
              required
            />
            <span className={errorClassName}>{password}</span>
          </section>
          <span className={errorClassNameBtn}>{isRegisterMessage}</span>
          <button type="submit" className="register__save" disabled={!controlInput.isValid}>
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
