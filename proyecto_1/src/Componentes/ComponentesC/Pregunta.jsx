import "../../Style/StyleC/TarjetaC.css";

export default function Pregunta({ texto }) {
  return (
    <div className="Pregunta">
      {texto}
    </div>
  );
}