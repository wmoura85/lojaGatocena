import React from 'react';

const Rodape = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>© {new Date().getFullYear()} GatoCena. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Rodape;