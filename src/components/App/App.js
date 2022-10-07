import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;