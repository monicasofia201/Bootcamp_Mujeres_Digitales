import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

/*
Se DESACTIVA "StrictMode" puesto que algunos componentes pueden montarse y desmontarse más de una vez en modo de desarrollo, 
lo que provoca que ciertos mensajes en la consola se repitan. Esto es parte del diseño de StrictMode para ayudar a detectar problemas con el ciclo de vida de los componentes.
*/ 
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
