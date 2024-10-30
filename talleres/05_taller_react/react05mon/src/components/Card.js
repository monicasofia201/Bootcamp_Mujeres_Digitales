/*
Tarea 3: Crea un componente llamado Card utilizando CSS 
Modules. Aplica estilos locales al contenedor de la tarjeta, el 
título, la descripción y el botón dentro de la tarjeta.
*/


import React from 'react';
import styles from '../css/Card.module.css';
import bombomImage from '../img/bombom.jpeg'; 
const Card = () => {
  return (
    <div className={styles.card}>
      <img src={bombomImage} alt="Burbuja" className={styles.image} /> 
      <h2 className={styles.title}>Burbuja</h2> 
      <p className={styles.description}>
        ¡Soy Burbuja, la más dulce de las Chicas Superpoderosas! Me encantan los animales, las flores y, sobre todo, ¡mis hermanas! 
        Aunque soy dulce, también soy muy fuerte y valiente cuando la situación lo requiere.
      </p> 
      <button className={styles.button}>Ver Perfil</button>
    </div>
  );
};

export default Card;
