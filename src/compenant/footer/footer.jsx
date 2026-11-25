
import React from 'react';
import styles from './footer.module.css';

// Importation du logo
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.footerContent}>

        {/* 1. Présentation du restaurant */}
        <div className={styles.footerSection}>

          <img
            src={logo}
            alt="Pizza Pete's"
            className={styles.logo}
          />

          <p>
            Bienvenue chez Pizza Pete's ! Nous vous proposons de délicieuses
            pizzas préparées avec des ingrédients frais et
            beaucoup de passion. Savourez le goût authentique de la pizza
            et venez partager avec nous des moments inoubliables !
          </p>

        </div>

        {/* 2. Nos localisations */}
        <div className={styles.footerSection}>

          <h3>Nos Localisations</h3>
            
              <a href="#" target="_blank">📍 Bizerte Centre Ville 7000 </a>
         </div>

        {/* 3. Contact et WhatsApp */}
        <div className={styles.footerSection}>

          <h3>Contact Us</h3>

          <p>Service Client</p>

          <a href="tel:+21621345678">
            📞 +216 21 345 678
          </a>

          <p className={styles.whatsapp}>
            <a href="#" target="_blank" rel="noreferrer">
              💬 Contact us on WhatsApp
            </a>
          </p>

        </div>

        {/* 4. Réseaux sociaux */}
        <div className={styles.footerSection}>

          <h3>Follow Us</h3>

          <div className={styles.socialLinks}>

            <a href="#" target="_blank" rel="noreferrer">
              Facebook
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              Instagram
            </a>

          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className={styles.footerBottom}>
        <p>© 2026 Pizza Pete's. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;
