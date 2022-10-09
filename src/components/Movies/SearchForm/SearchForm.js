import "./SearchForm.css";
import Checkbox from "../Checkbox/Checkbox";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchForm({
  onSubmit,
  searchKeyword,
  onCheckbox,
  checked,
  checkedSaveMovies,
}) {
  const [errorText, setErrorText] = useState("");
  const [keyword, setKeyword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (searchKeyword && location.pathname === "/movies") {
      setKeyword(searchKeyword);
    }
  }, []);

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
    setIsFormValid(evt.target.closest("form").checkValidity());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setIsFormValid(evt.target.closest("form").checkValidity());
    if (!isFormValid) {
      return setErrorText("Нужно ввести ключевое слово");
    }
    onSubmit(keyword);
  };

  return (
    <section className="search">
      <form
        action="#"
        className="search__form"
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="search__input"
          placeholder="Фильм"
          required
          onChange={handleChange}
          value={keyword}
          minLength="1"
          maxLength="30"
        />
        <button type="submit" className="search__button">
          Найти
        </button>
        <span className="search__form-error">{!isFormValid && errorText}</span>
      </form>
      <Checkbox
        onCheckbox={onCheckbox}
        checked={checked}
        checkedSaveMovies={checkedSaveMovies}
      />
    </section>
  );
}

export default SearchForm;
