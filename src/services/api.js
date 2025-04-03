import camiseta1 from '../assets/camisa1.jpg';
import camiseta2 from '../assets/camisa2.jpg';
import camiseta3 from '../assets/camisa3.jpg';
import camiseta4 from '../assets/camisa4.jpg';
import camiseta5 from '../assets/camisa5.jpg';
import camiseta6 from '../assets/camisa6.jpg';

const API_BASE_URL = 'https://api.gatocena.com'; // Exemplo de URL base

const api = {
  async getProducts() {
    try {
      // Simulando uma chamada à API
      return [
        {
          id: 1,
          name: 'Iliminapurr',
          price: 59.90,
          description: 'Camiseta com gato inspirada na série Illuminati',
          image: camiseta1,
          category: 'Série',
        },
        {
          id: 2,
          name: 'Pulp Cat',
          price: 59.90,
          description: 'Camiseta com gato inspirada no filme Pulp Fiction',
          image: camiseta2,
          category: 'Filme',
        },
        {
          id: 3,
          name: 'Jokepurr',
          price: 59.90,
          description: 'Camiseta com gato inspirada no álbum Joker',
          image: camiseta3,
          category: 'Álbum',
        },
        {
          id: 4,
          name: 'Cat Wars',
          price: 59.90,
          description: 'Camiseta com gato inspirada na série Star Wars',
          image: camiseta4,
          category: 'Série',
        },
        {
          id: 5,
          name: 'Purr Potter',
          price: 59.90,
          description: 'Camiseta com gato inspirada na série Harry Potter',
          image: camiseta5,
          category: 'Série',
        },
        {
          id: 6,
          name: 'Cat Beatles',
          price: 59.90,
          description: 'Camiseta com gato inspirada no álbum Abbey Road',
          image: camiseta6,
          category: 'Álbum',
        },
      ];
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      throw error;
    }
  },

  async getProductById(id) {
    try {
      // Simulando uma chamada à API
      const products = await this.getProducts();
      return products.find(product => product.id === id);
    } catch (error) {
      console.error('Erro ao buscar produto:', error);
      throw error;
    }
  },

  async getProductsByCategory(category) {
    try {
      // Simulando uma chamada à API
      const products = await this.getProducts();
      return products.filter(product => product.category === category);
    } catch (error) {
      console.error('Erro ao buscar produtos por categoria:', error);
      throw error;
    }
  },

  async createOrder(orderData) {
    try {
      // Simulando uma chamada à API
      console.log('Dados do pedido:', orderData);
      return {
        id: Math.random().toString(36).substr(2, 9),
        status: 'pending',
        ...orderData,
      };
    } catch (error) {
      console.error('Erro ao criar pedido:', error);
      throw error;
    }
  },
};

export default api; 