import "./MoviesCard.css";

function MoviesCard({ name, duration, thumbnail, isSaved }) {
  const buttonClassName = `movies-card__button ${isSaved ? 'movies-card__button_saved' : ''}`;

  return (
    <div className="movie-card__item">
      <img src={thumbnail} alt={name} className="movie-card__image" />
      <div className="movie-card__info">
        <h3 className="movie-card__title">{name}</h3>
        <div className="movie-card__time">{duration}</div>
        <button className={buttonClassName} type="button"></button>
      </div>
    </div>
  );
}

export default MoviesCard;
