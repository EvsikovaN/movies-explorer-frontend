// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage({ loggedIn }) {
  // const navigate = useNavigate();

  return (
    <main>
      <div className="error">
        <h2 className="error__title">404</h2>
        <p className="error__description">Страница не найдена</p>
        {loggedIn ? (
          <Link className="error__link" to={-3}>
            Назад
          </Link>
        ) : (
          <Link className="error__link" to={-1}>
            Назад
          </Link>
        )}
        {/* <Link className="error__link" to={-1}>
          Назад
        </Link> */}
        {/* <button type='button' className='error__link' onClick={() => navigate(-3)}>Назад</button> */}
      </div>
    </main>
  );
}

export default NotFoundPage;
