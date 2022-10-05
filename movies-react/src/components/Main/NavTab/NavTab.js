import './NavTab.css';

function NavTab() {
  return (
    <ul className="navigation">
      <li className="navigation__item">
        <a href="#about" className="navigation__link">
          О проекте
        </a>
      </li>
      <li className="navigation__item">
        <a href="#techs" className="navigation__link">
          Технологии
        </a>
      </li>
      <li className="navigation__item">
        <a href="#student" className="navigation__link">
          Студент
        </a>
      </li>
    </ul>
  );
}

export default NavTab;
