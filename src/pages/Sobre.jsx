import React from 'react';
import { APP_NAME, CONTACT_INFO } from '../utils/constants';

const Sobre = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Sobre Nós</h1>
      
      <div className="prose max-w-none">
        <p className="mb-4">
          Bem-vindo à {APP_NAME}! Somos uma loja especializada camisetas legais com gatinhos fofos em artes icônicas
          de filmes, séries e albuns musicais.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Nossa Missão</h2>
        <p className="mb-4">
          Nossa missão é fornecer produtos de alta qualidade para os amantes de gatos e cultura pop, garantindo
          o bem-estar e a felicidade de todos.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Nossos Valores</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Qualidade em primeiro lugar</li>
          <li>Atendimento personalizado</li>
          <li>Compromisso com o bem-estar animal</li>
          <li>Sustentabilidade e responsabilidade social</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Contato</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p><strong>Email:</strong> {CONTACT_INFO.email}</p>
          <p><strong>Telefone:</strong> {CONTACT_INFO.phone}</p>
          <p><strong>Endereço:</strong> {CONTACT_INFO.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Sobre; 