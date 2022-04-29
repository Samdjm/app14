import { useState } from "react";
import Button from "../../ui/Button/Button";
import InputWithError from "../../ui/InputWithError/InputWithError";

export default function LoginForm() {
  //1- Création des variables d'états pour les entrées et les erreurs.
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //2- Création des fonctions handle:
  function handleEmail(e) {
    setEmailInput(e.target.value);
    setEmailError("");
  }

  function handlePassword(event) {
    setPasswordInput(event.target.value);
    setPasswordError("");
  }

  //3- Créer la fonction pour valider le formulaire: tests/Envoi de données a la Back-end
  function login() {
    if (emailInput.includes("@") && passwordInput.length >= 6) {
      alert("Connexion avec: " + emailInput);
    } else {
      setEmailError(
        !emailInput.includes("@") ? "Format email invalide!" : ""
      );
      setPasswordError(
        passwordInput.length < 6 ? "Mot de passe trop court!" : ""
      );
    }
    setPasswordInput("");
  }

  //Two way binding: l'input est lié dan les deux sens
  //4- Ajouter les éléments inputs/boutons, et les lier au variables et fonctions:
  return (
    <>
      <h2>Connectez-vous</h2>
      <InputWithError
        holder={"Email"}
        valeur={emailInput}
        action={handleEmail}
        type={"email"}
        error={emailError}
      />

      <InputWithError
        holder={"Mot de passe"}
        valeur={passwordInput}
        action={handlePassword}
        type={"password"}
        error={passwordError}
      />
      <Button action={login}>Valider</Button>
    </>
  );
}

//Exercice:
//1- Créer un composant ./components/ui/InputWithError/InputWithError.
{
  /* <InputWithError
holder={"Email"}
valeur={emailInput}
action={handleEmail}
type={"email"}
error={emailError}
/>

<InputWithError
holder={"Mot de passe"}
valeur={passwordInput}
action={handlePassword}
type={"password"}
error={passwordError}
/> */
}

//2- Styliser le composant: Les erreurs en rouge

//3- Utiliser le composant dans LoginForm.
