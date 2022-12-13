import MainHeader from "../Header/MainHeader/MainHeader";
import Footer from "../Footer/Footer";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";

function Movies({
  movies,
  savedMovies,
  onLiked,
  onDelete,
  onSubmit,
  isLoading,
  isUnsuccess,
  isNotResults,
  checkedAllMovies,
  checkedSavedMovies,
  handleCheckbox,
  listSavedMovies,
  searchKeyword,
}) {
  return (
    <>
      <MainHeader />
      <main>
        <SearchForm
          onSubmit={onSubmit}
          isLoading={isLoading}
          searchKeyword={searchKeyword}
          handleCheckbox={handleCheckbox}
          checkedAllMovies={checkedAllMovies}
          checkedSavedMovies={checkedSavedMovies}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={movies}
            savedMovies={savedMovies}
            onLiked={onLiked}
            onDelete={onDelete}
            isUnsuccess={isUnsuccess}
            isNotResults={isNotResults}
            checkedAllMovies={checkedAllMovies}
            checkedSavedMovies={checkedSavedMovies}
            listSavedMovies={listSavedMovies}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
