
import { useParams, Link } from "react-router-dom";
import styles from "./PizzaDetails.module.css";

import neptune from "../../assets/images/thon.png";
import margherita from "../../assets/images/Margherita .png";
import pepperoni from "../../assets/images/pepperoni .png";
import fromages from "../../assets/images/fromage.png";

function PizzaDetails() {

  const { id } = useParams();

  // Les mêmes pizzas que dans PizzaList.jsx
  const pizzas = [
    {
      id: 1,
      nom: "Neptune",
      description: "Thon et fromage",
      prix: 18.900,
      image: neptune,

      ingredients: [
        "Sauce tomate",
        "Thon",
        "Mozzarella",
        "Olives",
        "Origan"
      ],

      caracteristiques: {
        categorie: "Pizza classique",
        taille: "Moyenne",
        base: "Sauce tomate",
        cuisson: "Four traditionnel"
      }
    },

    {
      id: 2,
      nom: "Margherita",
      description: "Tomate et mozzarella",
      prix: 12.500,
      image: margherita,

      ingredients: [
        "Sauce tomate",
        "Mozzarella",
        "Basilic",
        "Huile d'olive"
      ],

      caracteristiques: {
        categorie: "Pizza végétarienne",
        taille: "Moyenne",
        base: "Sauce tomate",
        cuisson: "Four traditionnel"
      }
    },

    {
      id: 3,
      nom: "Pepperoni",
      description: "Pepperoni et fromage",
      prix: 16.500,
      image: pepperoni,

      ingredients: [
        "Sauce tomate",
        "Pepperoni",
        "Mozzarella",
        "Origan"
      ],

      caracteristiques: {
        categorie: "Pizza classique",
        taille: "Moyenne",
        base: "Sauce tomate",
        cuisson: "Four traditionnel"
      }
    },

    {
      id: 4,
      nom: "4 Fromages",
      description: "Mélange de fromages",
      prix: 17.500,
      image: fromages,

      ingredients: [
        "Mozzarella",
        "Gorgonzola",
        "Parmesan",
        "Emmental",
        "Crème fraîche"
      ],

      caracteristiques: {
        categorie: "Pizza végétarienne",
        taille: "Moyenne",
        base: "Crème fraîche",
        cuisson: "Four traditionnel"
      }
    }
  ];

  // Rechercher la pizza selon son identifiant
  const pizza = pizzas.find(
    (p) => p.id === Number(id)
  );

  // Si la pizza n'existe pas
  if (!pizza) {
    return (
      <div className={styles.notFound}>
        <h1>Pizza introuvable !</h1>

        <Link to="/">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.detailsPage}>

      <div className={styles.detailsContainer}>

        {/* Image de la pizza */}
        <div className={styles.imageSection}>
          <img
            src={pizza.image}
            alt={pizza.nom}
          />
        </div>

        {/* Informations de la pizza */}
        <div className={styles.infoSection}>

          <span className={styles.subtitle}>
            PIZZA PETE'S
          </span>

          <h1>{pizza.nom}</h1>

          <p className={styles.description}>
            {pizza.description}
          </p>

          {/* Ingrédients */}
          <h2>Nos ingrédients</h2>

          <ul className={styles.ingredientsList}>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient}
              </li>
            ))}
          </ul>

          {/* Caractéristiques */}
          <h2>Caractéristiques</h2>

          <div className={styles.characteristics}>

            <p>
              <strong>Catégorie :</strong>
              {pizza.caracteristiques.categorie}
            </p>

            <p>
              <strong>Taille :</strong>
              {pizza.caracteristiques.taille}
            </p>

            <p>
              <strong>Base :</strong>
              {pizza.caracteristiques.base}
            </p>

            <p>
              <strong>Cuisson :</strong>
              {pizza.caracteristiques.cuisson}
            </p>

          </div>

          {/* Prix */}
          <div className={styles.price}>
            {pizza.prix.toFixed(3)} DT
          </div>

          {/* Retour */}
          <Link to="/#menu" className={styles.backBtn}>
            ← Retour aux pizzas
          </Link>

        </div>

      </div>

    </div>
  );
}

export default PizzaDetails;
