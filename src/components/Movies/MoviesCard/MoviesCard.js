import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({
  movie,
  name,
  duration,
  thumbnail,
  trailerLink,
  onLiked,
  onDelete,
  savedMovies,
  listSavedMovies,
}) {
  const location = useLocation();

  const getMovieDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = Math.floor(duration - hours * 60);

    return `${hours}ч ${minutes}м`;
  }

  const isLiked = savedMovies.some((item) => item.movieId === movie.id);
  // const isAllSaved = listSavedMovies.some((item) => item.movieId === movie.id);

  const handleLike = () => {
    if (isLiked) {
      onDelete(savedMovies.filter((m) => m.movieId === movie.id)[0]);
    } else {
      onLiked(movie);
    }
  };

  const handleDeleteLike = () => onDelete(movie);

  const buttonDeleteLike = "movies-card__button movies-card__button_delete";

  let buttonClassName =
    isLiked 
      ? "movies-card__button movies-card__button_like"
      : "movies-card__button";

  return (
    <div className="movie-card__item">
      <a
        className="movie-card__trailer"
        href={trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img className="movie-card__image" src={thumbnail} alt={name} />
      </a>
      <div className="movie-card__info">
        <h3 className="movie-card__title">{name}</h3>
        <div className="movie-card__time">
          {getMovieDuration(duration)}
        </div>
        {location.pathname === "/movies" && (
          <button
            className={buttonClassName}
            type="button"
            onClick={handleLike}
          ></button>
        )}
        {location.pathname === "/saved-movies" && (
          <button
            className={buttonDeleteLike}
            type="button"
            onClick={handleDeleteLike}
          ></button>
        )}
      </div>
    </div>
  );
}

export default MoviesCard;
