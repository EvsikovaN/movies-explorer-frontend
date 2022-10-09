import "./Checkbox.css";
import { useLocation } from "react-router-dom";

function Checkbox({ onCheckbox, checked, checkedSaveMovies }) {
  const location = useLocation();
  const handleCheckbox = (evt) => {
    onCheckbox(evt.target.checked);
  };

  return (
    <div className="checkbox">
      {location.pathname === "/movies" ? (
        <input
          type="checkbox"
          className="checkbox__input"
          id="checkbox__input"
          name="checkbox__input"
          defaultValue="yes"
          checked={checked}
          onChange={handleCheckbox}
        />
      ) : (
        <input
          type="checkbox"
          className="checkbox__input"
          id="checkbox__input"
          name="checkbox__input"
          defaultValue="yes"
          checked={checkedSaveMovies}
          onChange={handleCheckbox}
        />
      )}
      <label htmlFor="checkbox__input"></label>
      <p className="checkbox__title">Короткометражки</p>
    </div>
  );
}

export default Checkbox;
