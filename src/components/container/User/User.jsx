import MenuSecret from "../../hoc/MenuSecret/MenuSecret";
import FullName from "../../ui/FullName/FullName";
import Hobbies from "../../ui/Hobbies/Hobbies";

export default function User() {
  return (
    <div style={{ backgroundColor: "rgb(50, 50 ,55)", padding: "20px" }}>
      <FullName />
      <MenuSecret
        labelOpen={"Cacher les cours"}
        labelClose={"Afficher les cours"}
      >
        <Hobbies />
      </MenuSecret>
    </div>
  );
}

//Exercice:
//1- Créer une variable d'état isMenuShown, initialisée a false
//2- Ajouter un bouton: On execute une fonction qui changerai la variable de true a false, ou de false a true
//3- Utiliser un opérateur ternaire pour afficher ou non le menu secret.
