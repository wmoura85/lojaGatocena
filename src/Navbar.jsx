import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">GatoCena</h1>
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
