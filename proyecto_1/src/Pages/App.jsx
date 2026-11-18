import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ArtistasPage from './ArtistasPage';
import AlbumesPage from './AlbumesPage';
import CuestionarioPage from './CuestionarioPage';

export default function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artistas" element={<ArtistasPage />} />
        <Route path="/albumes" element={<AlbumesPage />} />
        <Route path="/cuestionario" element={<CuestionarioPage />} />
      </Routes>
    </Router>
    
  );
}