import React, { useState } from "react";
import Button from "../../ui/Button/Button";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function add() {
    setCounter(counter + 1);
  }

  function sub() {
    setCounter(counter - 1);
  }

  function changeCounter(operation) {
    switch (operation) {
      case "+":
        setCounter(counter + 1);
        break;
      case "-":
        setCounter(counter - 1);
        break;
      default:
        return;
    }
  }

  return (
    <div>
      <h2> Compteur = {counter} </h2>
      <Button action={() => changeCounter("-")} danger>
        -1
      </Button>
      <Button action={() => changeCounter("+")} success>
        +1
      </Button>
    </div>
  );
}
//Exercice:
//1- Créer une variable d'état 'counter' initialiser a 0.
//2- Afficher cette variable d'état dans un paragraphe
//3- Ajouter deux boutons:
//3.1/ Decrementer la variable counter de 1.
//3.2/ Incrementer la variable de 1.
