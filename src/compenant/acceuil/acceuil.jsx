
import styles from './acceuil.module.css';
import { Link } from "react-router-dom";

function Acceuil() {
  return (
    <main className={styles.home} id="acceuil">

      <span className={styles.subtitle}>
        BIENVENUE CHEZ PIZZA PETE'S
      </span>

      <h1>
        Trouver la meilleure
        <br />
        <span>Pizza pour vous!</span>
      </h1>

      <h2>
        Ingrédients Frais, Goût Authentique.
      </h2>

      <p>
        Découvrez le délicieux goût de la pizza préparée fraîchement,
        fabriquée avec des ingrédients de qualité et une passion pour la
        cuisine italienne. Chaque tranche vous offre une expérience unique!
      </p>

      <div className={styles.buttons}>

        {/* Ouvrir la page d'inscription */}
        <Link to="/signup" className={styles.signup}>
          Sign Up
        </Link>

        <a href="#login" className={styles.login}>
          Login
        </a>

        <a href="#menu" className={styles.menu}>
          Explore Our Menu
        </a>

      </div>

    </main>
  );
}

export default Acceuil;
