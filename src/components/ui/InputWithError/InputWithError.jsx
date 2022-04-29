import React from "react";

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
      <p style={{ color: "red", fontSize: "12px" }}>{error}</p>
    </div>
  );
}
