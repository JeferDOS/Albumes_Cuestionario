import "../../Style/StyleA/TarjetaA.css";

export default function ButtonM({ urlM }) {
  return (
    <a href={urlM} target="_blank" rel="noopener noreferrer" className="ButtonM">
      <img 
        src="https://freepngimg.com/save/158136-sound-free-download-png-hd/1024x1024" 
        alt="Reproductor" 
        className="ButtonM-icon"
      />
    </a>
  );
}