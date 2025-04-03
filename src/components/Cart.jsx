import React from 'react';
import Button from './Button';
import { useApp } from '../context/AppContext';

const Cart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, total } = useApp();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed inset-y-0 right-0 max-w-xl w-full bg-background shadow-xl">
        <div className="h-full flex flex-col">
          <div className="px-4 py-6 sm:px-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-white">Carrinho de Compras</h2>
              <button
                onClick={onClose}
                className="text-text-secondary hover:text-white"
              >
                <span className="sr-only">Fechar</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 px-4 py-6 sm:px-6 overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-text-secondary text-center">Seu carrinho está vazio</p>
            ) : (
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-text-secondary/20">
                  {cart.map((item) => (
                    <li key={item.id} className="py-6 flex">
                      <div className="flex-shrink-0 w-24 h-24 border border-text-secondary/20 rounded-md overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-1 flex flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-white">
                            <h3>{item.name}</h3>
                            <p className="ml-4 text-primary">{item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                          </div>
                          <p className="mt-1 text-sm text-text-secondary">{item.category}</p>
                        </div>
                        <div className="flex-1 flex items-end justify-between text-sm">
                          <div className="flex items-center">
                            <label htmlFor={`quantity-${item.id}`} className="mr-2 text-text-secondary">
                              Quantidade
                            </label>
                            <select
                              id={`quantity-${item.id}`}
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                              className="bg-gray-800 text-white border border-text-secondary/20 rounded-md px-2 py-1"
                            >
                              {[1, 2, 3, 4, 5].map((num) => (
                                <option key={num} value={num}>
                                  {num}
                                </option>
                              ))}
                            </select>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="font-medium text-primary hover:text-secondary"
                          >
                            Remover
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="border-t border-text-secondary/20 px-4 py-6 sm:px-6">
            <div className="flex items-center justify-between">
              <p className="text-base font-medium text-white">Total</p>
              <p className="text-base font-medium text-primary">{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
            <div className="mt-6">
              <Button 
                variant="primary"
                onClick={() => {
                  // Implementar checkout
                  onClose();
                }}
                className="w-full"
              >
                Finalizar Compra
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 