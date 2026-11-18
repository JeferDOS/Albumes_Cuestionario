import { Link } from 'react-router-dom';
import '../Style/Home/StyleH.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <h1 className="home-title">BUEN GUSTO.COM</h1>
      <p className="home-author">Por Jeferson Andrés De Oro Simanca</p>
      <p className="home-subtitle">Selecciona una sección por favor...</p>

      <div className="home-buttons-container">
        <Link to="/artistas" className="home-btn">
          <div>ARTISTAS</div>
        </Link>

        <Link to="/albumes" className="home-btn">
          <div>ÁLBUMES</div>
        </Link>

        <Link to="/cuestionario" className="home-btn">
          <div>CUESTIONARIO</div>
        </Link>
      </div>
    </div>
  );
}