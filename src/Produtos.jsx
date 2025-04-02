import React from 'react';
import camiseta1 from "./assets/camisa1.jpg";
import camiseta2 from "./assets/camisa2.jpg";
import camiseta3 from "./assets/camisa3.jpg";

const produtos = [
  { id: 1, nome: "Iliminapurr", categoria: "Série", imagem: camiseta1, preco: "R$ 59,90" },
  { id: 2, nome: "Pulp Cat", categoria: "Filme", imagem: camiseta2, preco: "R$ 59,90" },
  { id: 3, nome: "Jokepurr", categoria: "Álbum", imagem: camiseta3, preco: "R$ 59,90" },
];

const Produtos = () => {
  return (
    <div className="container mx-auto py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {produtos.map(produto => (
        <div key={produto.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={produto.imagem} alt={produto.nome} className="w-full h-64 object-cover"/>
          <div className="p-4">
            <h3 className="text-lg font-bold">{produto.nome}</h3>
            <p className="text-gray-600">{produto.categoria}</p>
            <span className="block mt-2 font-semibold text-gray-900">{produto.preco}</span>
            <button className="mt-4 bg-gray-800 text-white py-1 px-4 rounded hover:bg-gray-600 transition">Comprar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Produtos;