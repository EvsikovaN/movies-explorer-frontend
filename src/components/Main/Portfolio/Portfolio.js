import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <p className="portfolio__title">Портфолио</p>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <a href="https://github.com/EvsikovaN/how-to-learn" target='_blank' rel='noreferrer' className="portfolio__link">
              Статичный сайт
            </a>
          </li>
          <li className="portfolio__item">
            <a href="https://github.com/EvsikovaN/russian-travel" target='_blank' rel='noreferrer' className="portfolio__link">
              Адаптивный сайт
            </a>
          </li>
          <li className="portfolio__item">
            <a href="https://github.com/EvsikovaN/react-mesto-api-full" target='_blank' rel='noreferrer' className="portfolio__link">
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
