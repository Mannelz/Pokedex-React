import logo from "../assets/images/pokemon_logo.png";
import Search from "./Search";

function NavBar({ setPokemon }) {
  return (
    <nav className="navBar">
      <Search setPokemon={setPokemon} />
      <img src={logo} alt="Logo do Pokémon"></img>
    </nav>
  );
}

export default NavBar;
