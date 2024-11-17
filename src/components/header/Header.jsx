import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header({ toggleMode }) {
  return (
    <div>
      <nav>
        <h3>Man J</h3>
        <FontAwesomeIcon icon={faMoon} onClick={toggleMode} id="theme" />
      </nav>
    </div>
    
  );
}

export default Header;
