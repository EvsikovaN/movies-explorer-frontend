import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function NotFoundPage({ loggedIn }) {
  // const navigate = useNavigate();

  const { pathname } = useLocation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count+1);
    console.log(pathname);
  }, [pathname])

  return (
    <main>
      <div className="error">
        <h2 className="error__title">404</h2>
        <p className="error__description">Страница не найдена</p>
        <Link className="error__link" to={loggedIn ? -(count) -2 : -(count)}>
          Назад
        </Link>
        {/* {loggedIn ? (
          <Link className="error__link" to={-2}>
            Назад
          </Link>
        ) : (
          <Link className="error__link" to={-1}>
            Назад
          </Link>
        )} */}
        {/* <Link className="error__link" to={-1}>
          Назад
        </Link> */}
        {/* <button type='button' className='error__link' onClick={() => navigate(-3)}>Назад</button> */}
      </div>
    </main>
  );
}

export default NotFoundPage;
