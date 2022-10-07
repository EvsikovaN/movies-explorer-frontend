import "./Portfolio.css";

function Portfolio() {
  return (
    <section class="portfolio">
      <div class="container">
        <p class="portfolio__title">Портфолио</p>
        <ul class="portfolio__list">
          <li class="portfolio__item">
            <a href="https://github.com/EvsikovaN/how-to-learn" target='_blank' rel='noreferrer' class="portfolio__link">
              Статичный сайт
            </a>
          </li>
          <li class="portfolio__item">
            <a href="https://github.com/EvsikovaN/russian-travel" target='_blank' rel='noreferrer' class="portfolio__link">
              Адаптивный сайт
            </a>
          </li>
          <li class="portfolio__item">
            <a href="https://github.com/EvsikovaN/react-mesto-api-full" target='_blank' rel='noreferrer' class="portfolio__link">
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
