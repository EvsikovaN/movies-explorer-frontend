import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main>
      <div className="error">
        <h2 className="error__title">404</h2>
        <p className="error__description">Страница не найдена</p>
        <button type="button" className="error__link" onClick={() => navigate(-1)}>
          Назад
        </button>
      </div>
    </main>
  );
}

export default NotFoundPage;
