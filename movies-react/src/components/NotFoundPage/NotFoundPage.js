import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="error">
      <h2 className="error__title">404</h2>
      <p className="error__description">Страница не найдена</p>
      <Link className="error__link" to={-1}>
        Назад
      </Link>
    </div>
  );
}

export default NotFoundPage;
