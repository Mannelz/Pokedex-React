function PokeCard({ pokemon }) {
  let name = pokemon.name;
  let number = pokemon.id;
  let type = "teste";
  let img = pokemon.sprites.front_default;

  return (
    <div className="pokeCard">
      <img src={img} alt={name}></img>
      <div className="pokeInfo">
        <p id="id">N° {number}</p>
        <h5 id="name">{name}</h5>
        <p id="type">{type}</p>
      </div>
    </div>
  );
}

export default PokeCard;
