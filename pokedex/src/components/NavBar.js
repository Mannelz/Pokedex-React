import logo from "../assets/images/pokemon_logo.png";
import Search from "./Search";

function NavBar() {
  return (
    <nav className="navBar">
      <Search />
      <img src={logo} alt="Logo do Pokémon"></img>
    </nav>
  );
}

export default NavBar;
