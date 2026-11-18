import "../../Style/StyleAA/TarjetaAA.css";

export default function ImagenAA({ image, artist }) {
  return (
    <div className="ImagenAA-container">
      <img className="ImagenAA" src={image} alt={artist} />
    </div>
  );
}