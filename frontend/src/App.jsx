import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Carrinho from './pages/Carrinho';
import Navbar from './components/Navbar';
import Rodape from './components/Rodape';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-background">
        <Navbar />
        <main className="min-h-[calc(100vh-4rem)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>
        </main>
        <Rodape />
      </div>
    </Router>
  );
}

export default App;
