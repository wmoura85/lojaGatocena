import React from "react";
import logo from "./assets/logo.jpg"; // Importando a logo

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo e Nome do Site */}
        <div className="flex items-center space-x-4">
          <a href="/">
            <img src={logo} alt="Logo" className="h-12" />
          </a>
          <h1 className="text-2xl font-bold">The Catverse</h1>
        </div>

        {/* Links de Navegação */}
        <ul className="flex space-x-6">
          <li className="cursor-pointer hover:text-gray-400">Filmes</li>
          <li className="cursor-pointer hover:text-gray-400">Séries</li>
          <li className="cursor-pointer hover:text-gray-400">Álbuns</li>
          <li className="cursor-pointer hover:text-gray-400">Gatos</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
