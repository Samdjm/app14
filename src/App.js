import "./App.css";
import Header from "./components/container/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/page/Home/Home";
import Profil from "./components/page/Profil/Profil";
import Routine from "./components/page/Routine/Routine";
import Counter from "./components/page/Counter/Counter";
import Auth from "./components/page/Auth/Auth";

function App() {
  let utilisateur = {
    prenom: "Samy",
    nom: "Djemai",
    cours: [
      {
        nom: "HTML",
        isDone: true,
        icon: "https://img.icons8.com/color/344/html-5--v1.png",
      },
      {
        nom: "CSS",
        isDone: true,
        icon: "https://img.icons8.com/color/344/css3.png",
      },
      {
        nom: "Javascript",
        isDone: true,
        icon: "https://img.icons8.com/color/344/javascript--v1.png",
      },
      {
        nom: "React",
        isDone: false,
        icon: "https://img.icons8.com/officel/344/react.png",
      },
    ],
  };

  return (
    <div className='App'>
      <BrowserRouter>
        <Header title='Une application avec React!' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profil' element={<Profil user={utilisateur} />} />
          <Route path='/routine' element={<Routine />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// 3.6/ Exercice 2:

// Créez un composant ./components/container/User/User: props = user= utilisateur

// Ce composant comprendra 2 autres composants:
// 1-./components/ui/FullName/FullName: un composant contenant lui aussi deux composants:
//    1.1- ./components/ui/FirstName/FirstName: affiche un prénom / Inline style
//    1.2- ./components/ui/LastName/LastName: affiche un nom / Inline style
// 2- ./components/ui/Hobbies/Hobbies: un composant contenant un liste de passions / Les modules css
