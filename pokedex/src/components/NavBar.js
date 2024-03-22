import logo from "../assets/images/pokemon_logo.png";

function NavBar() {
  return (
    <nav className="navBar">
      <img src={logo} alt="Logo do Pokémon"></img>
    </nav>
  );
}

export default NavBar;
