import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    url: 'https://placehold.co/400x400/FF6B6B/FFFFFF?text=Iliminapurr',
    filename: 'camisa1.jpg'
  },
  {
    url: 'https://placehold.co/400x400/4ECDC4/FFFFFF?text=Pulp+Cat',
    filename: 'camisa2.jpg'
  },
  {
    url: 'https://placehold.co/400x400/FFE66D/000000?text=Jokepurr',
    filename: 'camisa3.jpg'
  },
  {
    url: 'https://placehold.co/400x400/FF6B6B/FFFFFF?text=Cat+Wars',
    filename: 'camisa4.jpg'
  },
  {
    url: 'https://placehold.co/400x400/4ECDC4/FFFFFF?text=Purr+Potter',
    filename: 'camisa5.jpg'
  },
  {
    url: 'https://placehold.co/400x400/FFE66D/000000?text=Cat+Beatles',
    filename: 'camisa6.jpg'
  },
  {
    url: 'https://placehold.co/400x400/FF6B6B/FFFFFF?text=Cat+Queen',
    filename: 'camisa7.jpg'
  },
  {
    url: 'https://placehold.co/400x400/4ECDC4/FFFFFF?text=Cat+Friends',
    filename: 'camisa8.jpg'
  },
  {
    url: 'https://placehold.co/400x400/FFE66D/000000?text=Cat+Pink+Floyd',
    filename: 'camisa9.jpg'
  },
  {
    url: 'https://placehold.co/400x400/FF6B6B/FFFFFF?text=Cat+Matrix',
    filename: 'camisa10.jpg'
  }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    });
  });
};

async function downloadAllImages() {
  const publicDir = path.join(__dirname, '../../public');
  
  // Cria o diretório public se não existir
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  for (const image of images) {
    const filepath = path.join(publicDir, image.filename);
    try {
      await downloadImage(image.url, filepath);
      console.log(`Imagem ${image.filename} baixada com sucesso!`);
    } catch (error) {
      console.error(`Erro ao baixar ${image.filename}:`, error.message);
    }
  }
}

downloadAllImages(); 