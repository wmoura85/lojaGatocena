import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Produtos from './Produtos';
import Rodape from './Rodape';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Banner />
      <Produtos />
      <Rodape />
    </div>
  );
};

export default App;

