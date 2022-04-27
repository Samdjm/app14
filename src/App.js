import logo from "./logo.svg";
import "./App.css";
import TroisiemmeComposant, {
  PremierComposant,
  ComposantBonjour,
} from "./components/ui/PremierComposant/PremierComposant";
import Header from "./components/container/Header/Header";

function App() {
  let utilisateur = {
    prenom: "Samy",
    nom: "Djemai",
    hobbies: ["Programmation", "Graphisme", "Dessin"],
  };

  return (
    <div className='App'>
      <Header title='Une application avec React!' />
      <PremierComposant />
      <ComposantBonjour user={utilisateur} isPermis={false} />
      <TroisiemmeComposant />
    </div>
  );
}

export default App;
