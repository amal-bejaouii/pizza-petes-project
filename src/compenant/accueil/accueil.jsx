
import styles from './accueil.module.css';
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <main className={styles.home} id="accueil">

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
        
        <Link to="/signup" className={styles.signup}>
          S'inscrire
        </Link>

        <a href="#login" className={styles.login}>
          Se connecter
        </a>

        <Link to="/menu" className={styles.menu}>
          Découvrez notre menu
        </Link>

      </div>

    </main>
  );
}

export default Accueil;
