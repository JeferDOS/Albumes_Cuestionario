import "../../Style/StyleA/TarjetaA.css";
import Title from '../../Componentes/ComponentesA/Title.jsx';
import Description from '../../Componentes/ComponentesA/Description.jsx';
import Imagen from '../../Componentes/ComponentesA/Imagen.jsx';
import Price from '../../Componentes/ComponentesA/Price.jsx';
import Artist from '../../Componentes/ComponentesA/Artist.jsx';
import Button from '../../Componentes/ComponentesA/Button.jsx';
import ButtonM from '../../Componentes/ComponentesA/ButtonM.jsx';
import ButtonN from '../../Componentes/ComponentesA/ButtonN.jsx';

export default function TarjetaA({ title, imagen, description, price, color, artist, url, urlM, urlN }) {
  return (
    
    <div className="Centrar" style={{ background: color || 'rgb(36, 36, 36)' }}>
      <Imagen imagen={imagen} title={title} />
      <div className="Orga">
        <Title title={title} />
        <Artist artist={artist} />
        <Description description={description} />
        <Price price={price} />
      </div>

      <div className="Botones">
        <Button url={url} />
        <ButtonM urlM={urlM} />
        <ButtonN urlN={urlN} />
      </div>
    </div>
  );
}