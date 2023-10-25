import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ongoing from './pages/Ongoing';
import DetailAnime from './pages/DetailAnime';
import StreamingAnime from './pages/StreamingAnime';
import GenreList from './pages/GenreList';
import GenreListAnime from './pages/GenreList-Anime';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />} />
        <Route
          path="/ongoing"
          element={<Ongoing />}
        />
        <Route
          path="/detailAnime"
          element={<DetailAnime />}
        />
        <Route
          path="/streamingAnime"
          element={<StreamingAnime />}
        />
        <Route
          path="/genreList"
          element={<GenreList />}
        />
        <Route
          path="/genreList/Anime"
          element={<GenreListAnime />}
        />
      </Routes>
    </Router>

  );
}

export default App;
