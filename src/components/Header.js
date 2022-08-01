import { Link } from "React-router-dom";

const Header = () => {
  return (
    <div className="logo">
      <img src="./assets/img/trip.png" alt="logo" />
      <Link>
        <button>s'inscrire</button>
      </Link>

      <Link>
        <button>se connecter</button>
      </Link>

      <Link>
        <button>déconnexion</button>
      </Link>

      <button>vends tes articles</button>
    </div>
  );
};

export default Header;
