
import "./App.css";

import Header from "./compenant/header/header";
import Accueil from "./compenant/accueil/accueil";
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
        <Accueil />
      </section> 
      <Footer />
    </div>
  
  );
}

// Page indépendante du menu des pizzas
function MenuPage() {
  return (
    <div className="app">
      <Header />

      <PizzaList />

      <Footer />
    </div>
  );
}




// Composant principal de l'application
function App() {
  return (
    <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/pizza/:id" element={<PizzaDetails />}/>
       <Route path="/menu" element={<MenuPage />} />
    
    </Routes>
  );
}

export default App;
