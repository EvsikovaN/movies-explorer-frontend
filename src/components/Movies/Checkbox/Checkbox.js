import "./Checkbox.css";
import { useLocation } from "react-router-dom";

function Checkbox({ handleCheckbox, checkedAllMovies, checkedSavedMovies }) {
  const location = useLocation();

  const handleChange = (evt) => {
    handleCheckbox(evt.target.checked);
  };

  return (
    <div className="checkbox">
        <input
          className="checkbox__input"
          type="checkbox"
          name="checkbox__input"
          id="checkbox__input"
          defaultValue="yes"
          onChange={handleChange}
          checked={location.pathname === "/movies" ? checkedAllMovies : checkedSavedMovies}
        />
      <label htmlFor="checkbox__input" />
      <p className="checkbox__title">Короткометражки</p>
    </div>
  );
}

export default Checkbox;
