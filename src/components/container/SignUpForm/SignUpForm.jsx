import React, { useState } from "react";
import Button from "../../ui/Button/Button";
import InputWithError from "../../ui/InputWithError/InputWithError";

export default function SignUpForm() {
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [usernameInput, setUsernameInput] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  function handleEmail(e) {
    setEmailInput(e.target.value);
    setEmailError("");
  }

  function handleUsername(e) {
    setUsernameInput(e.target.value);
    setUsernameError("");
  }

  function handlePassword(event) {
    setPasswordInput(event.target.value);
    setPasswordError("");
    setConfirmPasswordError("");
  }

  function handleConfirmPassword(event) {
    setConfirmPasswordInput(event.target.value);
    setConfirmPasswordError("");
    setPasswordError("");
  }

  function signup(event) {
    event.preventDefault();
    if (
      emailInput.includes("@") &&
      usernameInput.length >= 3 &&
      usernameInput.length <= 10 &&
      passwordInput.length >= 6 &&
      passwordInput === confirmPasswordInput
    ) {
      alert("Inscription reussis");
    } else {
      setEmailError(!emailInput.includes("@") ? "Email invalide!" : "");
      setUsernameError(
        usernameInput.length < 3
          ? "Pseudo trop court! Min.3"
          : usernameInput.length > 10
          ? "Pseudo trop long! Max.10"
          : ""
      );

      setPasswordError(
        passwordInput.length < 6
          ? "Mot de passe trop court! Min.6"
          : passwordInput !== confirmPasswordInput
          ? "Les mots de passes ne sont pas identiques"
          : ""
      );

      setConfirmPasswordError(
        passwordInput !== confirmPasswordInput
          ? "Les mots de passes ne sont pas identiques"
          : ""
      );
    }
  }

  return (
    <form act style={{ maxWidth: "500px", padding: "10%" }}>
      <h2>Inscrivez-vous</h2>
      <InputWithError
        holder={"Email"}
        valeur={emailInput}
        action={handleEmail}
        type={"email"}
        error={emailError}
      />

      <InputWithError
        holder={"Pseudo"}
        valeur={usernameInput}
        action={handleUsername}
        type={"text"}
        error={usernameError}
      />

      <InputWithError
        holder={"Mot de passe"}
        valeur={passwordInput}
        action={handlePassword}
        type={"password"}
        error={passwordError}
      />

      <InputWithError
        holder={"Confirmez le mot de passe"}
        valeur={confirmPasswordInput}
        action={handleConfirmPassword}
        type={"password"}
        error={confirmPasswordError}
      />
      <Button action={signup}>Valider</Button>
    </form>
  );
}

//Exercice: Créer le formulaire d'inscription:
// email: test si il possede un @ / Email invalide!
// username: test: sup a 3, et inf a 10 / Username trop court ou trop long!
// password: test: sup a 6 / Mot de passe trop court!
// confirmPassword: test: password === confirmPassword / Les mots ne sont pas identiques!

//Affiche une alerte si la validation est correcte.
