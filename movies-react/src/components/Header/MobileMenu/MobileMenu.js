import { Link } from 'react-router-dom';
import './MobileMenu.css';

function MobileMenu({ isOpen, isClose }) {
  return (
    <div className={`mobile-menu ${isOpen && 'active'}`}>
      <div className='mobile-menu__container'>
        <button
          className='mobile-menu__close-icon'
          onClick={isClose}
          type='button'
        />
        <nav className='mobile-menu__link-wrapper'>
          <Link to='/' className='mobile-menu__link'>
            Главная
          </Link>
          <Link to='/movies' className='mobile-menu__link'>
            Фильмы
          </Link>
          <Link to='/saved-movies' className='mobile-menu__link'>
            Сохраненные фильмы
          </Link>
        </nav>
        <Link to='/profile' className='mobile-menu__btn-profile'>
          Аккаунт
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;