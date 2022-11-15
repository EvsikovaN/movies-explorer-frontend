import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({
  name,
  duration,
  thumbnail,
  trailerLink,
  savedMovies,
  onSave,
  onDelete,
  movie,
  allSavedMovies,
}) {
  const location = useLocation();
  let hours = Math.floor(duration / 60);
  let minutes = Math.floor(duration - hours * 60);
  const isSaved = savedMovies.some((m) => m.movieId === movie.id);
  const isAllSaved = allSavedMovies.some((m) => m.movieId === movie.id);

  let buttonClassName =
    isSaved || isAllSaved
      ? "movies-card__button movies-card__button_save"
      : "movies-card__button";

  const handleSaveClick = () => {
    if (isSaved) {
      onDelete(savedMovies.filter((m) => m.movieId === movie.id)[0]);
    } else {
      onSave(movie);
    }
  };

  const handleDeleteMovie = () => onDelete(movie);

  return (
    <div className="movie-card__item">
      <a
        href={trailerLink}
        className="movie-card__trailer"
        target="_blank"
        rel="noreferrer"
      >
        <img src={thumbnail} alt={name} className="movie-card__image" />
      </a>
      <div className="movie-card__info">
        <h3 className="movie-card__title">{name}</h3>
        <div className="movie-card__time">
          {hours}ч{minutes}м
        </div>
        {location.pathname === "/movies" && (
          <button
            className={buttonClassName}
            type="button"
            onClick={handleSaveClick}
          ></button>
        )}
        {location.pathname === "/saved-movies" && (
          <button
            className="movies-card__button movies-card__button_delete"
            type="button"
            onClick={handleDeleteMovie}
          ></button>
        )}
      </div>
    </div>
  );
}

export default MoviesCard;
