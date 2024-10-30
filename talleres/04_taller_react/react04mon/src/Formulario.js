import React from 'react';

const Formulario = ({ onNumeroChange }) => {
  const handleChange = (e) => {
    onNumeroChange(e.target.value);
  };

  return (
    <div>
      <input
        type="number"
        onChange={handleChange}
        placeholder="Escribe un número"
        className="input-field"
      />
    </div>
  );
};

export default Formulario;
