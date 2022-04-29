import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

export default function FirstName() {
  const { prenom } = useContext(UserContext);

  return (
    <span
      style={{
        color: "whitesmoke",
        fontWeight: "bold",
        fontSize: "20px",
        margin: "0 5px",
      }}
    >
      {prenom}
    </span>
  );
}
