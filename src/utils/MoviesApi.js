import { MOVIES_BASE_URL } from './constants';

class MoviesApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkResStatus(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Произошла ошибка: ${res.status}`);
  }

  getAllMovies() {
    return fetch(`${this._url}`, {
      headers: this._headers,
    }).then((res) => this._checkResStatus(res));
  }
}

const moviesApi = new MoviesApi({
  // url: "https://api.nomoreparties.co/beatfilm-movies",
  url: MOVIES_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;