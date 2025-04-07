import { useState, useEffect } from 'react';

const CART_STORAGE_KEY = 'gatocena_cart';

//Estado inicial do carrinho
export const useCart = () => {
  const [cart, setCart] = useState([]);

  //Recupera o carrinho do localStorage
  useEffect(() => {
    //Recupera o carrinho do localStorage
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  //Adiciona um produto ao carrinho
  const addToCart = (product) => {
    setCart((prevCart) => {
      //Verifica se o produto já existe no carrinho
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        //Se existir, atualiza a quantidade
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      //Se não existir, adiciona o produto ao carrinho
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  //Remove um produto do carrinho
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  //Atualiza a quantidade de um produto no carrinho
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  //Limpa o carrinho
  const clearCart = () => {
    setCart([]);
  };

  //Calcula o total do carrinho
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
  };
}; 