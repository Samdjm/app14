import { FaEye } from "react-icons/fa";

export default function InputWithError({
  holder,
  valeur,
  action,
  type,
  error,
}) {
  return (
    <div>
      <input
        placeholder={holder}
        value={valeur}
        onChange={action}
        type={type}
      />
      <FaEye />
      <p style={{ color: "red", fontSize: "12px" }}>{error}</p>
    </div>
  );
}
