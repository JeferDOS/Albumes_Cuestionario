import "../../Style/StyleC/TarjetaC.css";

export default function Boton({ texto, type = "button", onClick }) {
  return (
    <button className="Boton" type={type} onClick={onClick}>
      {texto}
    </button>
  );
}