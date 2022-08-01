import { Link } from "react-router-dom";
import logo from "../assets/img/Vinted_logo.png";

const Header = ({ handleToken }) => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <Link to="/signup">
        <button>s'inscrire</button>
      </Link>

      <Link to="/login">
        <button>se connecter</button>
      </Link>

      <Link to>
        <button
          onClick={() => {
            handleToken();
          }}
        >
          déconnexion
        </button>
      </Link>
    </div>
  );
};

export default Header;
