//rfc: React Functional Composant
import { useState } from "react";
import Button from "../../ui/Button/Button";

export default function Home() {
  const [textState, setTextState] = useState("Du texte");

  console.log("Nouveau ou Rafraichi: " + textState);

  function clicked() {
    console.log("Click!");
    console.log("avant", textState);
    setTextState("Un nouveau texte!!");
    console.log("apres", textState);
  }

  return (
    <div>
      <p> Home</p>

      <Button action={clicked}>Click!</Button>
      <p> {textState} </p>

      {/* <button onClick={clicked}>Cliquer!</button> */}
    </div>
  );
}
