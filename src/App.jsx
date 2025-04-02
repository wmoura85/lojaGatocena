import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Produtos from './Produtos';
import Rodape from './Rodape';

const App = () => {
  return (
    <div className="bg-red-500 min-h-screen">
      <Navbar />
      <Banner />
      <Produtos />
      <Rodape />
    </div>
  );
};

export default App;
