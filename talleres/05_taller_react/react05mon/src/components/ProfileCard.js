/*
Tarea 1: Crea un componente llamado ProfileCard que 
tenga las siguientes clases:
• profile-card: para el contenedor del perfil.
• profile-name: para el nombre del perfil.
• profile-description: para la descripción del 
perfil. Luego, crea un archivo CSS donde definas los estilos de esas 
clases y aplícalas al componente.
*/

import React from 'react';
import '../css/ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <h2 className="profile-name">
      Las Chicas Superpoderosas</h2>
      <p className="profile-description">
      Protegen la ciudad de Townsville de villanos y amenazas
      </p>
    </div>
  );
};

export default ProfileCard;

