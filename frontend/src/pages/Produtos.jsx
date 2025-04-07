import React from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCT_CATEGORIES } from '../utils/constants';
import api from '../services/api';

const Produtos = () => {
  const { addToCart, isLoading, setError } = useApp();
  const [products, setProducts] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState('');

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await api.getProducts();
        setProducts(data);
      } catch (error) {
        setError('Erro ao carregar produtos');
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  if (isLoading) {
    return <div className="container mx-auto p-4">Carregando...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="section-title">Nossos Produtos</h1>
      
      <div className="mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="input w-64"
        >
          <option value="">Todas as categorias</option>
          {PRODUCT_CATEGORIES.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="card">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <span className="category-badge mb-2 inline-block">
                {product.category}
              </span>
              <div className="flex justify-between items-center mt-4">
                <p className="price">
                  R$ {product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="btn btn-primary flex items-center space-x-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span>Adicionar ao Carrinho</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos; 