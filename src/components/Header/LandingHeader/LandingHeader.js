import "./LandingHeader.css";
import { Link } from "react-router-dom";

function LandingHeader() {
  return (
    <header className="header">
      <Link to="/" className="header__logo"></Link>
      <nav className="header__navigation">
        <ul className="header__list">
          <li className="header__item">
            <Link to="/signup" className="header__register">
              Регистрация
            </Link>
          </li>
          <li className="header__item">
            <Link to="/signin" className="header__auth">
              Войти
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default LandingHeader;
