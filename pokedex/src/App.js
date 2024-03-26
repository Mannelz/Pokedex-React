import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  const [pokemon, setPokemon] = useState();
  console.log(pokemon.name);

  return (
    <div className="App">
      <NavBar setPokemon={setPokemon} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
