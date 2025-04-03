import { addProduct, updateProduct, removeProduct } from './manage-products.js';

// Exemplo de como adicionar um novo produto
addProduct({
  name: 'Cat Marvel',
  price: 59.90,
  description: 'Camiseta com gato inspirada no universo Marvel',
  image: 'camiseta7.jpg',
  category: 'Filme'
});

// Exemplo de como atualizar um produto
updateProduct(1, {
  price: 69.90,
  description: 'Camiseta com gato inspirada na série Illuminati (Atualizado)'
});

// Exemplo de como remover um produto
// removeProduct(6); 