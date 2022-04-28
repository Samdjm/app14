//rfc: React Functional Composant

import Button from "../../ui/Button/Button";

export default function Home() {
  function clicked() {
    console.log("Clickeeedd!!!");
  }

  return (
    <div>
      <p> Home</p>

      <Button action={clicked}>Click!</Button>

      {/* <button onClick={clicked}>Cliquer!</button> */}
    </div>
  );
}
