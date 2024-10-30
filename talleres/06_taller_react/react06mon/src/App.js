import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ReduxContador from './components/ReduxContador';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import Contador from './components/Contador';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import './css/App.css'; 

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/inicio">Inicio</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
              </ul>
            </nav>

            <ThemeSwitcher />

            <Routes>
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/sobre" element={<Sobre />} />
            </Routes>

            <Contador />
            <ReduxContador />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

function ThemeSwitcher() {
  const { tema, toggleTema } = useTheme();
  return (
    <div style={{ background: tema === 'claro' ? '#fff' : '#333', color: tema === 'claro' ? '#000' : '#fff' }}>
      <p>El tema actual es {tema}</p>
      <button onClick={toggleTema}>Cambiar tema</button>
    </div>
  );
}


export default App;
