import React from 'react';
import Swal from 'sweetalert2';

const ButtonClick = () => {
  const handleClick = () => {

    Swal.fire({
      title: '¡Botón clickeado!',
      text: 'Has presionado el botón correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'btn-confirm',
      },
      buttonsStyling: false, 
    });
  };

  return (
    <div id="button-click-container">
      <button className="btn" onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ButtonClick;
