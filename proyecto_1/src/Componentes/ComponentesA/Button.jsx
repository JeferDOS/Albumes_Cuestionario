import "../../Style/StyleA/TarjetaA.css";

export default function Button({ url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="Button">
      <img 
        src="https://img.icons8.com/?size=100&id=85080&format=png&color=FFFFFF" 
        alt="Comprar" 
        className="Button-icon"
      />
    </a>
  );
}