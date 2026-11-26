
import "./App.css";

import Header from "./compenant/header/header";
import Acceuil from "./compenant/acceuil/acceuil";
import Footer from "./compenant/footer/footer";
import PizzaDetails from "./compenant/PizzaDetails/PizzaDetails";
import Signup from "./compenant/signup/signup";

import { Routes, Route } from "react-router-dom";
import PizzaList from "./compenant/PizzaList";

// Composant qui représente la page d'accueil
function HomePage() {
  return (
    <div className="app">
      <section className="hero">
        <div className="hero-overlay"></div>

        <Header />
        <Acceuil />
      </section>
<PizzaList />
      <Footer />
    </div>
  
  );
}

// Composant principal de l'application
function App() {
  return (
    <Routes>
      {/* Route de la page d'accueil */}
      <Route path="/" element={<HomePage />} />

      {/* Route de la page d'inscription */}
      <Route path="/signup" element={<Signup />} />
      <Route
      path="/pizza/:id"
      element={<PizzaDetails />}
/>
    
    </Routes>
  );
}

export default App;
