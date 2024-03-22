import github_icon from "../assets/images/github.svg";
import linkedin_icon from "../assets/images/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="socialMedias">
        <div id="github">
          <img src={github_icon}></img>
          <a href="https://github.com/Mannelz">Mannelz</a>
        </div>

        <div id="linkedin">
          <img src={linkedin_icon}></img>
          <a href="https://www.linkedin.com/in/emannuel-martins-costa/">
            Emannuel M. da Costa
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
