import React, { useState } from 'react';
import { CONTACT_INFO } from '../utils/constants';

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para enviar o formulário
    console.log('Form data:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-white">Entre em Contato</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">Informações de Contato</h2>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="mb-2 text-white"><strong>Email:</strong> {CONTACT_INFO.email}</p>
            <p className="mb-2 text-white"><strong>Telefone:</strong> {CONTACT_INFO.phone}</p>
            <p className="mb-2 text-white"><strong>Endereço:</strong> {CONTACT_INFO.address}</p>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-text-secondary/20 bg-gray-800 text-white shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-text-secondary/20 bg-gray-800 text-white shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white">
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-text-secondary/20 bg-gray-800 text-white shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full rounded-md border-text-secondary/20 bg-gray-800 text-white shadow-sm focus:border-primary focus:ring-primary"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato; 