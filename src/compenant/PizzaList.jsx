
import "./PizzaList.css";
import { Link } from "react-router-dom";
import neptune from "../assets/images/thon.png";
import margherita from "../assets/images/Margherita .png";
import pepperoni from "../assets/images/pepperoni .png";
import fromages from "../assets/images/fromage.png";

function PizzaList() {
  const pizzas = [
    {
      id: 1,
      nom: "Neptune",
      description: "Thon et fromage",
      prix: 18.900,
      image: neptune
    },
    {
      id: 2,
      nom: "Margherita",
      description: "Tomate et mozzarella",
      prix: 12.500,
      image: margherita
    },
    {
      id: 3,
      nom: "Pepperoni",
      description: "Pepperoni et fromage",
      prix: 16.500,
      image: pepperoni
    },
    {
      id: 4,
      nom: "4 Fromages",
      description: "Mélange de fromages",
      prix: 17.500,
      image: fromages
    }
  ];

  return (
    <div className="pizza-container">
      <h1>Nos Pizzas</h1>

      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <div className="pizza-card" key={pizza.id}>

            <img
              src={pizza.image}
              alt={pizza.nom}
              className="pizza-image"
            />

            <h2>{pizza.nom}</h2>

            <p>{pizza.description}</p>

            <span className="pizza-price">
              {pizza.prix.toFixed(3)} DT
            </span>
              <Link
              to={`/pizza/${pizza.id}`}
              className="details-btn"
            >
              Voir les détails
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default PizzaList;
