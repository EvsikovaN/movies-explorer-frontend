import MainHeader from "../Header/MainHeader/MainHeader";
import Footer from "../Footer/Footer";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Movies/Preloader/Preloader";
import "./SavedMovies.css";

function SavedMovies({
  movies,
  onSubmit,
  isLoading,
  isFailed,
  isNotFound,
  searchKeyword,
  onCheckbox,
  checked,
  checkedSaveMovies,
  savedMovies,
  onSave,
  onDelete,
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
            isSaved={true}
            checked={checked}
            checkedSaveMovies={checkedSaveMovies}
            movies={movies}
            isNotFound={isNotFound}
            isFailed={isFailed}
            savedMovies={savedMovies}
            onSave={onSave}
            onDelete={onDelete}
            allSavedMovies={allSavedMovies}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
