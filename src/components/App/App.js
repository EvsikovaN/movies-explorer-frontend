import "./App.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useState, useEffect } from "react";

import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import SavedMovies from "../SavedMovies/SavedMovies";
import ProtectedRoute from "../ProtectedRoute";

import * as apiAuth from "../../utils/auth";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

import { ERROR_REGISTER_MESSAGE } from "../../utils/constants";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [isRegisterMessage, setRegisterMessage] = useState(false);
  const [isRegisterError, setRegisterError] = useState(false);

  const [isLoginMessage, setLoginMessage] = useState(false);
  const [isLoginError, setLoginError] = useState(false);

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [checkedAllMovies, setCheckedAllMovies] = useState(true);
  const [checkedSavedMovies, setCheckedSavedMovies] = useState(true);
  const [listSavedMovies, setListSavedMovies] = useState([]);

  const [isProfileMessage, setProfileMessage] = useState(false);
  const [isNotResults, setIsNotResults] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isUnsuccess, setUnsuccess] = useState(false);

  // useEffect(() => {
  //   if (loggedIn) {
  //     mainApi
  //       .getLikedMovies()
  //       .then((res) => {
  //         setSavedMovies(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     mainApi
  //       .getUserInfo()
  //       .then((data) => {
  //         setCurrentUser(data);
  //       })
  //       .catch((err) => {
  //         console.error(`Данные пользователя не получены: ${err}`);
  //       });
  //     if (JSON.parse(localStorage.getItem("filteredMovies"))) {
  //       setMovies(JSON.parse(localStorage.getItem("filteredMovies")));
  //       setChecked(JSON.parse(localStorage.getItem("checkbox")));
  //       setCheckedSaveMovies(
  //         JSON.parse(localStorage.getItem("checkboxSaveMovies"))
  //       );
  //     }
  //   }
  // }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getLikedMovies(), mainApi.getUserInfo()])
        .then(([movies, userInfo]) => {
          setSavedMovies(movies);
          setCurrentUser(userInfo.user);
        })
        .catch((err) => console.log(err));

      if (JSON.parse(localStorage.getItem("uploadedMovies"))) {
        setMovies(JSON.parse(localStorage.getItem("uploadedMovies")));
        setCheckedAllMovies(JSON.parse(localStorage.getItem("statusCheckbox")));
        setCheckedSavedMovies(
          JSON.parse(localStorage.getItem("checkboxLikedMovies"))
        );
      }
    }
  }, [loggedIn, navigate]);

  useEffect(() => {
    tokenCheck();
  }, []);

  const handleLikedMovie = (movie) => {
    mainApi
      .addMovie(movie)
      .then((data) => {
        setSavedMovies([data, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteLike = (movie) => {
    const savedMovie = savedMovies.find(
      (item) => item.movieId === movie.movieId
    );

    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        const newMoviesList = savedMovies.filter(
          (item) => item._id !== savedMovie._id
        );
        setSavedMovies(newMoviesList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onUpdateUser = (name, email) => {
    mainApi
      .updateUserInfo(name, email)
      .then((data) => {
        setCurrentUser(data.user);
        setProfileMessage(true);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setTimeout(() => setProfileMessage(false), 1000);
      });
  };

  const searchMovies = (movies, name) => {
    return movies.filter((item) =>
      item.nameRU.toLowerCase().includes(name.toLowerCase())
    );
  };

  const handleSearchMovies = (name) => {
    if (JSON.parse(localStorage.getItem("moviesArray"))) {
      setIsLoading(true);
      const initialArray = searchMovies(
        JSON.parse(localStorage.getItem("moviesArray")),
        name
      );
      setMovies(initialArray);
      setIsNotResults(!movies.length || !isUnsuccess);
      localStorage.setItem("uploadedMovies", JSON.stringify(initialArray));
      localStorage.setItem("searchKeyword", name);
      localStorage.setItem("statusCheckbox", checkedAllMovies);
      setTimeout(() => setIsLoading(false), 1000);
    } else if (!JSON.parse(localStorage.getItem("moviesArray"))) {
      moviesApi
        .getAllMovies()
        .then((movies) => {
          const before = movies.slice(0, 23);
          const after = movies.slice(24);
          const arrMovies = before.concat(after);
          localStorage.setItem("moviesArray", JSON.stringify(arrMovies));
        })
        .then(() => {
          setIsLoading(true);
          const initialArray = searchMovies(
            JSON.parse(localStorage.getItem("moviesArray")),
            name
          );
          setMovies(initialArray);
          setIsNotResults(!movies.length && !isUnsuccess);
          localStorage.setItem("uploadedMovies", JSON.stringify(initialArray));
          localStorage.setItem("searchKeyword", name);
          localStorage.setItem("statusCheckbox", checkedAllMovies);
          setTimeout(() => setIsLoading(false), 1000);
        })
        .catch((err) => {
          setUnsuccess(true);
          console.log(err);
        });
    }
  };

  const handleSearchLikedMovies = (name) => {
    setIsLoading(true);

    mainApi
      .getLikedMovies()
      .then((movies) => {
        setListSavedMovies(movies);
        localStorage.setItem("checkboxLikedMovies", checkedSavedMovies);

        const userLikedMovies = movies.filter((movie) => {
          return movie.owner === currentUser._id;
        });

        const initialArray = searchMovies(userLikedMovies, name);

        setSavedMovies(initialArray);
        setIsNotResults(!initialArray.length && !isUnsuccess);
        setTimeout(() => setIsLoading(false), 1000);
      })
      .catch((err) => console.log(err));

    const initialArray = searchMovies(listSavedMovies, name);

    setSavedMovies(initialArray);
    setIsNotResults(!initialArray.length || !isUnsuccess);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleChangeStatusCheckbox = (evt) => {
    if (location.pathname === "/saved-movies") {
      setCheckedSavedMovies(!checkedSavedMovies);
      localStorage.setItem("checkboxLikedMovies", !checkedSavedMovies);
    } else if (location.pathname === "/movies") {
      setCheckedAllMovies(!checkedAllMovies);
      localStorage.setItem("statusCheckbox", !checkedAllMovies);
    }
  };

  const handleRegister = (name, email, password) => {
    apiAuth
      .register(name, email, password)
      .then((data) => {
        if (data) {
          handleLogin(email, password);
        }
        setRegisterError(false);
      })
      .catch((err) => {
        err.status !== 400
          ? setRegisterMessage(ERROR_REGISTER_MESSAGE.EMAIL_EXIST)
          : setRegisterMessage(ERROR_REGISTER_MESSAGE.COMMON_ERROR);
        setRegisterError(true);
      });
  };

  const handleLogin = (email, password) => {
    apiAuth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          setLoginError(false);
          apiAuth.checkToken(res.token).then((res) => {
            if (res) {
              setTimeout(() => navigate("/movies"), 800);
              setLoggedIn(true);
            }
          });
        }
      })
      .catch((err) => {
        if (err.includes(401)) {
          setLoginMessage(ERROR_REGISTER_MESSAGE.UNCORRECT_DATA);
        }
        setLoginError(true);
      });
  };

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      apiAuth
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate(location.pathname);
          }
        })
        .catch((err) => {
          console.error(err);
          onSignOut();
        });
    }
  };

  const onSignOut = () => {
    localStorage.clear();
    navigate("/");
    setLoggedIn(false);
    setCurrentUser({});
    setRegisterMessage(false);
    setRegisterError(false);
    setLoginMessage(false);
    setLoginError(false);
    setMovies([]);
    setSavedMovies([]);
    setCheckedAllMovies(true);
    setCheckedSavedMovies(true);
    setIsNotResults(false);
    setIsLoading(false);
    setUnsuccess(false);
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          <Route
            path="/signin"
            element={
              <ProtectedRoute loggedIn={!loggedIn}>
                <Login
                  handleLogin={handleLogin}
                  isLoginMessage={isLoginMessage}
                  isLoginError={isLoginError}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoute loggedIn={!loggedIn}>
                <Register
                  handleRegister={handleRegister}
                  isRegisterMessage={isRegisterMessage}
                  isRegisterError={isRegisterError}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile
                  onUpdateUser={onUpdateUser}
                  onSignOut={onSignOut}
                  isProfileMessage={isProfileMessage}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies
                  movies={movies}
                  savedMovies={savedMovies}
                  onLiked={handleLikedMovie}
                  onDelete={handleDeleteLike}
                  onSubmit={handleSearchMovies}
                  isLoading={isLoading}
                  isUnsuccess={isUnsuccess}
                  isNotResults={isNotResults}
                  checkedAllMovies={checkedAllMovies}
                  checkedSavedMovies={checkedSavedMovies}
                  handleCheckbox={handleChangeStatusCheckbox}
                  listSavedMovies={listSavedMovies}
                  searchKeyword={localStorage.getItem("searchKeyword")}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies
                  movies={movies}
                  savedMovies={savedMovies}
                  onLiked={handleLikedMovie}
                  onDelete={handleDeleteLike}
                  onSubmit={handleSearchLikedMovies}
                  isLoading={isLoading}
                  isUnsuccess={isUnsuccess}
                  isNotResults={isNotResults}
                  checkedAllMovies={checkedAllMovies}
                  checkedSavedMovies={checkedSavedMovies}
                  handleCheckbox={handleChangeStatusCheckbox}
                  searchKeyword={localStorage.getItem("searchKeyword")}
                  listSavedMovies={listSavedMovies}
                />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
