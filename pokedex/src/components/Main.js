// import PokeCard from "./PokeCard";

import PokeCard from "./PokeCard";

function Main({ pokemon }) {
  return (
    <main className="main">
      <h1>Hello World!</h1>
      <p>Eu sou a Main</p>
      {pokemon && <PokeCard pokemon={pokemon} />}
    </main>
  );
}

export default Main;
