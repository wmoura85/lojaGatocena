import React from 'react';
import Button from './Button';
import { useApp } from '../context/AppContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useApp();

  return (
    <div className="relative group">
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-800">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-white">{product.name}</h3>
          <p className="mt-1 text-sm text-text-secondary">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-primary">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      </div>
      <div className="mt-4">
        <Button 
          variant="primary"
          onClick={() => addToCart(product)}
          className="w-full"
        >
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
};

export default ProductCard; 