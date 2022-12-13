import { BASE_URL } from './constants';

export class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkAuth() {
    const jwt = localStorage.getItem('jwt');
    return jwt ? { Authorization: `Bearer ${jwt}` } : {};
  }

  _checkResStatus(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Произошла ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: { ...this._headers, ...this._checkAuth() },
    }).then((res) => this._checkResStatus(res));
  }

  updateUserInfo(name, email) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: { ...this._headers, ...this._checkAuth() },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    }).then((res) => this._checkResStatus(res));
  }

  getLikedMovies() {
    return fetch(`${this._url}movies`, {
      method: "GET",
      headers: { ...this._headers, ...this._checkAuth() },
    }).then((res) => this._checkResStatus(res));
  }

  addMovie(movie) {
    return fetch(`${this._url}movies`, {
      method: 'POST',
      headers: { ...this._headers, ...this._checkAuth() },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id.toString(),
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then((res) => this._checkResStatus(res));
  }

  deleteMovie(id) {
    return fetch(`${this._url}movies/${id}`, {
      method: 'DELETE',
      headers: { ...this._headers, ...this._checkAuth() },
    }).then((res) => this._checkResStatus(res));
  }
}

const api = new Api({
  // url: "https://api.movies.evsikova.nomoredomains.sbs/",
  // url: "http://localhost:3500/",
  url: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api