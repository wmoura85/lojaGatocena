const API_URL = 'http://localhost:8080/api';

class AuthService {
    async login(email, password) {
        try {
            // Por enquanto, vamos apenas simular o login para testar a interface
            // Remova este mock quando o backend estiver pronto
            console.log('Tentando login com:', email);
            
            // Simula um delay de rede
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Simula um login bem-sucedido
            const mockResponse = {
                token: 'mock-jwt-token',
                user: {
                    email: email,
                    name: 'Usuário Teste'
                }
            };
            
            localStorage.setItem('user', JSON.stringify(mockResponse));
            return mockResponse;
            
            /* Descomente este código quando o backend estiver pronto
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Credenciais inválidas');
            }

            const data = await response.json();
            if (data.token) {
                localStorage.setItem('user', JSON.stringify(data));
            }
            return data;
            */
        } catch (error) {
            console.error('Erro no login:', error);
            throw error;
        }
    }

    logout() {
        localStorage.removeItem('user');
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export const authService = new AuthService();