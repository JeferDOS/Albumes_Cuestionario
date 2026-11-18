import "../../Style/StyleA/TarjetaA.css";

export default function ButtonN({ urlN }) {
  return (
    <a href={urlN} target="_blank" rel="noopener noreferrer" className="ButtonN">
      <img 
        src="https://static.vecteezy.com/system/resources/thumbnails/059/238/919/small/minimalist-white-browser-icon-free-png.png" 
        alt="Información" 
        className="ButtonN-icon"
      />
    </a>
  );
}