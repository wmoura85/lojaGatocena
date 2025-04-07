import camiseta1 from '../assets/camisa1.jpg';
import camiseta2 from '../assets/camisa2.jpg';
import camiseta3 from '../assets/camisa3.jpg';
import camiseta4 from '../assets/camisa4.jpg';
import camiseta5 from '../assets/camisa5.jpg';
import camiseta6 from '../assets/camisa6.jpg';

const products = [
  {
    id: 1,
    name: 'Iliminapurr',
    price: 59.90,
    description: 'Camiseta com gato inspirada na série Illuminati',
    image: camiseta1,
    category: 'Série'
  },
  {
    id: 2,
    name: 'Pulp Cat',
    price: 59.90,
    description: 'Camiseta com gato inspirada no filme Pulp Fiction',
    image: camiseta2,
    category: 'Filme'
  },
  {
    id: 3,
    name: 'Jokepurr',
    price: 59.90,
    description: 'Camiseta com gato inspirada no álbum Joker',
    image: camiseta3,
    category: 'Álbum'
  },
  {
    id: 4,
    name: 'Cat Wars',
    price: 59.90,
    description: 'Camiseta com gato inspirada na série Star Wars',
    image: camiseta4,
    category: 'Série'
  },
  {
    id: 5,
    name: 'Purr Potter',
    price: 59.90,
    description: 'Camiseta com gato inspirada na série Harry Potter',
    image: camiseta5,
    category: 'Série'
  },
  {
    id: 6,
    name: 'Cat Beatles',
    price: 59.90,
    description: 'Camiseta com gato inspirada no álbum Abbey Road',
    image: camiseta6,
    category: 'Álbum'
  }
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

export default api; 