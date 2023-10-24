import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ongoing from './pages/Ongoing';
import DetailAnime from './pages/DetailAnime';

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
      </Routes>
    </Router>

  );
}

export default App;
