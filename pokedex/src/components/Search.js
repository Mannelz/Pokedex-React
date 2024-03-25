function Search() {
  return (
    <div className="search">
      <div>
        <label>Nome ou número do pokémon: </label>
      </div>

      <div id="search-in">
        <input placeholder="procurar..."></input>
        <button id="pokeball_btn"></button>
      </div>
    </div>
  );
}

export default Search;
