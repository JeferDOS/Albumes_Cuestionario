import TarjetaAA from '../Orquestador/OrquestadorAA/TarjetaAA.jsx';
import artistasData from '../artistas.json';
import '../Style/StyleAA/PageAA.css';
export default function ArtistasPage() {
  return (
    <div>
      <h1>ARTISTAS DESTACADOS</h1>
      <div className="contenedor-padre-AA">
        {artistasData.map((artist) => (
          <TarjetaAA
            key={artist.id}
            artist={artist.artist}
            image={artist.image}
            listenersMonthly={artist.listenersMonthly}
            topAlbum={artist.topAlbum}
            topSong={artist.topSong}
          />
        ))}
      </div>
    </div>
  );
}