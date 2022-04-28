//rfc: React Functional Composant

export default function Home() {
  function clicked() {
    console.log("Clickeeedd!!!");
  }

  return (
    <div>
      <p> Home</p>

      <button onClick={clicked}>Cliquer!</button>
    </div>
  );
}
