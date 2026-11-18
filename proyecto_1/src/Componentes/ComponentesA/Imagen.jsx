import "../../Style/StyleA/TarjetaA.css";

export default function Imagen({ imagen, title = "Portada de álbum" }) {
  return (
    <div className="Imagen-container">
      <img className="Imagen" src={imagen} alt={title} />
    </div>
  );
}