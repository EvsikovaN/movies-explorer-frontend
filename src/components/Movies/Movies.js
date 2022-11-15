import MainHeader from "../Header/MainHeader/MainHeader";
import Footer from "../Footer/Footer";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";

function Movies({
  onSubmit,
  movies,
  isLoading,
  isFailed,
  isNotFound,
  searchKeyword,
  savedMovies,
  onSave,
  onDelete,
  onCheckbox,
  checked,
  checkedSaveMovies,
  allSavedMovies,
}) {
  return (
    <>
      <MainHeader />
      <main>
        <SearchForm
          onSubmit={onSubmit}
          searchKeyword={searchKeyword}
          onCheckbox={onCheckbox}
          checked={checked}
          checkedSaveMovies={checkedSaveMovies}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            isSaved={false}
            movies={movies}
            isNotFound={isNotFound}
            isFailed={isFailed}
            searchKeyword={searchKeyword}
            savedMovies={savedMovies}
            onSave={onSave}
            onDelete={onDelete}
            onCheckbox={onCheckbox}
            checked={checked}
            checkedSaveMovies={checkedSaveMovies}
            allSavedMovies={allSavedMovies}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
