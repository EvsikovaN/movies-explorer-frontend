import MainHeader from '../Header/MainHeader/MainHeader';
import Footer from '../Footer/Footer';
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import './SavedMovies.css';

function SavedMovies() {
  return (
    <>
      <MainHeader />
      <main>
        <SearchForm />
        <MoviesCardList isSaved={true}>
          <div
            className="movies__show-more">
          </div>
        </MoviesCardList>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;