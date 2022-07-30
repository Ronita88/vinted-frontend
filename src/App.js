import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

function App() {
  return (
    <Router>
      <Routes>
        <header>
          <button>s'inscrire</button>
          <button>se connecter</button>
          <button>vends tes articles</button>
        </header>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
