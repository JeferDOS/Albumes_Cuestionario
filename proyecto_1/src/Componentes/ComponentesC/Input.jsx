import "../../Style/StyleC/TarjetaC.css";

export default function Input({ placeholder, type = "text", name, value, onChange }) {
  return (
    <input 
      className="Input" 
      placeholder={placeholder} 
      type={type} 
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}