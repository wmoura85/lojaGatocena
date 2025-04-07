import React, { createContext, useContext, useState } from 'react';
import { useCart } from '../hooks/useCart';


const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const cart = useCart();

  const value = {
    isLoading,
    setIsLoading,
    error,
    setError,
    ...cart,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp deve ser usado dentro de um AppProvider');
  }
  return context;
}; 