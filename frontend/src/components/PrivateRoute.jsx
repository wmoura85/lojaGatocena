import { Navigate } from 'react-router-dom';
import { authService } from '../services/authService';

export function PrivateRoute({ children }) {
    const user = authService.getCurrentUser();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
}