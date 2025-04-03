import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary">GatoCena</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Sua loja de camisetas com gatos inspiradas em séries, filmes e álbuns famosos.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Links Úteis</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <Link to="/produtos" className="text-sm text-text-secondary hover:text-primary">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm text-text-secondary hover:text-primary">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-sm text-text-secondary hover:text-primary">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary">Contato</h3>
            <ul className="mt-2 space-y-1">
              <li className="text-sm text-text-secondary">
                Email: contato@gatocena.com
              </li>
              <li className="text-sm text-text-secondary">
                Telefone: (11) 99999-9999
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-text-secondary/20 pt-8">
          <p className="text-sm text-text-secondary text-center">
            © {new Date().getFullYear()} GatoCena. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 