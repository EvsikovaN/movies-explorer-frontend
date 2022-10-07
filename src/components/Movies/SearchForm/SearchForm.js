import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
        <form action="#" className="search__form">
          <input type="text" className="search__input" placeholder="Фильм" />
          <button type="submit" className="search__button">
            Найти
          </button>
        </form>
        <div className="search__checkbox">
          <input
            type="checkbox"
            className="search__checkbox-input"
            id="search__checkbox-input"
            name="search__checkbox-input"
            defaultValue="yes"
            required
          />
          <label htmlFor="search__checkbox-input"></label>
          <p className="search__checkbox-title">Короткометражки</p>
        </div>
    </section>
  );
}

export default SearchForm;
