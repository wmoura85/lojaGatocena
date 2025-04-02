import React from 'react';

const Banner = () => {
  return (
    <div className="bg-[url('https://via.placeholder.com/1200x400')] bg-cover bg-center text-center py-20">
      <h2 className="text-5xl font-bold text-white">Camisetas únicas com Gatos!</h2>
      <p className="text-white text-xl mt-4">Estampas inspiradas nos seus filmes, séries e álbuns favoritos.</p>
      <button className="mt-8 bg-gray-900 text-white py-2 px-6 rounded hover:bg-gray-700 transition">Veja mais</button>
    </div>
  );
};

export default Banner;