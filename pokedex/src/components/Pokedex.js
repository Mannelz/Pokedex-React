import PokeCard from "./PokeCard";

function Pokedex({ pokedex }) {
  return (
    <div>
      {pokedex.map((pokemon, index) => {
        return <PokeCard pokemon={pokemon} key={index} />;
      })}
    </div>
  );
}

export default Pokedex;
