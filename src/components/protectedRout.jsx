import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ role, children }) => {
const navigate = useNavigate();
    useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (!storedRole) {
    navigate('/login');
    } else if (storedRole !== role) {
    navigate('/login');
    }
}, [navigate, role]);

return children;
};

export default ProtectedRoute;