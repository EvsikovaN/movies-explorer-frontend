import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import moviesList from "../../../utils/data";

function MoviesCardList({ isSaved, children }) {
  const isMovieSaved = isSaved;
  const movieCards = moviesList.map((movie) => {
    return (
      <li className="movie__card">
        <MoviesCard
          key={movie.movieId}
          duration={movie.duration}
          thumbnail={movie.thumbnail}
          name={movie.name}
          isSaved={isMovieSaved}
        />
      </li>
    );
  });

  return (
    <>
      <section className="movies">
        <ul className="movies__list">{movieCards}</ul>
      </section>
      {children}
    </>
  );
}

export default MoviesCardList;
