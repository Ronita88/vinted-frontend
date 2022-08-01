import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="logo">
      <img src="./assets/img/trip.png" alt="logo" />
      <Link to="/signup">
        <button>s'inscrire</button>
      </Link>

      <Link to="/login">
        <button>se connecter</button>
      </Link>

      <Link to>
        <button>déconnexion</button>
      </Link>

      <button>vends tes articles</button>
    </div>
  );
};

export default Header;
