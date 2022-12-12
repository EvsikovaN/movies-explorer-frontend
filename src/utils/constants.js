const MOVIES_BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const BASE_URL = 'https://api.movies.evsikova.nomoredomains.sbs/';
// const BASE_URL = 'http://localhost:3500/';

const EMAIL_VALID_PATTERN = '^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$';
const USER_NAME_VALID_PATTERN = '^[\\sa-zA-Zа-яА-ЯёЁ-]+$';

const SHORT_MOVIE = 40;

const ERROR_MESSAGE_SEARCH_FORM = {
  NOT_FOUND_ERROR: "Ничего не найдено",
  REQUESR_ERROR: "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз",
  SEARCH_KEYWORD_ERROR: "Нужно ввести ключевое слово"
}

const ERROR_REGISTER_MESSAGE = {
  UNCORRECT_DATA: "Вы ввели неправильный логин или пароль",
  EMAIL_EXIST: "Пользователь с таким email уже зарегистрирован",
  COMMON_ERROR: "При регистрации пользователя произошла ошибка"
}

const SUCCESS_MESSAGE_USER_FORM = 'Изменение данных прошло успешно!';

const DESKTOP_BREAKPOINT = 1280;
const MOBILE_BREAKPOINT = 480;

const MOVIES_LIST_DESKTOP = 7;
const MOVIES_LIST_MOBILE = 5;

const MOVIES_TO_LOAD_DESKTOP = 7;
const MOVIES_TO_LOAD_MOBILE = 5;

export {
  MOVIES_BASE_URL,
  BASE_URL,
  EMAIL_VALID_PATTERN,
  USER_NAME_VALID_PATTERN,
  SHORT_MOVIE,
  ERROR_MESSAGE_SEARCH_FORM,
  ERROR_REGISTER_MESSAGE,
  SUCCESS_MESSAGE_USER_FORM,
  DESKTOP_BREAKPOINT,
  MOBILE_BREAKPOINT,
  MOVIES_LIST_DESKTOP,
  MOVIES_LIST_MOBILE,
  MOVIES_TO_LOAD_DESKTOP,
  MOVIES_TO_LOAD_MOBILE
};