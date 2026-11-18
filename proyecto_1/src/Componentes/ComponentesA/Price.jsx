import "../../Style/StyleA/TarjetaA.css";

export default function Price({ price }) {
  return (
    <div className="Price">
      ${typeof price === 'number' ? price.toFixed(2) : price}
    </div>
  );
}