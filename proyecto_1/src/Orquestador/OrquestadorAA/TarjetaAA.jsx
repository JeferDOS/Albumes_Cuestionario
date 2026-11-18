import "../../Style/StyleAA/TarjetaAA.css";
import ArtistAA from "../../Componentes/ComponentesAA/ArtistAA.jsx";
import ListenersAA from "../../Componentes/ComponentesAA/ListenersAA.jsx";
import TopAlbumAA from "../../Componentes/ComponentesAA/TopAlbumAA.jsx";
import TopSongAA from "../../Componentes/ComponentesAA/TopSongAA.jsx";
import ImagenAA from "../../Componentes/ComponentesAA/ImagenAA.jsx";

export default function TarjetaAA({ artist, image, listenersMonthly, topAlbum, topSong }) {
  return (
    <div className="CentrarAA">
      <ImagenAA image={image} artist={artist} />
      <div className="OrgaAA">
        <ArtistAA artist={artist} />
        <ListenersAA listenersMonthly={listenersMonthly} />
        <TopAlbumAA topAlbum={topAlbum} />
        <TopSongAA topSong={topSong} />
      </div>
    </div>
  );
}