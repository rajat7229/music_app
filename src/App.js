import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import PlaylistsPage from './components/PlaylistsPage';
import FavoritesPage from './components/FavoritesPage';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/favorites" element={<FavoritesPage />} />
    <Route path="/playlists" element={<PlaylistsPage />} />
  </Routes>
  );
}

export default App;
