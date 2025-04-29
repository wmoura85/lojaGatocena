import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { APP_NAME, NAVIGATION_ITEMS } from '../utils/constants';
import { useApp } from '../context/AppContext';
import { authService } from '../services/authService';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useApp();
  const user = authService.getCurrentUser();

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <nav className="bg-background shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt={APP_NAME} className="h-8 w-8" />
            <span className="text-2xl font-bold text-white">{APP_NAME}</span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-text-secondary hover:text-white transition-colors ${
                  location.pathname === item.path ? 'text-white font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            {/* Carrinho */}
            <Link to="/carrinho" className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-text-secondary hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Login/Usuário */}
            <div className="relative group">
              {user ? (
                <div className="flex items-center space-x-2">
                  <button
                    className="flex items-center space-x-2 text-text-secondary hover:text-white"
                    onClick={() => {}}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="text-sm">{user.user?.name || 'Usuário'}</span>
                  </button>
                  {/* Dropdown menu */}
                  <div className="absolute right-0 top-full mt-2 w-48 bg-background rounded-md shadow-lg py-1 hidden group-hover:block">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-text-secondary hover:text-white hover:bg-gray-700"
                    >
                      Sair
                    </button>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-2 text-text-secondary hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className="text-sm">Entrar</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
