import { isAuthenticated } from './components/auth'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}