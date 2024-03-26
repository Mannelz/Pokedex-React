import { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import Pokedex from "./Pokedex";
import { PegarPokemons, ProcurarPor } from "../PokeApi";

function Main({ pokemon }) {
  const [pokedex, setPokedex] = useState([]);

  const CriarPokedex = async () => {
    try {
      const pokemons = await PegarPokemons();
      const promises = pokemons.results.map(async (pokemon) => {
        return await ProcurarPor(pokemon.name);
      });

      const result = await Promise.all(promises);
      setPokedex(result);
    } catch (error) {
      console.log("Erro ao gerar pokedex: ", error);
    }
  };

  useEffect(() => {
    CriarPokedex();
  }, []);

  return (
    <main className="main">
      <h1>Hello World!</h1>
      <p>Eu sou a Main</p>
      {pokemon ? <PokeCard pokemon={pokemon} /> : <Pokedex pokedex={pokedex} />}
    </main>
  );
}

export default Main;
