import { useState } from "react";
import Button from "../../ui/Button/Button";

export default function LoginForm() {
  const [emailInput, setEmailInput] = useState("sam@sam.com");
  const [passwordIput, setPasswordInput] = useState("");

  function handleEmail(e) {
    setEmailInput(e.target.value);
  }

  function login() {
    alert("Connexion avec: " + emailInput);
    setEmailInput("");
  }

  //Two way binding

  return (
    <>
      <h2>Connectez-vous</h2>

      <input
        value={emailInput}
        onChange={handleEmail}
        style={{ display: "block" }}
        placeholder='Email'
        type={"email"}
      />
      <input
        style={{ display: "block" }}
        placeholder='Mot de passe'
        type={"password"}
      />
      <Button action={login}>Valider</Button>
    </>
  );
}
