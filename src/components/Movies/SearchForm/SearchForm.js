import "./SearchForm.css";
import Checkbox from "../Checkbox/Checkbox";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ERROR_MESSAGE_SEARCH_FORM } from "../../../utils/constants";

function SearchForm({
  onSubmit,
  isLoading,
  searchKeyword,
  handleCheckbox,
  checkedAllMovies,
  checkedSavedMovies,
}) {
  const location = useLocation();

  const [errorMessage, setErrorMessage] = useState("");
  const [keyword, setKeyword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (evt) => {
    setKeyword(evt.target.value);

    setIsFormValid(evt.target.closest("form").checkValidity());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setIsFormValid(evt.target.closest("form").checkValidity());

    isFormValid
      ? onSubmit(keyword)
      : setErrorMessage(ERROR_MESSAGE_SEARCH_FORM.SEARCH_KEYWORD_ERROR);
  };

  useEffect(() => {
    if (location.pathname === "/movies" && searchKeyword) {
      setKeyword(searchKeyword);
    }
  }, []);

  return (
    <section className="search">
      <form
        action="#"
        name="search-form"
        className="search__form"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          className="search__input"
          type="text"
          name="search"
          placeholder="Фильм"
          minLength="1"
          maxLength="30"
          required
          onChange={handleChange}
          value={keyword}
        />
        <button type="submit" className="search__button" disabled={isLoading}>
          Найти
        </button>
        <span className="search__form-error">
          {!isFormValid && errorMessage}
        </span>
      </form>
      <Checkbox
        handleCheckbox={handleCheckbox}
        checkedAllMovies={checkedAllMovies}
        checkedSavedMovies={checkedSavedMovies}
      />
    </section>
  );
}

export default SearchForm;
