import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function InputWithError({
  holder,
  valeur,
  action,
  type,
  error,
}) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  function togglePasswordShow() {
    setIsPasswordShown(!isPasswordShown);
  }

  return (
    <div>
      <div
        style={{
          backgroundColor: "rgb(245,245,245)",
          padding: "10px",
          borderBottom: `solid 2px ${error === "" ? "royalblue" : "red"}`,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <input
          style={{
            border: "none",
            width: "90%",
            backgroundColor: "transparent",
            color: error === "" ? "black" : "red",
          }}
          placeholder={holder}
          value={valeur}
          onChange={action}
          type={
            type !== "password"
              ? type
              : isPasswordShown
              ? "text"
              : "password"
          }
        />
        {type === "password" &&
          (isPasswordShown ? (
            <FaEye color='orange' size={25} onClick={togglePasswordShow} />
          ) : (
            <FaEyeSlash
              color='green'
              size={25}
              onClick={togglePasswordShow}
            />
          ))}
      </div>

      <p style={{ color: "red", fontSize: "12px" }}>{error}</p>
    </div>
  );
}
