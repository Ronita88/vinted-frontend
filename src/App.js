import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import pages
import Home from "./pages/Home.js";
import Offer from "./pages/Offer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
