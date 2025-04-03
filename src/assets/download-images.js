import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    name: 'camisa1',
    url: 'https://placehold.co/400x400/f0f0f0/333333/png?text=Iliminapurr'
  },
  {
    name: 'camisa2',
    url: 'https://placehold.co/400x400/f0f0f0/333333/png?text=Pulp+Cat'
  },
  {
    name: 'camisa3',
    url: 'https://placehold.co/400x400/f0f0f0/333333/png?text=Jokepurr'
  },
  {
    name: 'camisa4',
    url: 'https://placehold.co/400x400/f0f0f0/333333/png?text=Cat+Wars'
  },
  {
    name: 'camisa5',
    url: 'https://placehold.co/400x400/f0f0f0/333333/png?text=Purr+Potter'
  },
  {
    name: 'camisa6',
    url: 'https://placehold.co/400x400/f0f0f0/333333/png?text=Cat+Beatles'
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

const downloadAllImages = async () => {
  for (const image of images) {
    const filepath = path.join(__dirname, `${image.name}.jpg`);
    try {
      await downloadImage(image.url, filepath);
      console.log(`Downloaded: ${image.name}`);
    } catch (error) {
      console.error(`Error downloading ${image.name}:`, error);
    }
  }
};

downloadAllImages(); 