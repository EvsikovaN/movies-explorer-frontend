import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__info">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__footer">
          <ul className="footer__list">
            <li className="footer__item">
              <a
                href="https://practicum.yandex.ru/"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__item">
              <a href="https://github.com/EvsikovaN" className="footer__link" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
          <p className="footer__date">&copy;&nbsp;{year}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
