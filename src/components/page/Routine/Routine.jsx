import React from "react";
import Button from "../../ui/Button/Button";

export default function Routine() {
  function manger() {
    alert("Faut aller manger!");
  }

  function etudier() {
    alert("Faut aller etudier!");
  }

  function dormir() {
    alert("Faut aller dormir!");
  }

  function routine(text) {
    alert(text);
  }

  return (
    <div>
      <Button
        action={() => {
          routine("Faut aller manger!");
        }}
        success
      >
        Manger
      </Button>

      <Button
        danger
        outline
        action={() => {
          routine("Faut aller etudier!");
        }}
      >
        Etudier
      </Button>

      <Button
        warning
        action={() => {
          routine("Faut aller dormir!");
        }}
      >
        Dormir
      </Button>
    </div>
  );
}
