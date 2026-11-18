import TarjetaA from '../Orquestador/OrquestadorA/TarjetaA.jsx';
import Album from '../data.json';
import '../Style/StyleA/pageA.css';

export default function AlbumesPage() {
  return (
    <div>
      <h1>ÁLBUMES DESTACADOS</h1>
    <div className="contenedor-padre">
      {Album.map((album) => (
        <TarjetaA
          key={album.id}
          title={album.Tittle || album.title}
          artist={album.Artist}
          description={album.description}
          imagen={album.img}
          price={album.price}
          url={album.url}
          urlM={album.urlM}
          urlN={album.urlN}
        />
      ))}
    </div>
    </div>
  );
}