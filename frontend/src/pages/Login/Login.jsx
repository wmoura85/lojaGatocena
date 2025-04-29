import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await authService.login(email, password);
            console.log('Login bem-sucedido:', response);
            navigate('/');
        } catch (err) {
            console.error('Erro no login:', err);
            setError('Email ou senha incorretos');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 flex items-center justify-center min-h-[calc(100vh-4rem)]">
            <div className="w-full max-w-md">
                <div className="card p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-primary mb-2">
                            Bem-vindo de volta!
                        </h2>
                        <p className="text-text-secondary">
                            Entre na sua conta para continuar
                        </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="input"
                                    placeholder="seu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-text-secondary mb-1">
                                    Senha
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="input"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="text-text-accent text-sm text-center bg-text-accent/10 p-3 rounded-lg">
                                {error}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`btn btn-primary w-full ${
                                    loading ? 'opacity-70 cursor-not-allowed' : ''
                                }`}
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                fill="none"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Entrando...
                                    </div>
                                ) : (
                                    'Entrar'
                                )}
                            </button>
                        </div>

                        <div className="mt-4 text-center">
                            <p className="text-sm text-text-secondary">
                                Ainda não tem uma conta?{' '}
                                <a href="#" className="text-primary hover:text-secondary font-medium">
                                    Cadastre-se
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
} 