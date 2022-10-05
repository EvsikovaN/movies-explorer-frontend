import MainHeader from "../Header/MainHeader/MainHeader";
import Footer from "../Footer/Footer";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import "./Movies.css";

function Movies() {
  return (
    <>
      <MainHeader />
      <main>
        <SearchForm />
        <MoviesCardList isSaved={false}>
          <div
            className="movies__show-more">
            <button type="button" className="movies__show-more-btn">
              Ещё
            </button>
          </div>
        </MoviesCardList>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
