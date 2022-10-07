import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <main>
      <div className="error">
        <h2 className="error__title">404</h2>
        <p className="error__description">Страница не найдена</p>
        <Link className="error__link" to={-1}>
          Назад
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
