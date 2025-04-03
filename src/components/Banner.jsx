import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Camisetas com Gatos
        </h1>
        <p className="mt-6 text-xl text-text-secondary max-w-3xl">
          Descubra nossa coleção exclusiva de camisetas com gatos inspiradas em séries, filmes e álbuns famosos.
        </p>
        <div className="mt-10">
          <Button 
            variant="primary"
            onClick={() => navigate('/produtos')}
          >
            Ver Produtos
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;