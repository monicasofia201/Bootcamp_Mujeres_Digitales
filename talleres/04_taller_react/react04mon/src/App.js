import React, { useState } from 'react';
import ButtonClick from './ButtonClick'; 
import FormularioUsuario from './FormularioUsuario';
import Formulario from './Formulario';
import Resultado from './Resultado';
import './App.css';

function App() {
  const [numero, setNumero] = useState('');

  return (
    <div className="App">
      <h1>React de Mon: Manejo de eventos, Formularios y Lifting State Up</h1>
      
      {/* Ejercicio de ButtonClick */}
      <div className="card">
        <h2>Ejercicio 1: Manejo de Eventos</h2>
        <ButtonClick />
      </div>
      
      {/* Ejercicio de FormularioUsuario */}
      <div className="card">
        <h2>Ejercicio 2: Gestión de Formularios</h2>
        <FormularioUsuario />
      </div>
      
      {/* Ejercicio de Lifting State Up */}
      <div className="card">
        <h2>Ejercicio 3: Lifting State Up</h2>
        <Formulario onNumeroChange={setNumero} />
        <Resultado numero={numero} />
      </div>
    </div>
  );
}

export default App;
