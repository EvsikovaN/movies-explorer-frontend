// export const BASE_URL = 'https://api.movies.evsikova.nomoredomains.sbs/';
// export const BASE_URL = 'http://localhost:3500/';
import { BASE_URL } from './constants';

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  }).then(checkResponse);
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  }).then(checkResponse);
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
