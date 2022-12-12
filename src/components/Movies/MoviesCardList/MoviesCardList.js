import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  ERROR_MESSAGE_SEARCH_FORM,
  SHORT_MOVIE,
  MOBILE_BREAKPOINT,
  MOVIES_LIST_DESKTOP,
  MOVIES_LIST_MOBILE,
  MOVIES_TO_LOAD_DESKTOP,
  MOVIES_TO_LOAD_MOBILE,
} from "../../../utils/constants";

function MoviesCardList({
  movies,
  savedMovies,
  onLiked,
  onDelete,
  isUnsuccess,
  isNotResults,
  checkedAllMovies,
  checkedSavedMovies,
  listSavedMovies,
}) {
  const location = useLocation();

  const [moviesToLoad, setMoviesToLoad] = useState(0);
  const [displayedMovies, setDisplayedMovies] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMoreButton, setIsMoreButton] = useState(false);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/movies") {
      if (windowWidth <= MOBILE_BREAKPOINT) {
        setDisplayedMovies(MOVIES_LIST_MOBILE);
        setMoviesToLoad(MOVIES_TO_LOAD_MOBILE);
      } else {
        setDisplayedMovies(MOVIES_LIST_DESKTOP);
        setMoviesToLoad(MOVIES_TO_LOAD_DESKTOP);
      }
    }
  }, [windowWidth, location]);

  useEffect(() => {
    if (location.pathname === "/movies") {
      movies.length > displayedMovies
        ? setIsMoreButton(true)
        : setIsMoreButton(false);
    } else {
      setIsMoreButton(false);
    }
  }, [location, movies.length, displayedMovies]);

  const handleShowMoreMovies = () => {
    setDisplayedMovies((movies) => movies + moviesToLoad);
  };

  const searchShortMovies = (movies) => {
    const searchShortMoviesArr = movies.slice(0);
    return searchShortMoviesArr.filter((item) => item.duration <= SHORT_MOVIE);
  };

  let moviesFilter = checkedAllMovies ? movies : searchShortMovies(movies);

  let savedMoviesFilter = checkedSavedMovies
    ? savedMovies
    : searchShortMovies(savedMovies);

  let classResultsError =
    isNotResults && moviesFilter.length === 0
      ? "movies-list__not-found_visible"
      : "movies-list__not-found";

  let classRequestError =
    isUnsuccess && !isNotResults
      ? "movies-list__error_visible"
      : "movies-list__error";

  return (
    <section className="movies">
      {location.pathname === "/movies" ? (
        <>
          <ul className="movies__list">
            {moviesFilter.slice(0, displayedMovies).map((movie) => {
              return (
                <MoviesCard
                  key={movie.id}
                  movie={movie}
                  name={movie.nameRU}
                  duration={movie.duration}
                  thumbnail={`https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`}
                  trailerLink={movie.trailerLink}
                  onLiked={onLiked}
                  onDelete={onDelete}
                  savedMovies={savedMovies}
                  listSavedMovies={listSavedMovies}
                />
              );
            })}
            <h2 className={classResultsError}>
              {moviesFilter.length === 0
                ? ERROR_MESSAGE_SEARCH_FORM.NOT_FOUND_ERROR
                : ""}
            </h2>
            <h2 className={classRequestError}>
              {moviesFilter.length === 0
                ? ERROR_MESSAGE_SEARCH_FORM.REQUESR_ERROR
                : ""}
            </h2>
          </ul>
        </>
      ) : (
        <ul className="movies__list">
          {savedMoviesFilter.map((movie) => {
            return (
              <MoviesCard
                key={movie._id}
                movie={movie}
                name={movie.nameRU}
                duration={movie.duration}
                thumbnail={movie.thumbnail}
                trailerLink={movie.trailerLink}
                onLiked={onLiked}
                onDelete={onDelete}
                savedMovies={savedMovies}
                listSavedMovies={listSavedMovies}
              />
            );
          })}
          <h2 className={classResultsError}>
            {savedMovies.length === 0
              ? ERROR_MESSAGE_SEARCH_FORM.NOT_FOUND_ERROR
              : ""}
          </h2>
          <h2 className={classRequestError}>
            {savedMovies.length === 0
              ? ERROR_MESSAGE_SEARCH_FORM.REQUESR_ERROR
              : ""}
          </h2>
        </ul>
      )}
      {isMoreButton ? (
        <button
          type="button"
          className="movies-list__button"
          onClick={handleShowMoreMovies}
        >
          Еще
        </button>
      ) : (
        ""
      )}
    </section>
  );
}

export default MoviesCardList;
