
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./signup.module.css";

function Signup() {

  // Stocker les valeurs saisies dans le formulaire
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    username: "",
    telephone: "",
    password: "",
    confirmPassword: ""
  });

  // Gérer les modifications des champs
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  // Vérifier et traiter le formulaire
  function handleSubmit(e) {
    e.preventDefault();

    // Vérifier si les deux mots de passe sont identiques
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    // Pour le moment, simulation côté frontend uniquement
    alert("Votre compte a été créé avec succès !");

    // Vider le formulaire après la validation
    setFormData({
      nom: "",
      prenom: "",
      username: "",
      telephone: "",
      password: "",
      confirmPassword: ""
    });
  }

  return (
    <div className={styles.signupPage}>

      <div className={styles.signupBox}>

        <h1>Créer un compte</h1>
        <p className={styles.subtitle}>
          Rejoignez Pizza Pete's !
        </p>

        <form onSubmit={handleSubmit}>

          <div className={styles.inputGroup}>
            <label>Nom</label>
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Prénom</label>
            <input
              type="text"
              name="prenom"
              placeholder="Votre prénom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Choisissez un username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Numéro de téléphone</label>
            <input
              type="tel"
              name="telephone"
              placeholder="Votre numéro de téléphone"
              value={formData.telephone}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Mot de passe</label>
            <input
              type="password"
              name="password"
              placeholder="Créer un mot de passe"
              value={formData.password}
              onChange={handleChange}
              minLength="8"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Confirmer le mot de passe</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmer votre mot de passe"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.createBtn}>
            Créer mon compte
          </button>

        </form>

        <p className={styles.loginText}>
          Vous avez déjà un compte ?
          {" "}
          <Link to="/">Retour à l'acceuil</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;
