import "./MainHeader.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import MobileMenu from '../MobileMenu/MobileMenu';

function MainHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState("");
  const handleMobileMenuOpenClick = () => setIsMobileMenuOpen("active");
  const handleMobileMenuCloseClick = () => setIsMobileMenuOpen("");

  return (
    <header className="main-header">
      <Link to="/" className="main-header__logo"></Link>
      <nav className="main-header__navigation">
        <ul className="main-header__list">
          <li className="main-header__item">
            <Link to="/movies" className="main-header__link main-header__link_active">
              Фильмы
            </Link>
          </li>
          <li className="main-header__item">
            <Link to="/saved-movies" className="main-header__link">
              Сохранённые фильмы
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="/profile" className="main-header__profile">
        Аккаунт
      </Link>
      <button
        className="main-header__mobile-menu"
        onClick={handleMobileMenuOpenClick}
      ></button>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        isClose={handleMobileMenuCloseClick}
      ></MobileMenu>
    </header>
  );
}

export default MainHeader;
