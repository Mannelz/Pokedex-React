import { useState } from "react";
import { ProcurarPor } from "../PokeApi";

function Search({ setPokemon }) {
  const [search, setSearch] = useState();

  const searchBy = () => {
    searchByAPI(search);
  };

  const searchByAPI = async (pokemon) => {
    const result = await ProcurarPor(pokemon);
    setPokemon(result);
    console.log(result);
  };

  return (
    <div className="search">
      <div>
        <label>Nome ou número do pokémon: </label>
      </div>

      <div id="search-in">
        <input
          placeholder="procurar..."
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button id="pokeball_btn" onClick={searchBy}></button>
      </div>
    </div>
  );
}

export default Search;
