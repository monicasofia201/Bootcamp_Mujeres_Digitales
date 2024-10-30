import React, { useState } from 'react';
import Swal from 'sweetalert2';

const FormularioUsuario = () => {
  const [nombre, setNombre] = useState('');

  const validarNombre = (nombre) => {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/; 
    return regex.test(nombre);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre) {

      Swal.fire({
        title: 'Error',
        text: 'El campo de nombre no puede estar vacío.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton: 'btn-confirm',
        },
        buttonsStyling: false,
      });
    } else if (!validarNombre(nombre)) {

      Swal.fire({
        title: 'Error',
        text: 'El nombre solo debe contener letras y espacios.',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton: 'btn-confirm',
        },
        buttonsStyling: false,
      });
    } else {
    
      Swal.fire({
        title: '¡Hola!',
        text: `¡Hola, ${nombre}!`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton: 'btn-confirm',
        },
        buttonsStyling: false,
      });
    }
  };

  return (
    <div className="card">
      <h2>Formulario de Usuario</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <label htmlFor="nombre" className="label">Nombre: </label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="btn">Enviar</button>
      </form>
      <p className="result">Tu nombre es: {nombre}</p>
    </div>
  );
};

export default FormularioUsuario;
