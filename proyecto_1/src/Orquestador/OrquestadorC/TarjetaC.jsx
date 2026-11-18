import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../Style/StyleC/TarjetaC.css";
import Pregunta from '../../Componentes/ComponentesC/Pregunta.jsx';
import Input from '../../Componentes/ComponentesC/Input.jsx';
import Boton from '../../Componentes/ComponentesC/Boton.jsx';
import TarjetaResumen from '../../Componentes/ComponentesC/TarjetaResumen.jsx';

const estadoInicial = {
  pregunta1: '',
  imagenArtista: '',
  pregunta2: '',
  pregunta3: ''
};

export default function TarjetaC() {
  const navigate = useNavigate();
  const [respuestas, setRespuestas] = useState(estadoInicial);
  const [guardadas, setGuardadas] = useState([]);

  const manejarCambio = (e) => {
    setRespuestas({
      ...respuestas,
      [e.target.name]: e.target.value
    });
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    setGuardadas([...guardadas, respuestas]);
    setRespuestas(estadoInicial);
  };

  return (
    <div className="pagina-cuestionario">
      <div className="contenedor-general">
        <form 
          className="Tarjeta" 
          onSubmit={manejarEnvio} 
          onReset={() => setRespuestas(estadoInicial)}
        >
          <h1>CUESTIONARIO MUSICAL</h1>

          <div className="bloque-pregunta">
            <Pregunta texto="1. ¿Quién es tu artista o banda favorita de todos los tiempos?" />
            <Input 
              placeholder="Escribe el nombre del artista..." 
              name="pregunta1" 
              value={respuestas.pregunta1} 
              onChange={manejarCambio} 
            />
          </div>

          <div className="bloque-pregunta">
            <Pregunta texto="Ponga la URL de una imagen del artista" />
            <Input 
              placeholder="https://ejemplo.com/artista.jpg" 
              name="imagenArtista" 
              value={respuestas.imagenArtista} 
              onChange={manejarCambio} 
            />
          </div>

          <div className="bloque-pregunta">
            <Pregunta texto="2. ¿Cuál es tu álbum imprescindible (que escuchas de inicio a fin)?" />
            <Input 
              placeholder="Escribe el nombre del álbum..." 
              name="pregunta2" 
              value={respuestas.pregunta2} 
              onChange={manejarCambio} 
            />
          </div>

          <div className="bloque-pregunta">
            <Pregunta texto="3. ¿Qué canción no puedes parar de escuchar últimamente?" />
            <Input 
              placeholder="Escribe el nombre de la canción..." 
              name="pregunta3" 
              value={respuestas.pregunta3} 
              onChange={manejarCambio} 
            />
          </div>

          <div className="contenedor-botones">
            <Boton texto="Enviar" type="submit" />
            <Boton texto="Reset" type="reset" />
            <Boton texto="Volver" type="button" onClick={() => navigate('/')} />
          </div>
        </form>

        
        <TarjetaResumen datos={respuestas} titulo="VISTA PREVIA" />
      </div>

      {guardadas.length > 0 && (
        <div className="seccion-guardadas">
          <h2>TARJETAS GUARDADAS</h2>
          <div className="lista-guardadas">
            {guardadas.map((item, index) => (
              <TarjetaResumen 
                key={index} 
                datos={item} 
                titulo={`PERFIL #${index + 1}`} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}