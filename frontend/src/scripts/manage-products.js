import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminhos dos arquivos
const PRODUCTS_FILE = path.join(__dirname, '../data/products.json');
const ASSETS_DIR = path.join(__dirname, '../assets');
const API_FILE = path.join(__dirname, '../services/api.js');

// Função para ler o arquivo de produtos
function readProducts() {
  const data = fs.readFileSync(PRODUCTS_FILE, 'utf8');
  return JSON.parse(data);
}

// Função para salvar o arquivo de produtos
function saveProducts(products) {
  fs.writeFileSync(PRODUCTS_FILE, JSON.stringify({ products }, null, 2));
}

// Função para gerar o arquivo api.js
function generateApiFile(products) {
  const imports = products.map((product, index) => 
    `import camiseta${index + 1} from '../assets/${product.image}';`
  ).join('\n');

  const productsArray = products.map((product, index) => `
  {
    id: ${product.id},
    name: '${product.name}',
    price: ${product.price},
    description: '${product.description}',
    image: camiseta${index + 1},
    category: '${product.category}'
  }`).join(',');

  const apiContent = `${imports}

const products = [
${productsArray}
];

const api = {
  getProducts: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  }
};

export default api;`;

  fs.writeFileSync(API_FILE, apiContent);
}

// Função para adicionar um novo produto
function addProduct(product) {
  const data = readProducts();
  const newId = Math.max(...data.products.map(p => p.id)) + 1;
  data.products.push({ ...product, id: newId });
  saveProducts(data.products);
  generateApiFile(data.products);
}

// Função para atualizar um produto
function updateProduct(id, updates) {
  const data = readProducts();
  data.products = data.products.map(product => 
    product.id === id ? { ...product, ...updates } : product
  );
  saveProducts(data.products);
  generateApiFile(data.products);
}

// Função para remover um produto
function removeProduct(id) {
  const data = readProducts();
  data.products = data.products.filter(product => product.id !== id);
  saveProducts(data.products);
  generateApiFile(data.products);
}

// Exemplo de uso:
// addProduct({
//   name: 'Novo Produto',
//   price: 79.90,
//   description: 'Descrição do novo produto',
//   image: 'novo-produto.jpg',
//   category: 'Série'
// });

export { addProduct, updateProduct, removeProduct }; 