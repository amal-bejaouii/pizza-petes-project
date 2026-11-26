
import React from 'react';

// Importation du CSS Module
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
          <img
          src="/src/assets/logo.png"
          alt="Logo Pizza Pete's"
         />
         <h2>Pizza Pete's<span>.</span></h2>
      </div>
      <nav className={styles.navbar}>
        <a href="#accueil">Accueil</a>
        <a href="#menu">Menu</a>
        <a href="#commande">Commande</a>
        <a href="#apropos">À propos</a>
        <a href="#contact">Contact</a>
      </nav>

    </header>
  );
}

export default Header;
