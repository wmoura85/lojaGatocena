import React from 'react';
import { useApp } from '../context/AppContext';

const Carrinho = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useApp();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Carrinho de Compras</h1>
        <p className="text-gray-600">Seu carrinho está vazio.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Carrinho de Compras</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md mb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">R$ {item.price.toFixed(2)}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <label htmlFor={`quantity-${item.id}`} className="text-sm">
                    Quantidade:
                  </label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 p-1 border rounded"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remover
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">
                  R$ {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-semibold mb-4 text-white">Resumo do Pedido</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-white">
              <span>Subtotal</span>
              <span>R$ {getCartTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-white">
              <span>Frete</span>
              <span>Grátis</span>
            </div>
            <div className="border-t border-text-secondary/20 pt-2 mt-2">
              <div className="flex justify-between font-semibold text-white">
                <span>Total</span>
                <span>R$ {getCartTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-primary text-white py-2 px-4 rounded-md mt-6 hover:bg-secondary transition-colors">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrinho; 