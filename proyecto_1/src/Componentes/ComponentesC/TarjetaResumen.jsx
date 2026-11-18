import "../../Style/StyleC/TarjetaC.css";

export default function TarjetaResumen({ datos, titulo = "TU PERFIL MUSICAL" }) {
  return (
    <div className="Tarjeta VistaPrevia">
      <h1>{titulo}</h1>

      {datos.imagenArtista && (
        <img 
          className="foto-artista" 
          src={datos.imagenArtista} 
          alt={datos.pregunta1 || "Artista"} 
        />
      )}
      
      <p><strong>Artista favorito:</strong> {datos.pregunta1}</p>
      <p><strong>Álbum imprescindible:</strong> {datos.pregunta2}</p>
      <p><strong>Canción en bucle:</strong> {datos.pregunta3}</p>
    </div>
  );
}