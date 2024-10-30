/*
Tarea 4: Explora la documentación de Tailwind CSS y utiliza 
esta librería para crear un componente Header con un 
menú de navegación estilizado. Utiliza clases de Tailwind 
para darle estilo al fondo, el espaciado, y el tamaño del 
texto. 
*/

import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-[#3498db] to-[#2980b9] py-5 px-4 shadow-md">
      <div className="max-w-6xl mx-auto">
        <nav className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-white mb-4 text-shadow">Mi Sitio Web Mon</h1>
          <ul className="flex flex-wrap justify-center list-none p-0 m-0">
            {['Inicio', 'Acerca de', 'Servicios', 'Contacto'].map((item) => (
              <li key={item} className="mx-4 my-2">
                <a
                  href="#"
                  className="text-white font-medium hover:text-[#f1c40f] transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-[#f1c40f] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;